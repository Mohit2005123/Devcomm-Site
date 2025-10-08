import FameList from './FameList';
import FameCard from './FameCard';
import { Container, Row } from 'react-bootstrap';

const FameListContainer = () => {
    return (
        <Container fluid className={`p-0`}>
            <Row className={`m-0 justify-content-sm-center p-5 flex-wrap justify-content-md-evenly`}>
                {FameList.map(person => <FameCard person={person} />)}
            </Row>
        </Container>
    )
}

export default FameListContainer;