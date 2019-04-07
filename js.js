const list = document.querySelector('.list');
const input = document.querySelector('.name-do');


class Task{
   constructor(task){
      this.task = task;
   }

   static displayList(){
      const tasks = Store.getTasks();

      tasks.forEach((task) => Task.addToList(task)); 
   }

   static addToList(element){

      const li = document.createElement("li");

         li.classList.add('list-el');
         li.innerHTML =  `
                                 <i class="far fa-circle"></i>
                                 <label class="txt">${element.task}</label>
                                 <i class="fas fa-trash-alt delete"></i>
         `;

         list.insertBefore(li, list.childNodes[0]);
      
   }

   static checkList(element) {
         if(element.classList.contains('fa-circle')){
            list.appendChild(element.parentElement);
            element.classList.remove('fa-circle');
            element.classList.add('fa-check-circle');
            element.nextElementSibling.classList.add('checked');
         }else if(element.classList.contains('fa-check-circle')){
            element.classList.remove('fa-check-circle');
            element.classList.add('fa-circle');
            element.nextElementSibling.classList.remove('checked');
      }else if(element.classList.contains('txt')){

         element.classList.toggle('checked');
         const checkBox = element.previousElementSibling;

         if(checkBox.classList.contains('fa-check-circle')){
               checkBox.classList.remove('fa-check-circle');
               checkBox.classList.add('fa-circle');
         }else{
            const parent = element.parentElement;
            list.appendChild(parent);
            checkBox.classList.remove('fa-circle');
            checkBox.classList.add('fa-check-circle');
            
         }
   }

}
        
   static removeFromList(element){
      if(element.classList.contains('delete')){
         list.removeChild(element.parentElement);
     }
   }

   static clearInput(){
      document.querySelector('input').value = '';
    }
}

class Store{
   static getTasks() {
      let tasks;
      if(localStorage.getItem('tasks') === null){
         tasks = [];
      }else{
         tasks = JSON.parse(localStorage.getItem('tasks'));
      }

      return tasks;
   }

   static addTask(element){
      const tasks = Store.getTasks();
      tasks.push(element);
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }

   static removeTask(input){
      const tasks = Store.getTasks();

      tasks.forEach((task, index) => {
        if(task.task === input){
            tasks.splice(index, 1);
        }
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));

   }

   
}
document.addEventListener("DOMContentLoaded", Task.displayList);
window.addEventListener('load', function(){

         document.querySelector('form').addEventListener('submit', function(e){
            e.preventDefault();
            //const input  = document.querySelector('input').value;
            if(input.value == ''){
               alert('fill the empty field');
            }else{

            const task = new Task(input.value);
            
            Task.addToList(task);
            Store.addTask(task);
            Task.clearInput();
         }
            
         });

         document.querySelector('.list').addEventListener('click', function(e){
            
            Task.removeFromList(e.target);
            if(e.target.previousElementSibling != null){
               Store.removeTask(e.target.previousElementSibling.textContent);

            }
            Task.checkList(e.target);
         });
});




