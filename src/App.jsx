import "bootstrap/dist/css/bootstrap.min.css";
import Todoitemcontext from "./Store/TodoContext";
import "./App.css";
import Container from "./Components/Container";
import Input from "./Components/Input";
import Display from "./Components/Display";
import Empty from "./Components/Empty";


function App() {
  

  return (
    <>
    <Todoitemcontext>
      <Container>
        <Input/>
        <Empty ></Empty>
        <Display/>
      </Container>

      </Todoitemcontext>
    </>
  );
}

export default App;
