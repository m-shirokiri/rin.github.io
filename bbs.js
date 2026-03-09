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
