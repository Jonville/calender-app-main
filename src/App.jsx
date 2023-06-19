import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Calendar from './components/Calendar'

function App() {
  // 년, 월, 일 생성 및 state
  const [year , setYear] = useState(new Date().getFullYear());
  const [month , setMonth] = useState(new Date().getMonth());
  const [date , setDate] = useState(new Date().getDate());

  console.log(year, month, date);

  // 다음달 버튼
  const nextMonth = () => {
    if(month == 11) { // 11 이면 12월을 뜻함 (마지막 월)
      setMonth(0)    // 1월
      setYear(year + 1)
      return;
    }
    setMonth(month + 1)
  }

  // 이전달 버튼
  const prevMonth = () => {
    if(month == 0){
      setMonth(11)
      setYear(year - 1)
      return;
    }
    setMonth(month - 1)
  }

  return (
    <>
      <div className='App'>
        <Header />
        {/* 년-월-일 state를 Calendar 컨포넌트에 전달!!*/}
        <Calendar year={year} month={month} date={date} />
        <div className="btn-group">
          <button 
            className="prev"
            onClick={prevMonth}
          >이전달</button>
          <button 
            className="next"
            onClick={nextMonth}
          >다음달</button>
        </div>
      </div>
    </>
  )
}

export default App
