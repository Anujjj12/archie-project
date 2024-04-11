import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.body && req.method === "POST") {
    await addDoc(collection(db, "users"), req.body);
    res.status(200).json({ message: "User added successfully" });
  } else {
    res
      .status(400)
      .json({ error: "Oops! Something went wrong. Please contact our team" });
  }
}
