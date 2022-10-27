
import { useSelector } from 'react-redux';
import './App.css';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import Table from './components/Table';

function App() {
  const isEdit=useSelector((state)=>state.isEdit);
  const isAdd=useSelector((state)=>state.isAdd);
  return (
    <div className="App">
      <div className='header'>
      {isEdit?<EditForm/>:isAdd?<AddForm/>:<Table/>}
     </div>
    </div>
   
  );
}

export default App;
