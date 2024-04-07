import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDzha_p5FDDTlfpUy2x59R_1uHUP2eILtw",
  authDomain: "jawanpakhackathon.firebaseapp.com",
  projectId: "jawanpakhackathon",
  storageBucket: "jawanpakhackathon.appspot.com",
  messagingSenderId: "845328112334",
  appId: "1:845328112334:web:80cb6396f82ad915ea4e9f",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCOH-rrNJ75DVPoGlo8HbVG90ozsw6zMcs",
//   authDomain: "rbl-sem6-hms.firebaseapp.com",
//   projectId: "rbl-sem6-hms",
//   storageBucket: "rbl-sem6-hms.appspot.com",
//   messagingSenderId: "506638013031",
//   appId: "1:506638013031:web:242740d82257469515fac2",
//   measurementId: "G-DRXEZ71QKF"
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase();
export default app;
