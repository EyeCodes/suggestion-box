import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


const sendLetter = async (letterContent) => {
  try{
      const docRef = await addDoc(collection(db, 'letter'),{
        name: letterContent.name, 
        type: letterContent.type,
        contet: letterContent.content,
        box: letterContent.box,
        createAt: serverTimestamp()
      })
      console.log(docRef.doc)
  }
  catch(e){
    console.error(e)
  }
}

export default sendLetter