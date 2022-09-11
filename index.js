const removeMain = document.getElementById("main");
removeMain.remove();

const newHeader = document.createElement("h1");
document.body.append("newHeader");

newHeader.setAttribute("id","victory");

newHeader.innerHTML="YOUR-NAME is the champion";

