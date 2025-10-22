import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <div style={{ minHeight: '75vh', background: 'linear-gradient(180deg, #071029, #0f172a)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="p-4 text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <h1 className="text-light mb-2" style={{ fontWeight: 600 }}>Contact</h1>

              <p className="text-light mb-3" style={{ fontSize: '1rem' }}>
                For any inquiries, please email us at
              </p>

              <p className="mb-0">
                <a href="mailto:devcomm.international@nsut.ac.in" className="d-inline-block text-info" style={{ fontSize: '1.05rem', fontWeight: 600 }}>devcomm.international@nsut.ac.in</a>
              </p>

              <p className="text-muted mt-3" style={{ fontSize: '0.9rem' }}>This page only displays contact information. To send a message, please email the address above.</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;