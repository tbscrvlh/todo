import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Roboto:wght@400;500;700&display=swap');
      </style>
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  );
}

export default App;
