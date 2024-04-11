import { MailOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="position-relative">
        <img
          src="/images/contact-us.jpeg"
          alt="Siddhi Enterprise"
          height="400px"
          width="100%"
          style={{ objectFit: "cover" }}
        />
        <div className="about-us-img-blur"></div>
        <div className="about-us-img-text">Contact Us</div>
      </div>
      <Row className="margin-left-10 margin-top-50px">
        <Col span={8}>
          <h1>Our Office</h1>
          <div className="mt-5">Siddhi Enterprise Pvt.Ltd</div>
          <div className="mt-5">Dariyapur</div>
          <div className="mt-5">Ph: +91 90813848485</div>
          <div className="mt-5">
            <MailOutlined />
            <span className="ml5"> prashil@gmail.com</span>
          </div>
        </Col>
        <Col span={12}>
          <a href="https://www.google.com/maps/search/siddhi+enterprises/@23.0309564,72.5656171,13.36z?entry=ttu">
            <img src="images/Map.png" height="300px" width="100%" />
          </a>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default ContactUs;
