import { Radio } from "antd";
const StatusOfTasks=({filter, onFilterChange})=>{
    return (
        
   <div className="StatusRadio">
    <Radio.Group value={filter} onChange={(e) => onFilterChange(e.target.value)}>
    <Radio value="All">All</Radio>
    <Radio value="Active">Active</Radio>
    <Radio value="Completed">Completed</Radio>
  </Radio.Group>
  </div>

    )
}
export default StatusOfTasks;