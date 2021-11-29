import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar';
import "../components/AboutProject.css"
export default function AboutProject() {
    return(
        <div>
        <Navbar/>

            <Link to="/projects"><div class="goback"><FontAwesomeIcon icon={faArrowLeft} style={{position:"relative"}}/> &nbsp; Back</div> </Link>
        </div>
    );
}