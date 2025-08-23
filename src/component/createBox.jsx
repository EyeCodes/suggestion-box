import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import CryptoJS  from 'crypto-js';


const addBox = async (boxConfig) => {

    const hashedBoxCode = CryptoJS.SHA256(boxConfig.boxCode).toString();
  try{
      const docRef = await addDoc(collection(db, 'boxes'),{
        boxName: boxConfig.boxName, 
        boxCode: hashedBoxCode,
        boxColor: boxConfig.boxColor,
        boxTitle: boxConfig.boxTitle,
        boxLogo: boxConfig.boxLogo
      })
      console.log(docRef.doc)
  }
  catch(e){
    console.error(e)
  }
}

export default addBox