import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import profileImg from '../assets/img/DP.png'; // Import the new image

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "AI Engineer", "Data Scientist", "Web Developer", "Software Engineer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
  <Container>
    <Row className="align-items-center">
      <Col xs={12} md={6} xl={7}>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <span className="tagline crazy-effect">Welcome to my Portfolio</span>
              <h1>{`Hi! I'm Devansh`}</h1>
              <h2><span className="txt-rotate" dataPeriod="1000" data-rotate='[  "AI Engineer", "Data Scientist", "Web Developer", "Software Engineer" ]'><span className="wrap">{text}</span></span></h2>
              <p>I am Devansh, a passionate AI Engineer, Data Scientist, and Software Developer with a strong background in deep learning, computer vision, and web development.</p>
              <p> In my free time, I enjoy traveling, hiking, reading tech blogs, try new recipes, play badminton and editing photos and videos. </p>
              <a href = "#connect">
              <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </a>
            </div>
          }
        </TrackVisibility>
      </Col>
      <Col xs={12} md={6} xl={5}>
        <img src={profileImg} alt="Profile" className="profile-img circle-img" />
      </Col>
    </Row>
  </Container>
</section>
  )
}
