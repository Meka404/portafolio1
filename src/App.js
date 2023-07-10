
import './App.css';
import {Sidebar} from './componentes/Sidebar'
import {Portada1} from './componentes/Portada1'
import {Table} from './componentes/Table'
import {Portada2} from './componentes/Portada2'
function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Portada2></Portada2>
      <Portada1></Portada1>
    
      <Table></Table>
      
    </div>
  );
}

export default App;
