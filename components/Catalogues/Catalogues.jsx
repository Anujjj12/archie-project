import { SelectOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ourPartners, ourPartnersCatalogue } from "../Home/services";
const { Meta } = Card;

const Catalogues = () => {
  return (
    <>
      <Header />
      <div className="position-relative">
        <img
          src="/images/page-catalogue.jpeg"
          alt="Siddhi Enterprise"
          height="400px"
          width="100%"
          style={{ objectFit: "cover" }}
        />
        <div className="about-us-img-blur"></div>
        <div className="about-us-img-text">Catalogues</div>
      </div>
      <div className="flex align-center justify-center margin-top-100px">
        <Card>
          <Row className="flex align-center justify-center" gutter={[16, 16]}>
            {ourPartnersCatalogue.map((partner) => {
              return (
                <Col span={6} className="flex align-center justify-center ">
                  <Card
                    hoverable
                    style={{
                      width: 240,
                      height: 240,
                    }}
                    cover={
                      <img
                        alt={partner.productName}
                        src={partner.img}
                        height={180}
                        width={180}
                      />
                    }
                  >
                    <a href={partner?.catalogue}>
                      Open Catalogue <SelectOutlined />
                    </a>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default Catalogues;
