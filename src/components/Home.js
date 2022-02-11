import './home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithubSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons' 

const Home = () => (
  <div className="bg d-flex flex-row">
    <div className="left">
      <div className="display-container">
        <h1 class="display-1 display-font">Sunny Diaz</h1>
        <div>
          <p>
            Hi There! My name is Sunny Díaz. I am a web developer and designer from Oaxaca, México.
            I love creating websites and work on the front-end and UI.
          </p>
          <h1>
            <a className="icon-link px-2" id="git-h" href="https://github.com/sunnySparks" ><FontAwesomeIcon icon={faGithubSquare} /></a>
            <a className="icon-link px-2" id="insta" href="https://www.instagram.com/webdev.sunnydiaz/"><FontAwesomeIcon icon={faInstagramSquare} /></a>
          </h1>
        </div>
      </div>
    </div>
    <div className="right">
    <div>Illustration by <a href="https://icons8.com/illustrations/author/60312013123f993d795ce208">Oleg Shcherba</a> from <a href="https://icons8.com/illustrations">Ouch!</a></div>
    </div>
  </div>
);

export default Home;