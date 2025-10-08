import { Container } from 'react-bootstrap';
import AboutButtons from '../Components/About/AboutButtons';
import AboutText from '../Components/About/AboutText';
import IntroductionBackground from '../Components/About/IntroductionBackground';
import Team from '../Components/About/Team';

const About = () => {
    return (
        <>
            <Container fluid className={`p-0 d-flex vh-100 flex-column justify-content-evenly align-items-end`}>
                <IntroductionBackground />
                <AboutText />
                <AboutButtons />
            </Container>
            <Team />
        </>
    )
}

export default About;