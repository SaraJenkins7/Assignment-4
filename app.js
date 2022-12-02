// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc, query, where, updateDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpDrPAcfQZutvbdc71p76f_EA4QUJ38L8",
  authDomain: "spring-course-schedule.firebaseapp.com",
  projectId: "spring-course-schedule",
  storageBucket: "spring-course-schedule.appspot.com",
  messagingSenderId: "746524631050",
  appId: "1:746524631050:web:3be9358d8a5b6c59707ff3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);

async function getSchedule(db) {
  const scheduleCol = collection(db, "schedule");
  const scheduleSnapshot = await getDocs(scheduleCol);
  const scheduleList = scheduleSnapshot.docs.map((doc) => doc);
  return scheduleList;
}

getSchedule(db);
