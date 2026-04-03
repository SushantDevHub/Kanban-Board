const todoColumn = document.querySelector('#todo');
const progressColumn = document.querySelector('#progress');
const doneColumn = document.querySelector('#done');

const tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
    task.addEventListener('drag', (e) => {
        console.log('Dragging', e);
      })
    })

     function addDragEventsOnColumn(column) {
        column.addEventListener('dragenter', (e) => {
            e.preventDefault();
            column.classList.add('hover-over');
        })
        column.addEventListener('dragleave', (e) => {
            e.preventDefault();
            column.classList.remove('hover-over');
        })
        column.addEventListener('dragover', (e) => {
            e.preventDefault();     
           })




        column.addEventListener('drop', (e) => {
            e.preventDefault();
            console.log('Dropped', e);
        })
    }

    addDragEventsOnColumn(todo);
    addDragEventsOnColumn(progress);
    addDragEventsOnColumn(done);