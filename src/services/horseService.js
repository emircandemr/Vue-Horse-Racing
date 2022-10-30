import {db} from "../db";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

export const getHorses = async () => {
    const horses = [];
    const horseCollection = collection(db, "Horses"); 
    const querySnapshot = await getDocs(horseCollection)
    querySnapshot.docs.map((doc) => {
        horses.push( {...doc.data(), id: doc.id} )
    })
    return horses
}

export const updateHorseData = async (id, data) => {
    const horseDoc = doc(db, "Horses", id);
    const newData = {winnerCount : data.winnerCount + 1}
    await updateDoc(horseDoc, newData);
}