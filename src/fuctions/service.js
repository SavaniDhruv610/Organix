import React from "react";

import {
    getFirestore,
    collection,
    getDocs,
    doc,
    deleteDoc,
    setDoc,
  } from "firebase/firestore";
  import db from "../firebase.config";
export const getFirebaseData=async()=>{
    const querySnapshot = await getDocs(collection(db, "userInfo"));
    const customers = [];
    querySnapshot.docs.forEach((doc) => {
      const historyData = doc.data().history;
      if (historyData) {
        customers.push(...historyData);
      }
    });
    return customers;

}

export const deleteFirebaseData=async(docId)=>{
    try {
        const querySnapshot = await getDocs(collection(db, 'userInfo'));
    
        for (const document of querySnapshot.docs) {
          const historyData = document.data().history;
    
          if (historyData) {
            historyData.forEach(async (data) => {
              if (data?.orderId === docId) {
                await deleteDoc(doc(db, 'userInfo', document.id, 'history', docId));
              }
            });
          }
        }
    
    
        console.log("All delete operations completed successfully");
      } catch (error) {
        console.error("Error deleting documents:", error);
      }
}