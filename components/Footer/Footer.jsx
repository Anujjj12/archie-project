import { productCategories } from "@/common/data";
import { MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="footer margin-top-100px">
      <Row className="flex align-start justify-center">
        <Col span={6}>
          <b>Products</b>
          {Object.entries(productCategories).map(([key, item]) => (
            <a href={`/product-details/${key}`} className="text-white">
              <div className="margin-top-10px "> {item.title}</div>
            </a>
          ))}
        </Col>
        <Col span={6}>
          <b>Partners</b>
          <div>
            <div className="margin-top-10px ">
              <a href="" className="text-white">
                Godrej
              </a>
            </div>
            <div className="margin-top-10px ">
              <a href="" className="text-white">
                Europa
              </a>
            </div>
            <div className="margin-top-10px ">
              <a href="" className="text-white">
                Ozone
              </a>
            </div>
            <div className="margin-top-10px ">
              <a href="" className="text-white">
                KPro
              </a>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <b>Company</b>
          <a href="/aboutus" className="text-white">
            <div className="m-10">About Us</div>
          </a>
        </Col>
        <Col span={6}>
          <b>Contact Us Now</b>
          <div className="flex align-start m-10">
            <WhatsAppOutlined />
            <div className="margin-left-10px">
              Whatsapp
              <div>+91 9012344556</div>
            </div>
          </div>
          <div className="flex align-start m-10">
            <MailOutlined />
            <div className="margin-left-10px">
              Customer Support
              <div>prashilshah@gmail.com</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
