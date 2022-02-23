import './portfolio.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons' 
import acnh from './media/acnh.png';
import space from './media/space.png';
import math from './media/math.png';
import screen from './media/screen.png';
import recipe from './media/recipe.png';
import lint from './media/lint.jpeg';
import ruby from './media/ruby.png';
import life from './media/life.png';
import rails from './media/rails.png';

const Portfolio = () => (
  <div className="bg-pink pt-5">
    <div className="pt-2">
      <h1 className="gamer-font">Front-End Projects</h1>
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
                <h2><FontAwesomeIcon icon={faBootstrap} /></h2>
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
                <h2><FontAwesomeIcon icon={faBootstrap} /></h2>
                <a href="https://github.com/SunnySparks/spaceships"><button class="button button--telesto"><span><span>See the project</span></span></button></a>
              </div>
            </div>
          </div>
        </li>
        <li className="project-cont m-3 p-3">
          <h3>Math Magicians App</h3>
          <div className="d-flex flex-row text-center align-items-center">
            <img src={math} className='img-container'></img>
            <div className="project-text mx-3 p-2">
              <p>This is a React calculator app, this app consists of a single-page application that contains 3 sub pages and a calculator.</p>
              <div className="ml-auto mr-auto">
                <p>Built With:</p>
                <h2><FontAwesomeIcon icon={faHtml5} /></h2>
                <h2><FontAwesomeIcon icon={faCss3Alt} /></h2>
                <h2><FontAwesomeIcon icon={faJs} /></h2>
                <h2><FontAwesomeIcon icon={faReact} /></h2>
                <h2><FontAwesomeIcon icon={faBootstrap} /></h2>
                <a href="https://github.com/SunnySparks/Math-Magicians"><button class="button button--telesto"><span><span>See the project</span></span></button></a>
              </div>
            </div>
          </div>
        </li>
        <li className="project-cont m-3 p-3">
          <h3>Leaderboard JS</h3>
          <div className="d-flex flex-row text-center align-items-center">
            <img src={screen} className='img-container'></img>
            <div className="project-text mx-3 p-2">
              <p>This is a Javascript web app, this app registers high scores and then sends them to an external API, where it retrieves the data from and displays it in the website.</p>
              <div className="ml-auto mr-auto">
                <p>Built With:</p>
                <h2><FontAwesomeIcon icon={faHtml5} /></h2>
                <h2><FontAwesomeIcon icon={faCss3Alt} /></h2>
                <h2><FontAwesomeIcon icon={faJs} /></h2>
                <h2><FontAwesomeIcon icon={faBootstrap} /></h2>
                <a href="https://github.com/SunnySparks/Leaderboard-JS"><button class="button button--telesto"><span><span>See the project</span></span></button></a>
              </div>
            </div>
          </div>
        </li>
        <li className="project-cont m-3 p-3">
          <h3>Recipes book</h3>
          <div className="d-flex flex-row text-center align-items-center">
            <img src={recipe} className='img-container'></img>
            <div className="project-text mx-3 p-2">
              <p>This is a Javascript recipe application, this app pulls data from a Recipe API, it displays the picture of the recipe, the ingredients and the process.</p>
              <div className="ml-auto mr-auto">
                <p>Built With:</p>
                <h2><FontAwesomeIcon icon={faHtml5} /></h2>
                <h2><FontAwesomeIcon icon={faCss3Alt} /></h2>
                <h2><FontAwesomeIcon icon={faJs} /></h2>
                <h2><FontAwesomeIcon icon={faBootstrap} /></h2>
                <a href="https://github.com/SunnySparks/Recipes-book"><button class="button button--telesto"><span><span>See the project</span></span></button></a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <h1 className="gamer-font">Full-Stack and Back-End Projects</h1>
      <ul>
        <li className="project-cont m-3 p-3">
        <h3>A Ruby Lint</h3>
          <div className="d-flex flex-row text-center align-items-center">
            <img src={lint} className='img-container'></img>
            <div className="project-text mx-3 p-2">
              <p>This is a code lint created in Ruby language. The purpose of this app is to detect unclosed parentheses, curly braces, and square brackets inside a file code of your choice. This is a program that was created as an accreditation of mastery in the Ruby language.</p>
              <div className="d-flex flex-column ml-auto mr-auto">
                <p>Built With:</p>
                <img src={ruby} className='tech-icon ml-auto mr-auto mb-2'></img>
                <a href="https://github.com/SunnySparks/Ruby-capstone"><button class="button button--telesto"><span><span>See the project</span></span></button></a>
              </div>
            </div>
          </div>
        </li>
        <li className="project-cont m-3 p-3">
        <h3>Lifestyle Articles</h3>
          <div className="d-flex flex-row text-center align-items-center">
            <img src={life} className='img-container'></img>
            <div className="project-text mx-3 p-2">
              <p>A Blog App that posts articles related to lifestyle. You can upload a cover picture, write some text about it, categorize it, and if you are logged in, vote for your favorites.</p>
              <div className="d-flex flex-column ml-auto mr-auto">
                <p>Built With:</p>
                <img src={ruby} className='tech-icon ml-auto mr-auto mb-2'></img>
                <img src={rails} className='tech-icon ml-auto mr-auto mb-2'></img>
                <a href="https://github.com/SunnySparks/Lifestyle-articles"><button class="button button--telesto"><span><span>See the project</span></span></button></a>
              </div>
            </div>
          </div>
        </li>
        <li className="project-cont m-3 p-3">
        <h3>Website backend</h3>
          <div className="d-flex flex-row text-center align-items-center">
            <img src={life} className='img-container'></img>
            <div className="project-text mx-3 p-2">
              <p>Backend service created with Ruby On Rails. It includes a database for users and also API endpoints </p>
              <div className="d-flex flex-column ml-auto mr-auto">
                <p>Built With:</p>
                <img src={ruby} className='tech-icon ml-auto mr-auto mb-2'></img>
                <img src={rails} className='tech-icon ml-auto mr-auto mb-2'></img>
                <a href="https://github.com/SunnySparks/Lifestyle-articles"><button class="button button--telesto"><span><span>See the project</span></span></button></a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Portfolio;