import { useState } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import StatusOfTasks from './StatusOfTasks.js';
import UnCompletedCount from './UnCompletedCount.js';
import { Button } from 'antd';

let nextId=3;
      const initials=[
          {id:0, text: 'coding', done: false},
          {id:1, text: 'cooking', done: false},
          {id:2, text: 'sleeping', done: false}
    ]
  const App=()=>{
    
    const [tasks, setTasks]=useState(initials)
    const [filter, setFilter]=useState("All")
    const [checkAllTask, setAllTaskCheckbox]=useState(false)

     function handleAddTask(text){
        setTasks([
            ...tasks,
            {id: nextId++, 
            text: text, 
            done: false
        },
        ])
     }
     
     function handleChangeTask(task){
        setTasks(
            tasks.map(it=>{
                if(it.id===task.id){
                    return task
                } else{
                    return it 
                }
            })
        )
     }
     function handleDeleteTask(taskId){
        setTasks(tasks.filter(it=>it.id!==taskId)
            
        )
       }
     function handleFilterTask(newFilter){
        setFilter(newFilter); 
     }
     function handleCheckAllTask(checkAllTask){
        setAllTaskCheckbox(checkAllTask)
        if(checkAllTask){
        setTasks(
            tasks.map(task=>{return{
                ...task, done:true
            }}
        )
        )
     } else{
        setTasks(
            tasks.map(task=>{return{
                ...task, done:false
            }}
        )
        )
       }
     }
     function handleClearCompleted(){
        setTasks(
            tasks.filter(task=>task.done!==true)
        )
     }
      const filteredTask=tasks.filter((task)=>{
        if(filter==="Active") return !task.done;
        if(filter==="Completed") return task.done;
        return true;
      })
    return(
        <div className="OverContainer">
        <h1>TodoLists</h1>
        <div className="UpperPart">
        <AddTask onAddTask={handleAddTask} allTaskCheckbox={handleCheckAllTask} checkAllTask={checkAllTask}/>
        </div> 
        <div className="TaskList">
        <TaskList
        tasks={filteredTask}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        />
        </div>
        <div className="BottomInf">
        <UnCompletedCount tasks={tasks}/>
        <StatusOfTasks filter={filter} onFilterChange={handleFilterTask}/>
        <Button type="text" className="ClearButton" onClick={handleClearCompleted}>Clear Completed</Button>
        </div>
        </div>
    )
  }
  export default App;