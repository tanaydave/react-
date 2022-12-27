export const Task =(props)=>{
    return(
    <div className="list">
    <h1>{props.taskName}</h1>
    <button onClick={()=>props.removeTask(props.id)}>remove task</button>
    </div>
    )
}