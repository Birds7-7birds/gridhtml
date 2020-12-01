
const notesArray = [
    {title:"note one", body:"some text 1"}, 
    {title:"note two", body:"some text 2"} ];

function cancl(){
    document.getElementById("cancel").style.display = "none";
    document.getElementById("save").style.display = "none";
    document.getElementById("tb").style.display = "none";
}
function sav(){
    saveto = document.getElementById("tb").value;
    console.log(saveto);
    var saveo = saveto
    if (saveto.length > 18){
        saveo.toString();
        saveo = saveo.slice(0,16);
    }
    notesArray.push({title: `${saveo}`, body: `${saveto}`});
    console.log(notesArray);

    var tag = document.createElement("li");
    var text = document.createTextNode(`${saveo}`);
    tag.appendChild(text);
    tag.setAttribute("id", `${saveo}`);
    var element = document.getElementById("eheh");
    element.appendChild(tag);
    document.getElementById(`${saveo}`).setAttribute("onClick","reply_click(this.id)");

}
function newno(){
    if (document.getElementById("tb").style.display === "none"){
        document.getElementById("cancel").style.display = "grid";
        document.getElementById("save").style.display = "grid";
        document.getElementById("tb").style.display = "grid";
    }else{
        document.getElementById("tb").value = '';
    }
}
var hem = "shown"

function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("Dark").value = "Light Theme";
    document.body.style.backgroundColor = "black"
  }
  function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("Dark").value = "Dark Theme";
    document.body.style.backgroundColor = "white"
  }

function reply_click(The_id){
    console.log(The_id);
    for (title in notesArray){
        console.log(title)
        if (notesArray[title]["title"] == The_id){
            document.getElementById("tb").value = notesArray[title]["body"]
        }
    }
}
