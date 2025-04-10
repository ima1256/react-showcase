import './HabitGame.scss'
import { useState } from 'react'
import { Button, Input } from '../StyledComponents/StyledComponents'
import DeleteIcon from '@mui/icons-material/Delete';

const defaultNewHabit = { id: -1, name: '', amount: '', frecuency: '' }

function HabitGame() {

    const [habits, setHabits] = useState([{ id: 123, name: 'Exercise shifts', amount: 6, frecuency: 'daily' }])

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const [newHabit, setNewHabit] = useState({ ...defaultNewHabit })

    const deleteHabit = (id) => {

        if (window.confirm('Are you sure you want to delete this habit?')) {

            setHabits((habits) => habits.map((habit) => habit.id === id ? { ...habit, isDeleted: true } : habit))

            setTimeout(() => {
                setHabits((habits) => habits.filter(habit => habit.id !== id))
            }, 300)

        }
    }

    const addHabit = () => {

        const isValidHabit = Object.values(newHabit).every(value => value !== '')

        if (!isValidHabit) {

            alert('Introduce a valid habit!')
            return
        }

        console.log('addHabit')

        newHabit['id'] = Date.now()

        const newHabitWithId = {
            ...newHabit,
            id: Date.now()
        }

        console.log(newHabitWithId)

        setNewHabit({ ...defaultNewHabit })

        setHabits([...habits, {
            ...newHabitWithId
        }])

        closeModal()

    }

    const newHabitChange = (e) => {

        const { name, value } = e.target

        setNewHabit((newHabit) => ({
            ...newHabit, [name]: value
        }))

    }

    const handleBackdropClick = (e) => {

        if (e.target.classList.contains('overlay')) {
            closeModal()
        }

    }

    return (
        <div className='wrapper'>
            <div className='title'>Habit Game</div>

            {/* <DailyEndReport>
                
            </DailyEndReport> */}

            <div className='habits-section-wrap'>

                <div className="habit-titles">
                    <div>
                        Name
                    </div>
                    <div>
                        Amount
                    </div>
                    <div>
                        Frecuency
                    </div>
                </div>

                <div className='habit-cards'>

                    {habits.map(habit => (
                        <HabitCard key={habit.id} habit={habit} deleteHabit={deleteHabit} > </HabitCard>
                    ))}

                </div>

                <Button onClick={openModal} >Add</Button>

                {isModalOpen && (

                    <div className='modalStyles overlay' onClick={(e) => handleBackdropClick(e)}>

                        <div className='modalStyles modal'>

                            <h2>Habit</h2>

                            <div className='inputs'>

                                <Input onChange={(e) => newHabitChange(e)} type='text' value={newHabit.name} name='name' placeholder='Name' />
                                <Input onChange={(e) => newHabitChange(e)} type='text' value={newHabit.amount} name='amount' placeholder='Amount' />
                                <Input onChange={(e) => newHabitChange(e)} type='text' value={newHabit.frecuency} name='frecuency' placeholder='Frecuency' />

                            </div>

                            <Button onClick={() => addHabit()}>Send</Button>

                            {/* <button onClick={() => toggleModal}>Close Modal</button> */}

                        </div>

                    </div>

                )}

            </div>

        </div>
    )

}

function HabitCard({ habit, deleteHabit }) {

    return (
        <div className={`habit-card ${habit.isDeleted ? 'deleted' : ''}`}>

            <div className='name'>
                {habit.name}
            </div>

            <div className='amount'>
                {habit.amount}
            </div>

            <div className='frecuency'>
                {habit.frecuency}
            </div>

            <DeleteIcon className='delete-habit' onClick={() => deleteHabit(habit.id)} />

        </div>
    )
}

function DailyEndReport() {

    return (
        <div className='eod'>

            <div className='question'>
                How much time did you waste? 
            </div>

            <Input type='text' />

        </div>
    )

}

export default HabitGame