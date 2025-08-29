import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../config/firebase';

export const ValidateBoxName = (boxName) =>{

  const [boxNameTaken, setBoxNameTaken] = useState(false);
  const [checking, setChecking] = useState(false);
  // const [error, setError] = useState(null);

    useEffect(()=>{
      const fetchItems = async () => {
        try {
          setChecking(true)
          const q = query(collection(db, "boxes"), where("boxName", "==", boxName));
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0].data();
              if(doc) setBoxNameTaken(true)
          } 
          else{
            setBoxNameTaken(false)
          }
        } catch (err) {
          // setError("Failed to fetch data.");
          console.error("Error fetching documents: ", err);
        } finally {
          setChecking(false);
        }
      };

      fetchItems()

    },[boxNameTaken, boxName])

  // if(Checking) return <h1 className="text-white">Checking...</h1>
  // if (boxNameTaken) return <h1 className="text-red-500">Name taken</h1> 
  // if (!boxNameTaken) return <h1 className="text-green-400">Name available</h1> 

  return {boxNameTaken, checking }
  
}