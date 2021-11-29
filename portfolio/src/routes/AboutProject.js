import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar';
import { useParams } from 'react-router';
import "../components/AboutProject.css"
import Slider from '../components/Slider';
export default function AboutProject() {
    const { title } = useParams();

    return(
        <div>
        <Navbar/>

            <Link to="/projects"><div class="goback"><FontAwesomeIcon icon={faArrowLeft} style={{position:"relative"}}/> &nbsp; Back</div> </Link>
            <div class="aa" style={{marginTop:"0px", color:"white"}}><span>{title}</span></div>
            <Slider/>

            

        </div>
    );
}