import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Carousel, Col, Row, Skeleton } from "antd";
import Router from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { getCategories, homeCards, ourPartners } from "./services";
const { Meta } = Card;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();

  const user = JSON.parse(localStorage.getItem("Data") || "{}");

  const handleDetails = (id) => {
    Router.push(`/product-details/${id}`);
  };

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <Row>
        <Col span={24}>
          <Carousel autoplay>
            <div className="carousel-image1 carousel-img-prop"></div>
            <div className="carousel-image2 carousel-img-prop"></div>
            <div className="carousel-image1 carousel-img-prop"></div>
            <div className="carousel-image2 carousel-img-prop"></div>
          </Carousel>

          <div className="padding-left-right-50 flex align-center justify-center margin-top-100px flex-column">
            <div className="flex align-center justify-center flex-column">
              <h2>
                Revolutionizing furniture landscapes with <br />
                cutting-edge innovations.
              </h2>
              <div className="width-60">
                <p>
                  {" "}
                  Through a continuous stream of innovations and an unwavering
                  commitment to fresh ideas, we have become the driving force
                  behind trends that redefine the versatility and adaptability
                  of modern furniture concepts. Our cutting-edge technology
                  plays a pivotal role in this evolution, constantly pushing
                  boundaries and setting new standards.
                </p>
                <p>
                  Our dedication to research remains steadfast, fueling our
                  passion to develop intelligent functionalities that breathe
                  life into the furniture of tomorrow. As we forge ahead, we
                  remain steadfast in our mission to revolutionize the way the
                  world interacts with furniture, enriching lives through
                  innovative design and functionality.
                </p>
              </div>
            </div>
            <Row id="products" className="flex justify-center">
              {loading ? (
                <Skeleton />
              ) : (
                categories?.map((productCard, index) => {
                  return (
                    <>
                      <Col
                        span={8}
                        className="flex align-center justify-center"
                      >
                        <Card
                          hoverable
                          style={{
                            width: "400px",
                          }}
                          cover={
                            <img
                              alt={productCard.productName}
                              src={productCard.img}
                              height={400}
                              width={400}
                            />
                          }
                          actions={[
                            <Button
                              type="primary"
                              onClick={() =>
                                handleDetails(productCard.productId)
                              }
                            >
                              Find Out More
                            </Button>,
                          ]}
                          className="margin-top-50px"
                        >
                          <Meta
                            title={productCard.productName}
                            description={productCard.description}
                          />
                        </Card>
                      </Col>
                    </>
                  );
                })
              )}
            </Row>
          </div>
          <Row className="padding-left-right-50 margin-top-100px about-company product-service-wrapper">
            <Col span={12} className="flex flex-column align-start">
              {" "}
              <h2>About Company</h2>
              <p className="margin-top-0">
                Siddhi Enterprise is a young dynamic company offering
                Architectural Hardware Solutions through a wide range of
                standard and customized products.
              </p>
              <p className="margin-top-0">
                Our focus on international standards has enabled us to establish
                a state-of-the-art manufacturing facility and simultaneously
                raise the entire work ethics as per global best practices.
              </p>
              <Button>Learn More</Button>
            </Col>
            <Col span={12} className="text-center">
              <img
                className="about-company-img"
                src="/images/siddhi_enterprise.jpg"
                alt="Siddhi Enterprise"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24} className="padding-left-right-50 margin-top-100px">
              <div className="flex align-center justify-center flex-column">
                <h2> Our Partners</h2>
              </div>
              <Row
                className="flex align-center justify-center"
                gutter={[16, 16]}
              >
                {ourPartners.map((partner) => {
                  return (
                    <Col span={4} className="flex align-center justify-center ">
                      <Card
                        hoverable
                        style={{
                          width: 200,
                          height: 200,
                        }}
                        cover={
                          <img
                            alt={partner.productName}
                            src={partner.img}
                            width={150}
                            height={150}
                          />
                        }
                        className="margin-top-50px partner-card"
                        bodyStyle={{ display: "none" }}
                      ></Card>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Home;
