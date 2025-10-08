import { Container, Image } from 'react-bootstrap';
import jcImage from '../../Assets/Images/devcomm_bg.jpg'
import styles from './IntroductionBackground.module.css';

const IntroductionBackground = () => {
    return (
        <Container
            fluid
            className={`vh-100 vw-100 overflow-hidden p-0 position-absolute ${styles['background-img-container']}`}
        >
            <Image 
                alt='Background' 
                src={jcImage}
                className={`w-100 ${styles['background-img']}`}
            >
            </Image>
        </Container>
    )
}

export default IntroductionBackground;