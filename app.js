  //s-1   defined our variable name
  const TaskForm = document.getElementById("task-form");
  const taskInput  = document.getElementById("task");
  const addBtn  = document.getElementById("add-task");
  const Filter = document.getElementById("filter");
  const olTaskList = document.getElementById("collection");
  const clearBtn  = document.getElementById("clear-task");

  // custom function: loadEventListeners
   function loadEventListeners(){
  
        //s-2 added Task 
      document.getElementById("task-form").addEventListener('submit',function(event){
          //  alert('hello world!')
          //  console.log("hello");
          if (taskInput.value==='') {
              alert('please added task');
          }else{

              //s-3 created  li
               const li = document.createElement('li');
              //s-4 add li  className 
              li.className = "collection-item";
             //s-5 create text and append to li
            li.appendChild(document.createTextNode(taskInput.value));
              //s-6 create link element 
               const link = document.createElement('a');
              // s-7 create link className
              link.className = "delete-item secondary-content";
              //s-9 ADD ICON HTML
               link.innerHTML = '<i class="far fa-calendar-times"></i>';
               //s-10 append link to li
               li.appendChild(link);

            //s-11 append li to ul 
            olTaskList.appendChild(li);
            //s-15 addTaskInLocalStorage
            function addTaskInLocalStorage(newTask){
              let tasks;
              if (localStorage.getItem('tasks')===null) {
                tasks = [];
              }else{
                tasks = JSON.parse(localStorage.getItem('tasks'));
              }
              tasks.push(newTask);
              localStorage.setItem('tasks',JSON.stringify(tasks));
            }
            addTaskInLocalStorage(taskInput.value);
          }
            //s-16 DOM LOAD EVENT 
             
           event.preventDefault();
      })

      //s-12 remove task
      olTaskList.addEventListener('click',function(event){
        if (event.target.parentElement.classList.contains('delete-item')) {
          // console.log("clicked x button");
            if (confirm("are you sure?")){
              event.target.parentElement.parentElement.remove();
            }
          
        }

      //console.log("hello event handle");
          event.preventDefault();
      })

      //s-13 clear task 
      clearBtn.addEventListener('click',function(event){
          //CLEAR TASK
          //  olTaskList.innerHTML = "";

          // [Faster way
          // https://jsbench.me/dlkgbwdck8/1]

          while (olTaskList.firstChild) {
              olTaskList.removeChild(olTaskList.firstChild);
          }
         
      });

      //s-14 Filter
        Filter.addEventListener('keyup',function(event){
           
           const text = event.target.value.toLowerCase();
          //  console.log("item");
           document.querySelectorAll('.collection-item').forEach(function(task){
            const item = task.firstChild.textContent;
             
              if(item.toLowerCase().indexOf(text)!=-1){
                task.style.display = 'block';
              }else{
                task.style.display = 'none';
              }
           });
        });
   }
 loadEventListeners();

  //  //s-16 DOM LOAD EVENT 
  //  document.addEventListener('DOMcontentLoaded',function(){
  //   let tasks;
  //   if (localStorage.getItem('tasks')===null) {
  //     tasks = [];
  //   }else{
  //     tasks = JSON.parse(localStorage.getItem('tasks'));
  //   }
  //   tasks.forEach(function(task){
  //     console.log("hello");
  //    //s-3 created  li
  //    const li = document.createElement('li');
  //    //s-4 add li  className 
  //    li.className = "collection-item";
  //   //s-5 create text and append to li
  //  li.appendChild(document.createTextNode(task));
  //    //s-6 create link element 
  //     const link = document.createElement('a');
  //    // s-7 create link className
  //    link.className = "delete-item secondary-content";
  //    //s-9 ADD ICON HTML
  //     link.innerHTML = '<i class="far fa-calendar-times"></i>';
  //     //s-10 append link to li
  //     li.appendChild(link);
  //  //s-11 append li to ul 
  //  olTaskList.appendChild(li);
  
  //   })
  // });