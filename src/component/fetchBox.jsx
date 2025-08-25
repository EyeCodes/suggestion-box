// MyComponent.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../config/firebase';
import { useParams } from "react-router-dom";
import Form from "../pages/form";
import PageEmpty from "../layout/emptyPage";

function FetchBox() {

  const { box } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const q = query(collection(db, "boxes"), where("boxName", "==", box));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          setItems(doc.data());
        } else {
          setItems(false)
          console.log("No such document!");
        }
      } catch (err) {
        setError("Failed to fetch data.");
        console.error("Error fetching documents: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [box]); 

  if (loading) return <div>Loading...</div>;
  if(!items || !box){
    return <PageEmpty message='NO SUGGESTION BOX HERE' />
  }
  
  if (error) return <div>Error: {error}</div>;

  return <Form box={items} />
}

export default FetchBox;