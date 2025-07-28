import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light border-top">
      <Container fluid data-aos="fade-up">
        <Row className="g-0">
          {/* Contact Info */}
          <Col md={6} className="p-5 bg-white d-flex flex-column justify-content-center">
            <h2 className="mb-4 fw-bold text-primary display-5">Get in Touch</h2>

            <p className="mb-3">
              <i className="bi bi-geo-alt-fill text-primary me-2"></i>
              <strong>Address:</strong><br />
              308 Rangila Park, Near Om Nagar,<br />
              Kharvasa Road, Dindoli - 394210
            </p>

            <p className="mb-3">
              <i className="bi bi-telephone-fill text-success me-2"></i>
              <strong>Phone:</strong>{' '}
              <a href="tel:7228833811" className="text-decoration-none text-dark">7228833811</a>
            </p>

            <p className="mb-4">
              <i className="bi bi-envelope-fill text-danger me-2"></i>
              <strong>Email:</strong>{' '}
              <a href="mailto:drsdiagnosticcenter@gmail.com" className="text-decoration-none text-dark">drsdiagnosticcenter@gmail.com</a>
            </p>

            <a
              href="https://wa.me/7228833811"
              className="btn btn-success btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-whatsapp"></i> Chat on WhatsApp
            </a>
          </Col>

          {/* Map */}
          <Col md={6} className="overflow-hidden">
  <iframe
    title="Dr's Diagnostic Centre (Pathology Laboratory)"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2156.6794615277754!2d72.87295044836998!3d21.14894004348523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05106408851bf%3A0x5d08a6c2200f7f57!2sDr&#39;s%20Diagnostic%20Centre%20(Pathology%20Laboratory)!5e1!3m2!1sen!2sin!4v1753612160156!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0, minHeight: '400px' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

</Col>

        </Row>
      </Container>
    </section>
  );
};

export default Contact;
