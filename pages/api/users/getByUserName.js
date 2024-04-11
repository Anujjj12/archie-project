import { db } from "@/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

export default async function handler(req, res) {
  // console.log("req", req.query);

  const collectionRef = collection(db, "users");
  const q = query(collectionRef, where("username", "==", req.query.username));

  if (req.query.username) {
    getDocs(q)
      .then((querySnapshot) => {
        res.json({
          data: querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          }),
        });
      })
      .catch((error) => {
        console.error("Error fetching documents: ", error);
      });
  }
}
