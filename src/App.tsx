import { useState } from 'react';
import NavBar from './components/NavBar'
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([])

  const addHandler = (title: string) => {

  }

  return (
    <>
      <NavBar/>
      <div className="container">
        <TodoForm />
      </div>
    </>
  );
}

export default App;
