const input = document.querySelector('.name-do');
const addBtn = document.querySelector('.add-btn');
const list = document.querySelector('.list');


addBtn.addEventListener('click', function(e){

   if(input.value){
        const element= document.createElement("li");
       
        element.classList.add('list-el');
        element.innerHTML =  `
                              <i class="far fa-circle"></i>
                              <label class="txt">${input.value}</label>
                              <i class="fas fa-trash-alt"></i>
      `;
      list.insertBefore(element, list.childNodes[0]);
      input.value = '';
}
});

window.addEventListener('load', function(e){

   document.querySelector('form').addEventListener('submit', function(e){
      e.preventDefault();
   }) ; 


   list.addEventListener('click', function(e){
      
        e.preventDefault();
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
            const checkBox = e.target.previousElementSibling;
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
         
     });


});




