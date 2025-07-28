import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2" data-aos="fade-up">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="fw-bold text-warning">DR's Diagnostic Center</h5>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>
              308 Rangila Park, Near Om Nagar,<br />
              Kharvasa Road, Dindoli – 394210
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="fw-bold text-warning">Contact</h5>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>
              <a href="tel:7228833811" className="text-white text-decoration-none">7228833811</a>
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>
              <a href="mailto:drsdiagnosticcenter@gmail.com" className="text-white text-decoration-none">
                drsdiagnosticcenter@gmail.com
              </a>
            </p>
            <p>
              <a href="https://wa.me/7228833811" target="_blank" rel="noreferrer" className="btn btn-success btn-sm mt-2">
                <i className="bi bi-whatsapp me-1"></i> WhatsApp Us
              </a>
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="fw-bold text-warning">Follow Us</h5>
            <a href="#" className="text-white me-3 fs-5"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white me-3 fs-5"><i className="bi bi-instagram"></i></a>
            {/* Add more icons if needed */}
            <p className="mt-3">
              🌐 <a href="https://drsdiagnostic.com" className="text-white text-decoration-underline">drsdiagnostic.com</a>
            </p>
          </Col>
        </Row>
        <hr className="border-secondary" />
        <p className="text-center mb-0 small">© 2025 DR’s Diagnostic Center. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
