import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  // Handle input changes
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  // Handle form submit - no backend call
  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    // Simulate sending delay
    setTimeout(() => {
      setButtonText('Send');
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Message sent successfully!' });
    }, 1000);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formDetails.firstName}
                    onChange={e => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={e => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formDetails.email}
                    onChange={e => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formDetails.phone}
                    onChange={e => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    placeholder="Message"
                    value={formDetails.message}
                    onChange={e => onFormUpdate('message', e.target.value)}
                    rows={5}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {status.message && (
                  <Col sm={12}>
                    <p className={status.success === false ? "danger" : "success"}>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
