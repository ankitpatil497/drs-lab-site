import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomeVisitAndTiming = () => {
  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="fw-bold text-primary">
              <i className="bi bi-house-door-fill me-2"></i>Home Visit Available
            </h2>
            <p className="lead">
              We offer sample collection at your doorstep in Dindoli and nearby
              areas. Book your appointment via WhatsApp or Call.
            </p>
            <a
              href="https://wa.me/7228833811"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mt-3"
            >
              <i className="bi bi-whatsapp me-1"></i> Book on WhatsApp
            </a>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <h3 className="text-dark fw-semibold mb-3">
              <i className="bi bi-clock-fill me-2 text-warning"></i>Lab Timings
            </h3>
            <p className="mb-1 fs-5">🕒 Monday – Saturday: 7:00 AM to 9:00 PM</p>
            <p className="fs-5">🕒 Sunday: 7:00 AM to 12:00 PM</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeVisitAndTiming;
