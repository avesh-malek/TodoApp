import { createContext } from "react";
import { useReducer, useState } from "react";

export const TodoContext = createContext({})


const TodoitemReducer = (currentval,action) =>{
  let todoval = currentval
  if(action.type === "ADD_item"){
    todoval = [
      {
        id: Date.now(),
        name: action.payload.inputval,
        dudate: action.payload.Tododate,
      },
      ...currentval,
    ]

  }else if(action.type === "Delete_item"){
    todoval = currentval.filter(item => item.id !== action.payload.id)

  }else if(action.type === "Update_item"){

    todoval = currentval.map(item => item.id === action.payload.id ? {...item,
      name:action.payload.update_input,
      dudate:action.payload.update_date}: item)
  }
  return todoval
}

function Todoitemcontext ({children}){
      const [todoitems,dispachtodoitems] = useReducer(TodoitemReducer,[{
      id: 1,
      name: "buy milk",
      dudate: "4/10/2025",
    },
    {
      id: 2,
      name: "take milk",
      dudate: "4/10/2025",
    },])

  const additem = (inputval,Tododate) => {
    if(!inputval || !Tododate) return
    
    const newtodoitems = {
      type: "ADD_item",
      payload:{
        inputval,
        Tododate
      }
    }
    dispachtodoitems(newtodoitems)    
  };

  const deleteitem = (id) =>{
  //  Settodoitems(prev => prev.filter((item)=> item.id !== id))
   const deletitem = {
    type: "Delete_item",
    payload: {
      id
    }
   }
   dispachtodoitems(deletitem)
  }


  const [updateid,setupdatecomp] = useState(null)
  // const updatecompid = (id) =>{
  //   setupdatecomp(prev =>prev.includes(id) ? prev.filter(item => item !== id) : [id])
  // }

  const updatecompid = (id) =>{
    setupdatecomp(prev=> prev === id ? null : id)
 
  }

  const updateitem = (id,update_input,update_date) => {

    if(!update_input || !update_date) return
    // Settodoitems(prev => prev.map(item => item.id === id ? {...item,name:inputval,dudate:Tododate} : item)) 

    const updateitem = {
      type: "Update_item",
      payload:{
        id,
        update_input,
        update_date
      }
    }
    dispachtodoitems(updateitem) 
    setupdatecomp(null)
  }
 return (
    <TodoContext.Provider value={{todoitems,
      additem,
      deleteitem,
      updateitem,
      updatecompid,
      updateid
               }}>
      {children}
    </TodoContext.Provider>
 )
}
export default Todoitemcontext