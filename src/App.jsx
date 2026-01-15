import "bootstrap/dist/css/bootstrap.min.css";
import { TodoContext } from "./Store/TodoContext";
import "./App.css";
import Container from "./Components/Container";
import Input from "./Components/Input";
import Display from "./Components/Display";
import Empty from "./Components/Empty";
import { useState } from "react";

function App() {
  const [todoitems, Settodoitems] = useState([
    {
      id: 1,
      name: "buy milk",
      dudate: "4/10/2025",
    },
    {
      id: 2,
      name: "take milk",
      dudate: "4/10/2025",
    },
  ]);

  const additem = (inputval,Tododate) => {
    if(!inputval || !Tododate) return
    Settodoitems((prev) =>[
      {
        id: Date.now(),
        name: inputval,
        dudate: Tododate,
      },
      ...prev,
    ]);

    
  };

  const deleteitem = (id) =>{
   Settodoitems(prev => prev.filter((item)=> item.id !== id))
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
    Settodoitems(prev=> prev.map(item => item.id === id? {...item,name:update_input,dudate:update_date} :item))
 
    setupdatecomp(null)
  }

  return (
    <>
    <TodoContext.Provider value={{todoitems,
      additem,
      deleteitem,
      updateitem,
      updatecompid,
      updateid
               }}>
      <Container>
        <Input/>
        <Empty ></Empty>
        <Display/>
      </Container>

      </TodoContext.Provider>
    </>
  );
}

export default App;
