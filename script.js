let visited = sessionStorage.getItem("visited");

let count = localStorage.getItem("count");

if (!count) {

    count = 0;

}

// 初めてこのサイトを開いたときだけカウント

if (!visited) {

    count++;

    localStorage.setItem("count", count);

    sessionStorage.setItem("visited", "true");

}

// 表示用

let display = String(count).padStart(6, "0");

document.getElementById("counter").textContent =

"あなたは " + display + " 人目のお客様です";

if (count == 777 || count == 1000) {

    alert("🎉キリ番 " + display + " おめでとう！");

}
 
function clap(){

    let clapCount = localStorage.getItem("clapCount");

    if(!clapCount){

        clapCount = 0;

    }

    clapCount++;

    localStorage.setItem("clapCount", clapCount);

    document.getElementById("clapMessage").textContent =

    "👏拍手ありがとう！ 現在 " + clapCount + " 拍手！";

}

 