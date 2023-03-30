
import './App.css';
import Navbar from './Component/Navbar';
import Addtask from './Component/Addtask';
import { Container } from 'react-bootstrap';
import TasksList from './Component/TasksList';
import { addtoCard } from './Redux/action';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch=useDispatch();
  const addproduct={
    phone:"Redmi",
    price:"50000",
    model:"node 10 pro"
  }
  return (
    <>
<Container>
<Navbar/>
<Addtask/>
<TasksList/>

</Container>
<button onClick={()=>dispatch(addtoCard(addproduct))}>AddToCard</button>
</>

  );
}

export default App;
