import { Container } from "react-bootstrap";
import React,{useState,useEffect} from 'react'
import DatesCount from './components/DatesCount.js'
import DatesList from "./components/DatesList.js";
import DatesAction from "./components/DatesAction.js";
import { person } from "./components/Data.js";
function App() {
  const [personData, setpersonData] = useState(person);
  const onDlete=()=>{
    setpersonData([])
  }
  const onShow=()=>{
    setpersonData(person)
  }
  useEffect(() => {
    setpersonData([])
  }, []);
  return (
    <div className="App">
      <Container className="py-5">
        <DatesCount person={personData}/>
        <DatesList person={personData}/>
        <DatesAction deleteData={onDlete} showData={onShow} />
      </Container>
    </div>
  );
}

export default App;
