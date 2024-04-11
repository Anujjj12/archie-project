import { db } from "@/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

export default async function handler(req, res) {
  // console.log("req", req.query);

  if (!req.query.id) {
    res.status(400).json({
      error: "Product not found",
    });
  }

  const collectionRef = collection(db, "products");
  const q = query(collectionRef, where("id", "==", req.query.id));

  getDocs(q)
    .then((querySnapshot) => {
      res.status(200).json({
        data: querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })?.[0],
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "Oops! Something went wrong. Please contact our team",
      });
    });
}
