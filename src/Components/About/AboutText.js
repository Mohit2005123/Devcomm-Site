import { Col, Container, Row } from "react-bootstrap";

const AboutText = () => {
    return (
        <Container fluid 
            className='p-4'
        >
            <Row className={`justify-content-end`}>
                <Col sm={12} lg={7}>
                    <h1 
                        className={`text-white text-center text-lg-end text-uppercase fw-bold fs-1 mb-4`}
                    >
                        About Us
                    </h1>
                    <p
                        className={`text-white text-center text-lg-end fs-5 lh-base`}
                    >
                        The International Developers Community (DevComm) started off with a handful of ambitious developers who were still just college students. As time went by, the organisation has grown into something wonderful with chapters in established institutes and universities, like NSUT. DevComm helps with the technical and non-technical development of a college student by all means possible by hosting competitions, hackathons, fests, etc. DevComm  is directly responsible for many commercial and non-commercial projects. The organisation also boasts a member portal for student resources.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutText;