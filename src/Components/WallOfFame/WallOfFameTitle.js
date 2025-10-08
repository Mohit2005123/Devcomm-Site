import { Row, Col } from 'react-bootstrap';
import styles from './WallOfFameTitle.module.css';
 
const WallOfFameTitle = () => {
    return (
        <Row className={`text-white fw-bolder p-2 m-0 mt-5`}>
            <Col sm={12} md className={`d-flex align-items-center justify-content-center ps-4 pe-4`}>
                <span className={`${styles['line']}`}></span>
            </Col>
            <Col sm={12} md={3} className={`p-0`}>
                <h1 className={`text-center mt-2 mb-2 p-0`}>Wall of Fame</h1>
            </Col>
            <Col sm={12} md className={`d-flex align-items-center justify-content-center ps-4 pe-4`}>
                <span className={`${styles['line']}`}></span>
            </Col>
        </Row>
    )
}

export default WallOfFameTitle;