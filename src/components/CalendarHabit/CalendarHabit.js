import { useState } from 'react'
import './CalendarHabit.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

const CalendarHabit = () => {
    
    const [amountOfDaysSeries, setAmountOfDaysSeries] = useState([...Array(30).keys()].map(x => ({ number: x+1, completed: false})))

    const [selectedDate, setSelectedDate] = useState(null)

    const [habitPercent, setHabitPercent] = useState(0)

    const crossDay = (day) => {

        // if (volume && !day.completed)
        //     playSound()

        setAmountOfDaysSeries((amountOfDaysSeries ) => {

            return amountOfDaysSeries.map(d => d.number === day.number ? {...d, completed: !d.completed} : d )
        } )

        if (!day.completed)        
            setHabitPercent(habitPercent + (1/30)*100)
        else
            setHabitPercent(habitPercent - (1/30)*100)

    }

    const playSound = () => {
        const sound = new Audio('/audio/CrossDay.wav')
        sound.play()
    }

    const Day = ({day}) => {

        return (
            <div onClick={() => crossDay(day)} className={`day cursor-pointer`}>
                {day.number}
                {day.completed && <div className='completed'>
                    ❌
                </div>}
            </div>
        )
    
    }

    const ProgressBar = ({ percentage }) => {
        return (
          <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '10px' }}>
            <div
              style={{
                height: '20px',
                width: `${percentage}%`,
                backgroundColor: '#3b82f6',
                borderRadius: '10px',
              }}
            ></div>
          </div>
        );
      };

    const SelectDay = ({name}) => {

        const formatText = (text) => {
            return text
              .split('-') // Split the string into an array by '-'
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
              .join(' '); // Join the words back with a space
          };

        return (
            <div className={`selector ${name} mb-2`}>

                <span className='label mr-2'>
                    {formatText(name)}
                </span>

                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy/MM/dd"
                    className='cursor-pointer'
                    placeholderText='Pick a day'
                />

            </div>
        )
    }

    return (
        <div className='calendar-habit grid grid-cols-4 grid-rows-4 gap-4'>

            <div className='selectors flex flex-column col-span-1 row-span-4'>

                <div className='flex flex-column justify-between items-center'>
                    <SelectDay name={'start-day'} />

                    <SelectDay name={'end-day'} />

                    <SelectDay name={'current-day'} />
                </div>

                <div className='selector'>
                    <span className='label' >
                        Amount of days
                    </span>
                </div>

            </div>

            <div className='calendar col-span-3 row-span-3 col-start-2 row-start-1'>
                {amountOfDaysSeries.map((day) => (<Day key={day.number} day={day}></Day>))}
            </div>

            <ProgressBar className='col-span-4 row-start-4' percentage={habitPercent} />

        </div>
    )

}

export default CalendarHabit