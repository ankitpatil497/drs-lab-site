import React from 'react';
import '../css/Packages.css'; // Assuming you have a CSS file for styling
import { getTestIcon } from '../utils/iconHelper';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
const packages = [
  {
    title: '₹699/- Basic Body Check Up',
    tests: ['CBC MP', 'Urine', 'Lipid Profile', 'SGPT', 'Calcium', 'FBS', 'Creatinine']
  },
  {
    title: '₹350/- Diabetic Profile',
    tests: ['FBS', 'HBA1C', 'Avg Glucose', 'Creatinine', 'Urine (Glucose & Acetone)']
  },
  {
    title: '₹999/- Routine Profile',
    tests: [
      'CBC MP ESR (17)', 'Urine R/M (16)', 'Lipid Profile (8)',
      'Liver Profile (SGPT, Bilirubin)(4)', 'Blood Group',
      'Calcium', 'FBS', 'Creatinine', 'Uric Acid', 'TSH'
    ]
  },
  {
    title: '₹1899/- Body Check Up',
    tests: [
      'CBC MP ESR (17)', 'Urine R/M (16)', 'Lipid Profile (8)', 'Liver Profile (10)',
      'Kidney Profile (4)', 'Arthritis Panel (uric acid, calcium, RA)',
      'Blood Group', 'FBS', 'TSH', 'HIV', 'HBsAg'
    ]
  },
  {
    title: '₹2999/- Full Body Check Up',
    tests: [
      'CBC MP ESR (17)', 'Urine R/M (16)', 'Lipid Profile (8)', 'Liver Profile (10)',
      'Kidney Profile (4)', 'Arthritis Panel (uric acid, calcium, RA)', 'Vitamin B-12',
      'Vitamin D-3', 'T3 T4 TSH', 'Blood Group', 'FBS', 'HIV', 'HBsAg', 'HBA1C'
    ]
  }
];

const Packages = () => {
    return (
      <section id="packages" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4 fw-bold text-primary">Our Health Packages</h2>
          <Row className="g-4">
            {packages.map((pkg, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 shadow-sm border-0 rounded-4">
                  <Card.Body>
                    <Card.Title className="text-success fw-bold">{pkg.title}</Card.Title>
                    <hr />
                    <ListGroup variant="flush">
                      {pkg.tests.map((test, i) => (
                        <ListGroup.Item key={i} className="d-flex align-items-center border-0 ps-0">
                          <i className={`bi ${getTestIcon(test)} me-2 text-primary`}></i>
                          <span>{test}</span>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
  };
  

export default Packages;
