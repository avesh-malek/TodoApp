import "bootstrap/dist/css/bootstrap.min.css";
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
  const [inputval, setinputval] = useState("");
  const [Tododate, Settododate] = useState("");

  const additem = (e) => {
    if(!inputval || !Tododate) return
    Settodoitems([
      {
        id: Date.now(),
        name: inputval,
        dudate: Tododate,
      },
      ...todoitems,
    ]);
    setinputval("")
    Settododate("")
    
  };

  const deleteitem = (id) =>{
   Settodoitems(prev => prev.filter((item)=> item.id !== id))
  }

  
  const [update_input,setUpdateval] = useState("")
  const [update_date,setUpdatedate] = useState("")

  const [updateid,setupdatecomp] = useState(null)
  // const updatecompid = (id) =>{
  //   setupdatecomp(prev =>prev.includes(id) ? prev.filter(item => item !== id) : [id])
  // }

  const updatecompid = (id) =>{
    setupdatecomp(prev=> prev === id ? null : id)
    setUpdatedate("")
    setUpdateval("")
  }

  const updateitem = (id) => {

    if(!update_input || !update_date) return
    // Settodoitems(prev => prev.map(item => item.id === id ? {...item,name:inputval,dudate:Tododate} : item)) 
    Settodoitems(prev=> prev.map(item => item.id === id? {...item,name:update_input,dudate:update_date} :item))
    setUpdateval("")
    setUpdatedate("")
    setupdatecomp(null)
  }

  return (
    <>
      <Container>
        <Input additem={additem} 
        val={setinputval} 
        value={inputval}
        
        Date={Settododate}
        valuedate={Tododate}
        />
        <Empty Todoitems={todoitems}></Empty>
        <Display Todoitems={todoitems} 
          deleteitem= {deleteitem}

          updatecompid = {updatecompid}
          updateid = {updateid}

          update_input={setUpdateval}
          update_date = {setUpdatedate}        
          Updateitem = {updateitem}
          valuefor_upInput={update_input}
          valuefor_up_date={update_date}
        />
      </Container>
    </>
  );
}

export default App;
