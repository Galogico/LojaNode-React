import logo from './logo.svg';
import Titulo from './components/Titulo';
import { useState } from 'react';

function App() {  
  const [tarefas,setTarefas] = useState([]);
  const [newTask,setNewTask] = useState('');
  const addTarefa=()=>{
    let newTarefa = newTask;
    setTarefas([...tarefas, newTarefa])
    setNewTask('')
  }
  return (
    <div className="App">
        <Titulo/>
        <input
          value={newTask}
          onChange={(e)=>setNewTask(e.target.value)}
        />
        <button onClick={addTarefa}>Cadastrar</button>
        <div>
          {
            tarefas.map(t=><p key={t}>{t}</p>)
          }
        </div>
    </div>
  );
}

export default App;
