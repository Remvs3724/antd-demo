const UnCompletedCount=({tasks})=>{
    const count=tasks.filter(task=>!task.done).length
       return(
       <>
       <p className="CountTaskLeft">{count}: {count>1? "items" : "item"} left</p>
       </>
       )
   }
   export default UnCompletedCount;