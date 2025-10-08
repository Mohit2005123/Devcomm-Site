import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Row, Col } from "react-bootstrap";
import styles from './AboutButtons.module.css'
import Scroll from 'react-scroll';

const AboutButtons = () => {
    return (
        <motion.div className={`w-100`}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <Container fluid>
                <Row className={`justify-content-lg-end justify-content-center`}>
                    <Col className={`d-flex justify-content-evenly p-2 ${styles['buttons-container']}`} lg={6} xs={11}>
                        <Scroll.Link to='team' spy={true}  duration={200} smooth={true} className={`${styles['button']} ${styles['selected']} text-white fs-4 fw-bold text-decoration-none`}>
                            Our Team
                        </Scroll.Link>
                        <Link to='walloffame' className={`text-white text-decoration-none ${styles['button']} fs-4 fw-bold`}>
                                Wall of Fame
                        </Link>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default AboutButtons;