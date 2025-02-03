import { useState} from 'react';
import { Input, Button, Checkbox} from "antd";
import { SearchOutlined } from "@ant-design/icons";
const AddTask=({onAddTask, allTaskCheckbox, checkAllTask})=>{
    const [text,setText]=useState('')//appple

    function handleKeyDown(event) {
    if (event.key === "Enter") {
      onAddTask(text)
      setText("")
      event.preventDefault(); 
    }
  }
    return (
        <>
        <label className="SelectAll">
        <Checkbox
        type="checkbox"
        checked={checkAllTask}
        onChange={(e)=>allTaskCheckbox(e.target.checked)//change

        }
        ></Checkbox>
        Select All
        </label>
        <Input className="AddTaskInput"
        placeholder="Add Task"
        value={text}
        onChange={e=>setText(e.target.value)}//
        onKeyDown={handleKeyDown}
        allowClear// subalaxi
        prefix={<SearchOutlined/>}//subalaxi
        />
        <Button type="default"
        style={{
            padding: "5px", 
            fontSize: "14px",
            height:"20px",
            background:"White"
          }}
        loading={false}
        className="AddButton"  //change
        onClick={()=>{
            setText(" ")
            onAddTask(text)
            
        }}>Add</Button>
        </>

    )
  }
  export default AddTask;