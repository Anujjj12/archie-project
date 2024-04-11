import { db } from "@/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.body && req.method === "POST") {
    if (!req.body?.username || !req.body?.password) {
      res.status(400).json({ message: "Please enter valid credentials!" });
    } else {
      const collectionRef = collection(db, "users");
      const q = query(
        collectionRef,
        where("username", "==", req.body.username)
      );

      if (req.body.username) {
        getDocs(q)
          .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            });
            const obj = data?.[0];
            if (obj && obj.password === req.body.password) {
              res.status(200).json(obj);
            } else {
              res
                .status(400)
                .json({ message: "Please enter valid credentials!" });
            }
          })
          .catch((error) => {
            res.status(400).json({
              message: "Oops! Something went wrong. Please contact our team",
            });
          });
      } else {
        res.status(200).json({ message: "No data found" });
      }
    }
  } else {
    res
      .status(400)
      .json({ error: "Oops! Something went wrong. Please contact our team" });
  }
}
