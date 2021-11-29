import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar';
import "../components/AboutProject.css"
export default function AboutProject() {
    return(
        <div>
        <Navbar/>

            <Link to="/projects"><svg width="277" height="62"/><span style={{color: "#E57ADE"}}><FontAwesomeIcon icon={faArrowLeft} style={{color:"#E57ADE", position:"relative"}}/> Back</span> </Link>
        </div>
    );
}