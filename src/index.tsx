import React from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from "reactfire";
import "./index.css";
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxZH7tFy0VBkmJgDLIpgbqa350yt5UDKk",
  authDomain: "smart-vaxx-card-test.firebaseapp.com",
  projectId: "smart-vaxx-card-test",
  storageBucket: "smart-vaxx-card-test.appspot.com",
  messagingSenderId: "303100902004",
  appId: "1:303100902004:web:ef12af68d146105ef0af21",
};

firebase.default.initializeApp({ firebaseConfig }, "test");

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

export default firebase;
