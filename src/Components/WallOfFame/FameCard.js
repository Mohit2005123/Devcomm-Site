import { Col, Image } from 'react-bootstrap';
import styles from './FameCard.module.css';

const FameCard = ({ person }) => {
    return (
        <Col sm={8} md={5} lg={3}
            className={`d-flex flex-column align-items-center p-2 ms-1 me-1 mb-4 ${styles['card']} rounded`}
        >
            <div className={`d-flex overflow-hidden rounded-circle m-2 ${styles['img-container']}`}
                style={{ width: '150px', height: '150px' }}
            >
                <Image src={person.image} />
            </div>
            <h4 className={`fw-bold`}>{person.name}</h4>
            <h5 className={`text-center`}>{person.company}</h5>
            <h6 className={`text-secondary`}>{person.position}</h6>
            <h6 className={`text-secondary`}>{person.societyRole}</h6>
        </Col>
    )
}

export default FameCard;