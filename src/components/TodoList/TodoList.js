import './TodoList.css';
import { useRef, useState } from 'react'


function TodoList() {

  const inputRef = useRef(null)

  const [tasks, setTasks] = useState([])

  const handleButtonClick = () => {

    if (!inputRef.current.value) return

    const newTask = { id: Date.now(), name: inputRef.current.value.trim(), completed: false }

    setTasks([...tasks, newTask])

    inputRef.current.value = ''

  }

  const playSound = () => {

    const audio = new Audio('https://www.soundjay.com/buttons/button-3.wav')
    audio.play();

  }

  const onTaskComplete = (id) => {

    const updatedTasks = tasks.map((task) => (
      task.id === id ? {...task, completed: true } : task
    ) )

    setTasks(updatedTasks)

    playSound()

  }

  return (

    <div className="wrap">

      <div className='tasks'>

        {tasks.filter( task => !task.completed ).map((task, index) => (

          <div key={task.id} className='task'>

            <input type='radio' onChange={ () => onTaskComplete(task.id)} className='complete-task'></input>
            <label>{task.name}</label>
            {/* {task.completed ? 'completed' : 'not completed'} */}

          </div>

        ))}

      </div>

      <input ref={inputRef} type='text' placeholder='Enter your task' ></input>

      <MyButton onButtonClick={handleButtonClick}>

      </MyButton>

    </div>

  );
}

function MyButton({ onButtonClick }) {


  const handleClick = () => {

    onButtonClick('Button clicked in child')

  }

  return (
    <button onClick={handleClick}>
      Add Task
    </button>
  )
}

export default TodoList;
