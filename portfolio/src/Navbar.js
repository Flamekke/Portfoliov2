import './Navbar.css'
import React from "react";
import LinkedinAnimation from './asset/60586-developer-isometric-people-working-with-technology.json';
import Lottie from 'react-lottie';

const Navbar1 = (props) => {
  const {
    navOpen,
    navIsAnimating,
  } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LinkedinAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const classes = `${navOpen ? ' active' : ''}${navIsAnimating ? ' is-animating' : ''}`;
  return (
    <div className={`navigation-menu${classes}`}>
      <div className="wrap">
        <div className="cols">
          <div className="col col-left col-links">
            <ul className="links">
              <li className="link">
                <a
                  href="https://en.wikipedia.org/wiki/David_Bowie"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  Mon Curriculum vitæ
                </a>
              </li>
              <li className="link">
                <a
                  href="https://images.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  Mon LinkedIn
                </a>
              </li>
    
            </ul>
          </div>
          



          
          <div className="col col-right col-image">
          <Lottie 
                options={defaultOptions}
                loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = (props) => {
  const {
    navOpen,
    navIsAnimating,
    toggleNavHandler,
  } = props;
  return (
    <header
      className="header"
    >
      <div className="wrap">
        <button
          className={`nav-button${navIsAnimating ? ' is-animating' : ''}`}
          type="button"
          aria-label="Toggle Navigation"
          onClick={event => toggleNavHandler(event)}
        >
          <span className={`label--nav-closed${!navOpen ? ' active' : ''}`}>menu</span>
          <span className={`label--nav-open${navOpen ? ' active' : ''}`}>close</span>
        </button>
      </div>
    </header>
  );
};

class Navbar extends React.Component {
  state = {
    navOpen: false,
    navIsAnimating: false,
  };

  toggleNav = (event) => {
    event.preventDefault();
    const { navOpen } = this.state;
    if (event) event.preventDefault();
    this.setState({
      navIsAnimating: true,
    });
    if (navOpen) document.body.classList.remove('nav-open');
    if (!navOpen) document.body.classList.add('nav-open');
    setTimeout(() => {
      this.setState({
        navIsAnimating: false,
        navOpen: !navOpen,
      });
    }, 500);
  };

  openNav = (event) => {
    if (event) event.preventDefault();
    document.body.classList.add('nav-open');
    this.setState({
      navOpen: true,
    });
  };

  closeNav = () => {
    document.body.classList.remove('nav-open');
    this.setState({
      navOpen: false,
    });
  };

  render() {
    const {
      navOpen,
      navIsAnimating,
    } = this.state;
    return (
        
      <div className="layout">
        <Header
          navOpen={navOpen}
          toggleNavHandler={event => this.toggleNav(event)}
          navIsAnimating={navIsAnimating}
          />
        <Navbar1
          navOpen={navOpen}
          navIsAnimating={navIsAnimating}
          closeNav={event => this.closeNav(event)}
          toggleNavHandler={event => this.toggleNav(event)}
          />

      </div>
    );
  }
}



export default Navbar;