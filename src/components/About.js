import './about.css';

const About = () => (
  <div className="bg-img d-flex align-items-center">
    <div className="d-flex flex-column text-cont">
      <div className="flex-row">
        <div className="middle my-auto mx-auto text-center p-5 gamer-font">
          Born in 1990 in Oaxaca, Mexico. I am a full stack web developer with a passion for front end and Web UI Design. I'm never scared of making mistakes, that always guides me to learn new things.
        </div>
      </div>
      <div className="d-flex flex-row skills">
        <div className="about-cont m-2 p-2">
          <h4>Languages</h4>
          <ul className="text-center pl-0">
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
            <li>
              <p>Javascript</p>
            </li>
          </ul>
        </div>
        <div className="about-cont m-2 p-2">
          <h4>Frameworks</h4>
          <ul className="text-center pl-0">
            <li>
              <p>Bootstrap</p>
            </li>
            <li>
              <p>React</p>
            </li>
          </ul>
        </div>
        <div className="about-cont m-2 p-2">
          <h4>Skills</h4>
          <ul className="text-center pl-0">
            <li>
              <p>Remote programming</p>
            </li>
            <li>
              <p>AGILE methodology</p>
            </li>
            <li>
              <p>Teamwork</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About;