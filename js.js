const index = document.querySelector('.name-do');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');

addBtn.addEventListener('click', function(e){

   if(index.value){
    const el =  document.createElement("li");
    const icon =  document.createElement("i");
    const trash = document.createElement("i");
    const span = document.createElement('span');

    trash.classList.add('fas');
    trash.classList.add('fa-trash-alt');
    icon.classList.add('far');
    icon.classList.add('fa-check-circle');
   
   span.appendChild(icon);
   span.innerHTML +=index.value;
   el.appendChild(span);
   el.appendChild(trash);
    el.classList.add('list-el');
    list.appendChild(el);
    
    index.value = '';

}

});
