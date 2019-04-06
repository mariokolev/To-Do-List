const index = document.querySelector('.name-do');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');


addBtn.addEventListener('click', function(e){

   if(index.value){
        const el =  document.createElement("li");
        const icon =  document.createElement("i");
        const trash = document.createElement("i");
       // const label = document.createElement('label');
        trash.classList.add('fas');
        trash.classList.add('fa-trash-alt');
        icon.classList.add('far');
        icon.classList.add('fa-check-circle');
    
        el.appendChild(icon);
        //span.innerHTML +=index.value;
        el.innerHTML += '<label class="txt">' + index.value + '</label>';
        //el.appendChild(label);
        //el.appendChild(span);
        el.appendChild(trash);
        el.classList.add('list-el');
        list.appendChild(el);
        index.value = '';

}

});

window.addEventListener('load', function(e){

     list.addEventListener('click', function(e){
         if(e.target.classList.contains('fa-trash-alt')){
            const parent = e.target.parentElement;
            list.removeChild(parent);
         }else{

            

         if(e.target.classList.contains('far')){
                e.target.classList.remove('far');
                e.target.classList.add('fas');
                e.target.nextElementSibling.classList.add('checked');
                
         }else if(e.target.classList.contains('fas')){

                e.target.classList.remove('fas');
                e.target.classList.add('far');
                e.target.nextElementSibling.classList.remove('checked');

         }

         if(e.target.classList.contains('txt')){
            e.target.classList.toggle('checked');
            const checkBox = e.target.previousSibling;
            if(checkBox.classList.contains('far')){
                  checkBox.classList.remove('far');
                  checkBox.classList.add('fas');
            }else{
               checkBox.classList.remove('fas');
               checkBox.classList.add('far');
            }
          


         }
        }
         
     })


});




