import { showError } from "@/common/utils";
import axios from "axios";
import { setCartInfo } from "../Cart/redux/actionCreator";

export const ourPartners = [
  {
    img: "/images/godrej1.jpg",
    productName: "Godrej",
  },
  {
    img: "/images/europa.jpg",
    productName: "Europa",
  },
  {
    img: "/images/ozone.jpg",
    productName: "Ozone",
  },
  {
    img: "/images/kpro.jpg",
    productName: "KPro",
  },
];

export const ourPartnersCatalogue = [
  {
    img: "/images/godrej1.jpg",
    productName: "HAFFELE",
    catalogue: "/pdfs/HAFELE_23.pdf",
  },
  {
    img: "/images/europa.jpg",
    productName: "Europa",
    catalogue: "/pdfs/HAFELE_23.pdf",
  },
  {
    img: "/images/ozone.jpg",
    productName: "Ozone",
    catalogue: "/pdfs/HAFELE_23.pdf",
  },
  {
    img: "/images/kpro.jpg",
    productName: "KPro",
    catalogue: "/pdfs/HAFELE_23.pdf",
  },
];

export const productDetails = [
  {
    productId: 1,
    img: "/images/digitallock.jpeg",
    productName: "Locks/Digital Locks",
    description: "High protection for the door.",
  },
  {
    productId: 2,
    img: "/images/desk.jpg",
    productName: "Desk Fittings",
    description: "Makes your work area look more interesting!",
  },
  {
    productId: 3,
    img: "/images/drawer.jpg",
    productName: "Drawer System",
    description: "Makes furniture more exciting.",
  },
  {
    productId: 4,
    img: "/images/hinges.jpeg",
    productName: "Furniture Hinges",
    description: "High tech for the door.",
  },
  {
    productId: 5,
    img: "/images/kitchen.jpg",
    productName: "Kitchen Accessories",
    description: "Aesthetic Kitchen Feels!!",
  },
  {
    productId: 6,
    img: "/images/aluminium.jpg",
    productName: "Aluminium Profiles",
    description: "Light weight and multi-purpose",
  },
  {
    productId: 7,
    img: "/images/lift_up.jpg",
    productName: "Lift-up Systems",
    description: "Makes you play with furniture.",
  },
  {
    productId: 8,
    img: "/images/wardrob.jpg",
    productName: "Wardrobe Sliding Systems",
    description: "Would make you buy expensive clothes too..",
  },
  {
    productId: 9,
    img: "/images/handles.jpg",
    productName: "Handles",
    description: "Pull/Push me easily",
  },
  {
    productId: 10,
    img: "/images/bed.jpg",
    productName: "Bed Fittings",
    description: "High tech for the door.",
  },
];

export const getCategories = () => {
  return axios
    .get("/api/category/all")
    .then(({ data }) => data.data)
    .catch(showError);
};

export const getProducts = (id) => {
  return axios
    .get("/api/products/productById", {
      params: { id },
    })
    .then(({ data }) => data.data)
    .catch(showError);
};

export const getProductDetail = (id) => {
  return axios
    .get("/api/products/productDetail", {
      params: { id },
    })
    .then(({ data }) => data.data)
    .catch(showError);
};

export const addToCart = (payload) => {
  return axios
    .post("/api/cart/add", payload)
    .then(({ data }) => data)
    .catch(showError);
};

export const getCartInfo = (params, dispatch) => {
  return axios
    .get("/api/cart/user", {
      params,
    })
    .then(({ data }) => dispatch(setCartInfo(data.data)))
    .catch(showError);
};

export const placeOrder = (payload, dispatch) => {
  return axios
    .post("/api/orders/add", payload)
    .then(({ data }) => data)
    .catch(showError);
};
