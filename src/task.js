export const Task =(props)=>{
    return(
    <div className="list" style={{backgroundColor:props.completed ? "green":"white"}}>
    <h1>{props.taskName}</h1>
    <button onClick={()=>props.removeTask(props.id)}>remove task</button>
    <button onClick={()=>props.completedTask(props.id)}>Completed</button>
    </div>
    )
}