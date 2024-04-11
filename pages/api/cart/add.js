import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  if (req.body && req.method === "POST") {
    let myuuid = uuidv4();
    await addDoc(collection(db, "cart"), {
      id: myuuid,
      ...req.body,
    });
    res.status(200).json({ message: "Product added to cart successfully" });
  } else {
    res
      .status(400)
      .json({ error: "Oops! Something went wrong. Please contact our team" });
  }
}
