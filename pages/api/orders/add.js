import { db } from "@/firebase";
import { collection, addDoc, query, getDocs, where } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  if (req.body && req.method === "POST") {
    let myuuid = uuidv4();

    const collectionRefCart = collection(db, "cart");
    const q = query(
      collectionRefCart,
      where("username", "==", req.query.username)
    );

    const docs = await getDocs(q);
    docs
      .forEach((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          doc.delete();
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: "Oops! Something went wrong. Please contact our team",
        });
      });

    await addDoc(collection(db, "orders"), {
      id: myuuid,
      type: "PLACED",
      ...req.body,
    });

    res.status(200).json({ message: "Order Successfully Placed" });
  } else {
    res
      .status(400)
      .json({ error: "Oops! Something went wrong. Please contact our team" });
  }
}
