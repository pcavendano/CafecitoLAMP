import React from 'react'
import TodoList from './components/TodoList'

interface TodoListProps{

}
const App: React.FC= () =>  {
  const todos = [{ id: 't1', text: 'Finish the course' }]
  <div className="App">
    <TodoList items={todos}/>
  </div>
}
export default App
 