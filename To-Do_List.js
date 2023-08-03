const textarea = document.getElementById('text_area');
const filterOption = document.querySelectorAll('.filters span');
const listcontent = document.getElementById('list_content');


function add_more_task(){
if(textarea.value === ""){
    alert("Please, Write Something!");
    return;
}
let li = document.createElement("li");
li.innerHTML = textarea.value;
listcontent.appendChild(li);
let span = document.createElement("span");
span.innerHTML = "\u00d7";
li.appendChild(span);
textarea.value = "";
storeData();
}

filterOption.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        storeData(btn.id);
    });
});


listcontent.addEventListener("click", function(r){
    if(r.target.tagName === 'LI'){
        r.target.classList.toggle("selected");
        storeData();
    }
    else if(r.target.tagName === 'SPAN'){
        r.target.parentElement.remove();
        storeData();
    }
}, false);

function storeData(){
    localStorage.setItem("data", listcontent.innerHTML);
}

function show_Storing_Data(){
    listcontent.innerHTML = localStorage.getItem("data");
}
show_Storing_Data();

function removeAll() {
    listcontent.innerHTML = '';
    storeData();
}
