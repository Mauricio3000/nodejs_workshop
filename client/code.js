function addHeader(){
    console.log("Yo!!")
    const h = document.createElement("h")
    h.innerHTML = "Hello!";
    const div = document.getElementById("root")
    div.appendChild(h)
}