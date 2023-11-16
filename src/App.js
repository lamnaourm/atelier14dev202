import './App.css';
import AddTache from './components/AddTache';
import ListTasks from './components/ListTasks';
import Operations from './components/Operations';
import StatsTodo from './components/StatsTodo';

function App() {
  return (
    <div className="container">
      <div>
        <AddTache />
        <hr/>
        <ListTasks />
        <hr />
        <Operations />
        <hr />
        <StatsTodo />
      </div>
    </div>
  );
}

export default App;
