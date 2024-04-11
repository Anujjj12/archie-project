import { productCategories } from "@/common/data";
import { Button, Card, Col, Row, Skeleton } from "antd";
import Router, { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { getProducts, productDetails } from "./services";
const { Meta } = Card;

const ProductDetails = () => {
  const router = useRouter();
  console.log("Query", router);
  const { query } = router || {};

  const [data, setData] = useState();

  const { id } = query || {};

  useEffect(() => {
    if (id) {
      getProducts(id).then((data) => setData(data));
    }
  }, [id]);

  if (!id) {
    return null;
  }
  const handleDetails = (id) => {
    Router.push(`/product-description/${id}`);
  };

  return (
    <>
      <Header />
      <Row className="margin-top-30px">
        <Col span={24}>
          <div className="flex align-center justify-center flex-column">
            {/* <h2 className="mb-0">{dataSource?.title}</h2> */}
          </div>
          <Row
            className="padding-left-right-50 flex align-center justify-center"
            gutter={[16, 16]}
          >
            {data ? (
              data?.map((productCard) => {
                return (
                  <>
                    <Col span={6} className="flex align-center justify-center">
                      <Card
                        onClick={() => handleDetails(productCard.id)}
                        hoverable
                        style={{
                          width: "280px",
                        }}
                        cover={
                          <img
                            alt={productCard.title}
                            src={productCard.img}
                            height={200}
                            width={200}
                          />
                        }
                        className="margin-top-50px"
                      >
                        <Meta
                          title={productCard.title}
                          description={`Available Units : ${productCard.available}`}
                        />
                      </Card>
                    </Col>
                  </>
                );
              })
            ) : (
              <Skeleton />
            )}
          </Row>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default ProductDetails;
