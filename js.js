const index = document.querySelector('.name-do');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');

addBtn.addEventListener('click', function(e){

   if(index.value){
        const el =  document.createElement("li");
        const icon =  document.createElement("i");
        const trash = document.createElement("i");
        const span = document.createElement('span');
        const label = document.createElement('label');
        trash.classList.add('fas');
        trash.classList.add('fa-trash-alt');
        icon.classList.add('far');
        icon.classList.add('fa-check-circle');
    
        span.appendChild(icon);
        //span.innerHTML +=index.value;
        label.innerHTML +=index.value;
        span.appendChild(label);
        el.appendChild(span);
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

        }
         if(e.target.classList.contains('txt')  ){
            e.target.classList.add('checked');
           // e.target.nextElementSibling.classList.add('checked');

        }else  {

            e.target.classList.remove('checked');
            console.log('zacherknatiq');
            console.log(e.target);
        }
     })


});



