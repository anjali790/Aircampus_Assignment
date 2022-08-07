const input=document.querySelector(".input");
const btn=document.querySelector(".btn");
const tbody=document.querySelector("tbody");
const tbody2=document.querySelector("tbody2");
const removebtn=document.querySelector("#delete");


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const newElm= document.createElement("tr");
    newElm.setAttribute('class','row');
    newElm.innerHTML = `
    <td class="check-box"><input type="checkbox" id="check">
    <td id="data">${input.value}</td>
    <td class="edit-btn"><button id="edit">\u{1F58A}</button></td>
    <td class="delete-btn"><button id="delete">\u{1F5D1}</button></td>
    `;
    tbody.appendChild(newElm);
});


const removeRow=(e)=>{
    if(e.target.id=='delete')
    e.target.parentElement.parentElement.remove();
}

tbody.addEventListener('click',removeRow);



const editRow=(e)=>{
    if(e.target.id=='edit')
    e.taget.input.value.contentEditable();
}
 
tbody.addEventListener('click', editRow); 