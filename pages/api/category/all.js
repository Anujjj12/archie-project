import { db } from "@/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

export default async function handler(req, res) {
  // console.log("req", req.query);

  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  getDocs(q)
    .then((querySnapshot) => {
      res.status(200).json({
        data: querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        }),
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: "Oops! Something went wrong. Please contact our team",
      });
    });
}
