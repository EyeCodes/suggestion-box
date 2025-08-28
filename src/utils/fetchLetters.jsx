import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../config/firebase';

export const FetchLetters = (boxName) => {

  const [letter, setLetter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const q = query(collection(db, "letter"), where("box", "==", boxName));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const fetchedLetters = [];
          querySnapshot.forEach((doc)=> {
              fetchedLetters.push({
                letter: doc.data(),
              })
            })
            setLetter(fetchedLetters)
        } else {
          setLetter(false)
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
  }, [boxName]); 
  

  return {letter, loading, error}

}

export default FetchLetters