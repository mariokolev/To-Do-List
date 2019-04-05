const index = document.querySelector('.name-do');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');

addBtn.addEventListener('click', function(e){
    console.log(index.value);

   const el =  document.createElement("li");
   el.innerHTML += index.value;
    el.classList.add('list-el');
    list.appendChild(el);

});
