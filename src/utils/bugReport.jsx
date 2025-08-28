
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const SendReport =async (bugReport) =>{

  try{
      const docRef = await addDoc(collection(db, 'reports'),{
        title: bugReport.title,
        type: bugReport.type,
        about: bugReport.about,
        box: bugReport.box,
        createAt: serverTimestamp()
      })
      console.log(docRef.doc)
  }
  catch(e){
    console.error(e)
  }

}