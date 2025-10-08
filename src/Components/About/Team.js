import teamList from './teamList';
import TeamItem from './TeamItem';
import styles from './Team.module.css';
import { Element } from 'react-scroll';
import { Col, Row } from 'react-bootstrap';

const Team = () => {

    return (
        <Element id='team' fluid className={`p-4 border-top`}>
            <div className={`d-flex align-items-center justify-content-center`}>
                <h1 className={`fw-bold text-center ${styles['title']}`}>Core Team '24</h1>
            </div>

            <Row style={{justifyContent: 'center'}}>
                {teamList.slice(0, 2).map((teamItem) => {
                    return (
                        <Col xs={6} md={5}>
                            <TeamItem
                                name={teamItem.name}
                                position={teamItem.position}
                                image={teamItem.image}
                            />
                        </Col>
                    )
                })}
            </Row>
            <Row>
                {teamList.slice(2).map((teamItem) => {
                    return (
                        <Col xs={6} sm={4}>
                            <TeamItem 
                                name={teamItem.name}
                                position={teamItem.position}
                                image={teamItem.image}
                            />
                        </Col>
                    )
                })}
            </Row>
        </ Element>
    )
}

export default Team;