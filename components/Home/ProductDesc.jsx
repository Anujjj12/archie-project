import { productDescription } from "@/common/data";
import {
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Card,
  Col,
  Input,
  InputNumber,
  notification,
  Row,
  Skeleton,
} from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {
  addToCart,
  getCartInfo,
  getProductDetail,
  productDetails,
} from "./services";
const { Meta } = Card;

const ProductDesc = () => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { query } = router || {};
  const { id } = query || {};
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      getProductDetail(id).then((data) => setData(data));
    }
  }, [id]);

  const onClickHandler = () => {
    addToCart({
      username: localStorage.username,
      productId: id,
      ...data,
      quantity,
    }).then(() => {
      notification.success({
        message: `${data?.title}`,
        description: `Product added to cart successfully`,
      });
      getCartInfo({ username: localStorage.username }, dispatch);
    });
  };

  if (!data) {
    return <Skeleton />;
  }

  return (
    <>
      <Header />

      <Row gutter={[50, 50]} className="margin-top-bottom-50px">
        <Col span={8} className="flex flex-column align-center">
          <Card
            className="margin-left-right-50px"
            cover={<img src={data?.img} height="400px" width="100%" />}
          >
            <Row align="middle" className="margin-top-10px" gutter={40}>
              <Col span={14}>
                <div className="flex">
                  <Button
                    icon={<MinusOutlined />}
                    shape="circle"
                    className=""
                    onClick={() => setQuantity((prev) => prev - 1)}
                    disabled={quantity === 0}
                  ></Button>
                  <InputNumber
                    placeholder="Quantity"
                    className="margin-left-10px margin-right-10px"
                    min={0}
                    max={data?.available}
                    value={quantity}
                    onChange={setQuantity}
                  ></InputNumber>
                  <Button
                    icon={<PlusOutlined />}
                    shape="circle"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  ></Button>
                </div>
              </Col>
              <Col span={10}>
                <div>
                  <Button
                    type="primary"
                    onClick={onClickHandler}
                    icon={<ShoppingCartOutlined />}
                    disabled={!quantity || quantity > data?.available}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={16}>
          <h1 className="mb-0">{data?.title}</h1>
          <p className="mt-0 description">{data?.description}</p>
          <div>
            Price: <b>{data?.price}</b>
          </div>
          <div>
            Specifications: <div></div>
            <ul>
              {data?.specifications.map((item) => {
                return <li className="margin-left-10px">{item}</li>;
              })}
            </ul>
          </div>

          <div>
            Vendor: <b>{data?.vendor}</b>
          </div>
          <div>
            Model Number: <b>{data?.modelNo}</b>
          </div>
          <div>
            Features: <b>{data?.features}</b>
          </div>
        </Col>
      </Row>

      <Footer />
    </>
  );
};

export default ProductDesc;
