// MyComponent.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../config/firebase';
import CryptoJS from "crypto-js";
import MyBox from "../pages/myBox";
import { useNavigate } from "react-router-dom";


function FetchMyBox(){
  const naviagate = useNavigate();

  const [items, setItems] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [count, setCount] = useState(0);


    const [fieldBoxName, setFieldBoxName] = useState('');
    const [fieldBoxCode, setFieldBoxCode] = useState('');
    const [boxName, setBoxName] = useState('');
    const [boxCode, setBoxCode] = useState('');

    const [fieldsFilled, setFieldsFlled] = useState(false);
    const [message, setMessage] = useState('')
    const hashedBoxCode = CryptoJS.SHA256(boxCode).toString();


  const fetchMyBox = () => {
    if(!fieldBoxName || !fieldBoxCode) {
      setFieldsFlled(false) 
      return alert('All required field must be filled')
    }
    setFieldsFlled(true)
    setCount(count+1);
    
    setMessage('')

    setBoxName(fieldBoxName)
    setBoxCode(fieldBoxCode)
    
    setTimeout(()=>{
      setFieldsFlled(false)
      }, 300)
  }

  useEffect(() => {
    
    const fetchItems = async () => {
      
      try {
        setLoading('Searching...')
          const q = query(collection(db, "boxes"), where("boxName", "==", boxName.trimEnd()), where('boxCode', '==', hashedBoxCode ));
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            setItems(doc.data());

          } else {
            setItems(false)
          }
        } catch (err) {
          setError("Failed to fetch data.");
          console.error("Error fetching documents: ", err);
        }finally{
          if(!items && count > 0){
            setMessage('INVALID CREDENTIALS')
            setLoading('')
            setTimeout(()=>{setMessage('')}, 2000)
          }else{
            setMessage('')
            setLoading('')
          }
        }
    }
    fetchItems();
  }, [boxName, hashedBoxCode,items, count]);

      if(items){
        naviagate(`/my-box/${items.boxName}`, {state: {boxData : items}})
      }

      return (
    <div className="w-fit h-fit bg-none border border-[#84c8ff] p-4 flex flex-col gap-4 justify-center rounded-3xl ">
      <h1 className="font-bold text-[#84c8ff]">MY SUGGESTION BOX</h1> 
      <input type="text" name="" id="" placeholder="Box Name" value={fieldBoxName.trimStart()} onChange={e => setFieldBoxName(e.target.value)} className="p-2" />
      <input type="password" name="" id="" placeholder="Password" value={fieldBoxCode.trimStart().trimEnd()} onChange={e => setFieldBoxCode(e.target.value)}  className="p-2" />
      {message ? <span className="self-center">{message}</span> : ''}
        <button onClick={fetchMyBox} disabled={fieldsFilled} className="w-fit bg-[#0b90fc] hover:bg-[#289bf9] hover:text-black text-white px-6 py-2 rounded-2xl self-center" >
          {loading ? loading : 'GO'}
        </button>
    </div>

  )
}

export default FetchMyBox