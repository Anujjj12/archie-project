import { Button, Card, Col, Row, Tag } from "antd";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { placeOrder } from "../Home/services";

const CartButton = () => {
  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);

  const handleOrder = () => {
    setLoading(true);
    placeOrder({
      username: localStorage.username,
      cart,
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <Header />
      <div className="padding-left-right-50 margin-top-100px ">
        <Card
          title="Your Cart"
          actions={[
            <div className="text-right">
              <Tag>
                Total:{" "}
                {cart.reduce(
                  (acc, product) =>
                    acc + product.price.split(" Rs")[0] * product.quantity,
                  0
                )}{" "}
                Rs
              </Tag>
              <Button
                onClick={handleOrder}
                type="primary"
                className="margin-right-10px"
                loading={loading}
              >
                Place Order
              </Button>
            </div>,
          ]}
        >
          {cart.map((product) => (
            <Card className="margin-top-10px">
              <Row gutter={[10, 40]} className="mb-20">
                <Col span={5}>
                  <img
                    src={product.img}
                    alt="godrej"
                    height={200}
                    width={200}
                  />
                </Col>
                <Col span={6}>
                  <h3>{product.title}</h3>
                  <div>
                    Quantity : <b>{product.quantity}</b>{" "}
                  </div>
                  <div>
                    Model No :{" "}
                    <b>
                      {product.modelNo} - {product.vendor}
                    </b>{" "}
                  </div>
                  <div>
                    Price : <b>{product.price}</b>{" "}
                  </div>
                  <div>
                    Total :{" "}
                    <b>{product.price.split(" Rs")[0] * product.quantity} Rs</b>{" "}
                  </div>
                </Col>
              </Row>
            </Card>
          ))}
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default CartButton;
