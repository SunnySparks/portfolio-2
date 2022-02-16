import './portfolio.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons' 
import acnh from './media/acnh.png';

const Portfolio = () => (
  <div className="bg-img">
    <div>Portfolio</div>
    <div>
      <h1>Front-End Projects</h1>
      <ul>
        <li>
          <h3>ACNH Metrics</h3>
          <div className="d-flex flex-row text-center">
            <img src={acnh} className='img-container'></img>
            <div className="project-text mx-3 p-2">
              <p>This was my ReactJS Capstone project. The purpose of this project was to build an entire react application that consumed data from the Animal Crossing: New horizons API. This application consists of 3 different pages: Villagers, Fossils and Art</p>
              <div className="ml-auto mr-auto">
                <p>Built With:</p>
                <h2><FontAwesomeIcon icon={faHtml5} /></h2>
                <h2><FontAwesomeIcon icon={faCss3Alt} /></h2>
                <h2><FontAwesomeIcon icon={faJs} /></h2>
                <h2><FontAwesomeIcon icon={faReact} /></h2>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <h1>Full-Stack and Back-End Projects</h1>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
);

export default Portfolio;