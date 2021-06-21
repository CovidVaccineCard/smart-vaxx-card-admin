import React from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from "reactfire";
import "./index.css";
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5BzruiXxW_L_AMhVa1UFYIka1zrHQwPI",
  authDomain: "smart-vaxx-card.firebaseapp.com",
  projectId: "smart-vaxx-card",
  storageBucket: "smart-vaxx-card.appspot.com",
  messagingSenderId: "422616208444",
  appId: "1:422616208444:web:6e63fb3792edead6671f39",
  measurementId: "G-JG4JEM1LEH",
};

const firebaseApp = firebase.default.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Routes />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
