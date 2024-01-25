import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [toDo,setToDo] = useState([])
	const [userInput,setUserInput] = useState("")

//type in toDo
	function addToDo(task){
let temporaryToDo ={lable:task,done:false}
setToDo([...toDo,temporaryToDo])
setUserInput("")
	}

//delete todo
function deleteToDo(remove){
	console.log(remove)
	let newToDo =toDo.filter((task,index)=>index != remove)
	setToDo(newToDo)
}
//handle enter
function handleEnter (e,task){
	if(e.key==="Enter"){
		addToDo(task)
	}
}

	return (
		<div  id="card" className="text-center position-relative overflow-scroll">
			<div className="top">
			<h1>To Do</h1>	
			<input type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)} onKeyDown={(e)=>handleEnter(e,userInput)}/>
			<button id="addbtn" className="btn btn-success" onClick={()=> addToDo(userInput)}>Add</button>
			
			</div>
		
			<div>
			<p className="position-absolute">{toDo.length}Things Left To Do</p>
				<ul className="d-flex flex-column" id="list">
					{toDo?.map((task,index)=>(
						<div><li key={index}>{task.lable} 
						<button id="deletebtn" className="btn btn-danger" onClick={()=>deleteToDo(index)}>Delete</button>
						</li>
						</div>
						
						
					))}
				</ul>
				
			</div>
			
		</div>
	);
};

export default Home;
