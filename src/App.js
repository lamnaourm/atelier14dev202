import './App.css';
import AddTache from './components/AddTache';
import ListTasks from './components/ListTasks';

function App() {
  return (
    <div className="container">
      <AddTache />
      <ListTasks />
    </div>
  );
}

export default App;
