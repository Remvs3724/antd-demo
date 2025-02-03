import { useState } from 'react';
import { Input, Button, Checkbox, List} from 'antd';

const TaskList=({tasks,onChangeTask,onDeleteTask})=>{
    
    return(
    <List
    dataSource={tasks}
    renderItem={task=>
      <List.Item>
       <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask}/> 
      </List.Item>}
    />
    )//no need to write the map any more hahah
  }
  const Task=({task, onChange, onDelete})=>{
    let taskContent;
    const [isEditing, setisEditing]=useState(false) //change
    if(isEditing){
        taskContent=(
            <>
            <Input
            type="text" 
            value={task.text}
            onChange={(e)=>{
            onChange({
                ...task,
                text: e.target.value //change
            })
            }
            }
            style={{
            width:"200px",
            height:"25px",
            }}
            allowClear
            />
            <Button className="SaveButton" 
            style={{
                padding: "5px", 
                fontSize: "14px",
                height:"20px"
              }}
            onClick={()=>setisEditing(false)}>Save</Button> 
            </>
        )

    } else {
     taskContent=(
        <>
        {task.text}
        <Button 
        style={{
            padding: "5px", 
            fontSize: "14px",
            height:"20px"
          }}
        type="default" className="EditButton" onClick={()=>setisEditing(true)}>Edit</Button> 
        </>
     )
    }

return (
    <>
    <Checkbox
    type="checkbox"
    checked={task.done}
    onChange={e=>{
        onChange({
            ...task,
            done: e.target.checked //change
        })
    }
}
>  </Checkbox>
    {taskContent}
    <Button 
    style={{
        padding: "5px", 
        fontSize: "14px",
        height:"20px",
        background:"White"
      }}
    type="default"  className="DeleteButton" onClick={()=>onDelete(task.id)}>Delete</Button>
    </>

)
  }
  export default TaskList;