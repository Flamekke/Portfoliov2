import './Navbar.css'
import React, {useEffect, useState, useRef} from "react";
import styled, { css } from 'styled-components';
import StyledMenu from 'styled-components';


const ESC_KEY_CODE = 'Escape';

const Navbar1 = (props) => {
  const {
    navOpen,
    navIsAnimating,
    closeNav,
  } = props;
  const keyPressHandler = ({ key }) => {
    if (key === ESC_KEY_CODE && navOpen) {
      closeNav();
    }
  };
  React.useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
    };
  }, [navOpen]);
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
                  About Major Tom
                </a>
              </li>
              <li className="link">
                <a
                  href="https://images.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  Photos from a Tin Can
                </a>
              </li>
              <li className="link">
                <a
                  href="https://www.nasa.gov/audience/foreducators/stem-on-station/ditl_eating"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  Shop for Protein Pills
                </a>
              </li>
              <li className="link">
                <a
                  href="https://en.wikipedia.org/wiki/Mission_control_center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  Contact Ground Control
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-right col-image">
            <img
              className="astro"
              src="https://i.imgur.com/0pWqp5j.png" />
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
        <main className="page">
          <div className="wrap">
            <div className="title-section text-wrapper">
              <h1>Is There Life on Mars?</h1>
              <span className="author">By David Robert Jones</span>
            </div>
          </div>
          <img className="some-image" src="https://images.unsplash.com/photo-1573588028698-f4759befb09a" />
          <div className="wrap">
            <div className="text-body text-wrapper">
              <p>It's a god-awful small affair, to the girl with the mousy hair. But her mummy is yelling, "No!", and her daddy has told her to go. But her friend is nowhere to be seen, now she walks through her sunken dream, to the seat with the clearest view. And she's hooked to the silver screen</p>
<p><br />But the film is a saddening bore, for she's lived it ten times or more. She could spit in the eyes of fools, as they ask her to focus on sailors fighting in the dance hall; Oh man! Look at those cavemen go; It's the freakiest show. Take a look at the lawman beating up the wrong guy, oh man! Wonder if he'll ever know, he's in the best selling show. Is there life on Mars?</p>
<p><br />It's on America's tortured brow, that Mickey Mouse has grown up a cow. Now the workers have struck for fame, because Lennon's on sale again. See the mice in their million hordes, from Ibiza to the Norfolk Broads. Rule Britannia is out of bounds to my mother, my dog, and clowns.</p>
<p><br />But the film is a saddening bore, for she's lived it ten times or more. She could spit in the eyes of fools, as they ask her to focus on sailors fighting in the dance hall; Oh man! Look at those cavemen go; It's the freakiest show. Take a look at the lawman beating up the wrong guy, oh man! Wonder if he'll ever know, he's in the best selling show. Is there life on Mars?</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}



export default Navbar;