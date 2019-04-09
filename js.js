const list = document.querySelector('.list');
const input = document.querySelector('.name-do');


class Task{
   constructor(task,status){
      this.task = task;
      this.status = status;
   }

   static displayList(){
      const tasks = Store.getTasks();

      for(let i = 0; i < tasks.length; i++){
         if(tasks[i].status === false){
            //tasks[i].status = true;
            Task.addToList(tasks[i],'unchecked','fa-circle');
         }else{
           // tasks[i].status = false;
            Task.addToList(tasks[i],'checked', 'fa-check-circle');
         }
      }
   }

   // add to status class
   static addToList(element, status, icon){

      const li = document.createElement("li");
         li.classList.add('list-el');
         li.innerHTML =  `
                                 <i class="far ${icon}"></i>
                                 <label class="${status}">${element.task}</label>
                                 <i class="fas fa-trash-alt delete"></i>
         `;

         list.insertBefore(li, list.childNodes[0]);
      
   }

   static checkList(element) {
         if(element.classList.contains('fa-circle')){
            element.classList.remove('fa-circle');
            element.classList.add('fa-check-circle');
            element.nextElementSibling.classList.add('checked');
            element.nextElementSibling.classList.remove('unchecked');

         }else if(element.classList.contains('fa-check-circle')){
            element.classList.remove('fa-check-circle');
            element.classList.add('fa-circle');
            element.nextElementSibling.classList.remove('checked');
            element.nextElementSibling.classList.add('unchecked');

      }else if(element.classList.contains('unchecked')){

         element.classList.add('checked');
         element.classList.remove('unchecked');
         const checkBox = element.previousElementSibling;

         if(checkBox.classList.contains('fa-check-circle')){
               checkBox.classList.remove('fa-check-circle');
               checkBox.classList.add('fa-circle');
         }else{
            checkBox.classList.remove('fa-circle');
            checkBox.classList.add('fa-check-circle');
            
         }
   }else if(element.classList.contains('checked')){
      element.classList.add('unchecked');
      element.classList.remove('checked');
      const checkBox = element.previousElementSibling;

      if(checkBox.classList.contains('fa-check-circle')){
            checkBox.classList.remove('fa-check-circle');
            checkBox.classList.add('fa-circle');
      }else{
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

   static chTask(input){
      const tasks = Store.getTasks();
   
         for(let i = 0; i < tasks.length; i++){
            if(tasks[i].task === input){
                  console.log(tasks[i].task);
                  if(tasks[i].status === false){
                     tasks[i].status = true;
                  }else{
                     tasks[i].status = false;
                  }
                  console.log(tasks[i].status);

            }
         }
      
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
            const inputText  = document.querySelector('input').value;
            if(input.value == ''){
               alert('fill the empty field');
            }else{

            const task = new Task(inputText, false);
            console.log(task);
            Task.addToList(task, 'unchecked', 'fa-circle');
            Store.addTask(task, false);
            Task.clearInput();
         }
            
         });

         document.querySelector('.list').addEventListener('click', function(e){
            
            Task.removeFromList(e.target);
            if(e.target.previousElementSibling != null){
               Store.removeTask(e.target.previousElementSibling.textContent);

            }
            Task.checkList(e.target);
            //when text is being clicked 
            Store.chTask(e.target.textContent);
            //when circle icon is being clicked
            
          if(e.target.nextElementSibling != undefined){
            Store.chTask(e.target.nextElementSibling.textContent);
          }
            


         });
});




