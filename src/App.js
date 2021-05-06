import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import NewTaskForm from './components/NewTaskForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams
} from "react-router-dom";

import TodoListPage from './components/TodoListPage';
import TodayTaskPage from './components/TodayTaskPage';

function App() {
  const [taskLists, setTaskLists] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasklists")
      .then(res => res.json())
      .then(setTaskLists);
  }, [])

  return (
    <div className="App">
      <Router>
        <Dashboard taskLists={taskLists} />
        <div className='tasks'>
          <Switch>
            <Route path="/todo-lists/:id">
              <TodoListPage />
            </Route>
            <Route path="/today">
              <TodayTaskPage taskLists={taskLists}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
