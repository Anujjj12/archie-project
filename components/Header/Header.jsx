import { productCategories } from "@/common/data";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Button, Menu, Tooltip } from "antd";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartInfo } from "../Home/services";
const items = [
  {
    label: <img src="/images/logo1.jpeg" height={50} />,
    key: "home",
  },
  {
    label: "About Us",
    key: "aboutus",
  },
  {
    label: "Catalogues",
    key: "catalogue",
  },
  {
    label: (
      <div
        onClick={() => {
          Router.push(`/home#products`);
        }}
      >
        Products
      </div>
    ),
    key: "products",
    children: Object.entries(productCategories).map(([key, item]) => ({
      label: item.title,
      key: `/product-details/${key}`,
    })),
  },
  {
    label: "Contact Us",
    key: "contactus",
  },
];
const Header = () => {
  const router = useRouter();
  const { query } = router || {};
  const { id } = query || {};
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onClick = (e) => {
    Router.push(`/${e.key}`);
  };

  const onHandleCart = () => {
    Router.push(`/cart`);
  };

  useEffect(() => {
    getCartInfo({ username: localStorage.username }, dispatch);
  }, []);

  return (
    <div className="primary-color padding-top-bottom-20 header flex">
      <Menu
        onClick={onClick}
        selectedKeys={[id]}
        mode="horizontal"
        items={items}
        className="primary-color flex-1 "
      />
      <Tooltip title="Cart" className="margin-top-10px">
        <Badge count={cart?.length}>
          <Button
            size="small"
            type="link"
            className="cart"
            key="cart"
            onClick={onHandleCart}
          >
            <ShoppingCartOutlined />
          </Button>
        </Badge>
      </Tooltip>

      <Tooltip title="User Profile" className="margin-top-10px">
        <Button
          size="small"
          type="text"
          className="cart margin-right-30px"
          onClick={() => Router.push("/userProfile")}
        >
          <UserOutlined />
        </Button>
      </Tooltip>
    </div>
  );
};
export default Header;
