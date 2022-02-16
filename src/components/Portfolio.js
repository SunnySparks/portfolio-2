import './portfolio.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons' 
import acnh from './media/acnh.png';
import space from './media/space.png';

const Portfolio = () => (
  <div className="bg-pink pt-5">
    <div className="pt-2">
      <h1 className="gamer-font text-white">Front-End Projects</h1>
      <ul>
        <li className="project-cont m-3 p-3">
          <h3>ACNH Metrics</h3>
          <div className="d-flex flex-row text-center align-items-center">
            <img src={acnh} className='img-container'></img>
            <div className="project-text mx-3 p-2">
              <p>This was my ReactJS Capstone project. The purpose of this project was to build an entire react application that consumed data from the Animal Crossing: New horizons API. This application consists of 3 different pages: Villagers, Fossils and Art</p>
              <div className="ml-auto mr-auto">
                <p>Built With:</p>
                <h2><FontAwesomeIcon icon={faHtml5} /></h2>
                <h2><FontAwesomeIcon icon={faCss3Alt} /></h2>
                <h2><FontAwesomeIcon icon={faJs} /></h2>
                <h2><FontAwesomeIcon icon={faReact} /></h2>
                <a href="https://github.com/SunnySparks/acnh-metrics"><button class="button button--telesto"><span><span>See the project</span></span></button></a>
              </div>
            </div>
          </div>
        </li>
        <li className="project-cont m-3 p-3">
          <h3>Spaceships App</h3>
          <div className="d-flex flex-row text-center align-items-center">
            <img src={space} className='img-container'></img>
            <div className="project-text mx-3 p-2">
              <p>React-Redux Spaceship web application thatpulls data from the SpaceX API, Users can book their favorite rockets and space missions, and they can see it from their profiles</p>
              <div className="ml-auto mr-auto">
                <p>Built With:</p>
                <h2><FontAwesomeIcon icon={faHtml5} /></h2>
                <h2><FontAwesomeIcon icon={faCss3Alt} /></h2>
                <h2><FontAwesomeIcon icon={faJs} /></h2>
                <h2><FontAwesomeIcon icon={faReact} /></h2>
                <a href="https://github.com/SunnySparks/spaceships"><button class="button button--telesto"><span><span>See the project</span></span></button></a>
              </div>
            </div>
          </div>
        </li>
        <li className="project-cont m-3 p-3">
          <h3>Spaceships App</h3>
          <div className="d-flex flex-row text-center align-items-center">
            <img src={space} className='img-container'></img>
            <div className="project-text mx-3 p-2">
              <p>React-Redux Spaceship web application thatpulls data from the SpaceX API, Users can book their favorite rockets and space missions, and they can see it from their profiles</p>
              <div className="ml-auto mr-auto">
                <p>Built With:</p>
                <h2><FontAwesomeIcon icon={faHtml5} /></h2>
                <h2><FontAwesomeIcon icon={faCss3Alt} /></h2>
                <h2><FontAwesomeIcon icon={faJs} /></h2>
                <h2><FontAwesomeIcon icon={faReact} /></h2>
                <a href="https://github.com/SunnySparks/spaceships"><button class="button button--telesto"><span><span>See the project</span></span></button></a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <h1 className="gamer-font text-white">Full-Stack and Back-End Projects</h1>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
);

export default Portfolio;