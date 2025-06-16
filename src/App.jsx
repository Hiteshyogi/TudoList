import React, { useRef, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([])
  const inpRef = useRef()

  const addTocard = () => {
    const value = inpRef.current.value
    setTodoList([...todoList, value])
    inpRef.current.value = ""
  }

  function removeItem(delItem) {
  const newData = todoList.filter((d, index) => {
    return index != delItem
  })
  setTodoList(newData)
  }


  return (
    <div className="container">
      <div className="input-group mb-3 mt-4 gap-2">
      <input ref={inpRef} type="text" className="form-control" placeholder="Add Tudo ....." aria-label="Username" aria-describedby="basic-addon1"/>
      <span style={{cursor:"pointer"}} onClick={addTocard} className="input-group-text bg-danger btn text-white " id="basic-addon1">Add</span>
      </div>

      <List todoList={todoList} removeItem={removeItem}/>

   </div>

    
  );
}



const List = (props) => {
  return(
    <ul className="list-group">
    {
    props.todoList.length == 0 ?
    <h1 className="text-center">Add List Here</h1>
    :
    props.todoList.map(
      (data, index) => {
        return (
          <li key={index} className="list-group-item d-flex bg-danger-subtle border-black justify-content-between align-items-center">
          {data}
          <span onClick={()=>props.removeItem(index)} style={{cursor:"pointer"}} className="badge text-bg-primary pe-auto rounded-pill">Delete</span>
          </li>
        )
      }
    )
    }
</ul>
  )
}



export default App;
