let replyTo = null;

function postMessage(){

  let name = document.getElementById("name").value;

  const text = document.getElementById("message").value;

  if(!name) name = "名無しさん";

  if(!text) return;

  const data = JSON.parse(localStorage.getItem("bbs")) || [];

  const time = new Date().toLocaleString("ja-JP");

  const id = Date.now();

  data.push({

    id:id,

    name:name,

    text:text,

    time:time,

    replyTo:replyTo

  });

  localStorage.setItem("bbs", JSON.stringify(data));

  replyTo = null;

  loadMessages();

  document.getElementById("message").value="";

}
 
 


function loadMessages(){

  const data = JSON.parse(localStorage.getItem("bbs")) || [];

  const bbs = document.getElementById("bbs");

  bbs.innerHTML = "";

  data.forEach(msg => {

    const div = document.createElement("div");

    let indent = msg.replyTo ? "margin-left:20px;" : "";

    div.style = indent;

    div.innerHTML =

      "<b>" + msg.name + "</b> (" + msg.time + ")<br>" +

      msg.text +

      "<br><button onclick='reply("+msg.id+")'>返信</button>";

    bbs.appendChild(div);

  });

}


function reply(id){
  replyTo = id;

}

loadMessages();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwal80rw8QMe712FGLtir7usi0Q2JJDiw",
  authDomain: "myproject-72cb2.firebaseapp.com",
  databaseURL: "https://myproject-72cb2-default-rtdb.firebaseio.com",
  projectId: "myproject-72cb2",
  storageBucket: "myproject-72cb2.firebasestorage.app",
  messagingSenderId: "387447911755",
  appId: "1:387447911755:web:742bce8b85814160e024ce",
  measurementId: "G-L84KLZX3D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
