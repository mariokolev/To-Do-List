const index = document.querySelector('.name-do');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');


addBtn.addEventListener('click', function(e){

   if(index.value){
        const el =  document.createElement("li");
        const icon =  document.createElement("i");
        const trash = document.createElement("i");
        trash.classList.add('fas');
        trash.classList.add('fa-trash-alt');
        icon.classList.add('far');
       icon.classList.add('fa-circle');
    
        el.appendChild(icon);
        el.innerHTML += '<label class="txt">' + index.value + '</label>';
        el.appendChild(trash);
        el.classList.add('list-el');
        //list.appendChild(el);
        list.insertBefore(el, list.childNodes[0]);
        index.value = '';

}

});

window.addEventListener('load', function(e){

     list.addEventListener('click', function(e){
         if(e.target.classList.contains('fa-trash-alt')){
            const parent = e.target.parentElement;
            list.removeChild(parent);
         }else{
         if(e.target.classList.contains('fa-circle')){
            const parent = e.target.parentElement;
            list.appendChild(parent);

                e.target.classList.remove('fa-circle');
                e.target.classList.add('fa-check-circle');
                e.target.nextElementSibling.classList.add('checked');
                
         }else if(e.target.classList.contains('fa-check-circle')){
                e.target.classList.remove('fa-check-circle');
                e.target.classList.add('fa-circle');
                e.target.nextElementSibling.classList.remove('checked');

         }

         if(e.target.classList.contains('txt')){
           
            e.target.classList.toggle('checked');
            const checkBox = e.target.previousSibling;
            if(checkBox.classList.contains('fa-check-circle')){
                  checkBox.classList.remove('fa-check-circle');
                  checkBox.classList.add('fa-circle');
               

            }else{
               const parent = e.target.parentElement;
               list.appendChild(parent);
               checkBox.classList.remove('fa-circle');
               checkBox.classList.add('fa-check-circle');
               
            }
          


         }
        }
         
     })


});




