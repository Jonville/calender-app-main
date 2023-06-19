import React from 'react'

function Calendar(props) {

    // props 에서 년-월-일 가져오기
    let {year, month, date} = props;

    // 요일
    // let day = new Date().getDay();
    let days = ['일' , '월' , '화' , '수' , '목' , '금' , '토']

    // 날짜 조회
    let d = new Date();

    // 해당 월의 말일 구하기    (다음달 기준으로 0 을 하면 말일을 구해줌)
    let lastDate = new Date(year, month + 1, 0).getDate();

    // 시작일 : 달력에서 1일이 시작할 위치 (요일값 = 0 ~ 6)
    let start_date = new Date(year, month, 1).getDay();

  return (
    <div className='calendar'>
        <header>
            <h2>{year}</h2>
            <span>{month + 1}월</span>
        </header>

        <main>
            <ul className='date'>
                {
                    Array(days.length).fill().map((_, i) => {
                        return (
                            <li 
                                key={i}
                                className={ i === 0 || i === 6 ? `holiday${i}` : null}
                                // style={{color: i === 6 ? 'blue' : null}}  위처럼 바꿀수있음
                                
                            >{days[i]}</li>
                        )
                    })
                }

                {
                    Array(start_date).fill().map((_, i) => {
                        return (
                            <li key={i}></li>
                        )
                    })
                }
                                
                {
                    Array(lastDate).fill().map((_, i) => {
                        return (
                            <li 
                                key={i}
                                className={
                                    new Date(year, month, i + 1).getDay() === 0 ||
                                    new Date(year, month, i + 1).getDay() === 6 
                                    ? `holiday${new Date(year, month, i + 1).getDay()}` : 
                                        year === d.getFullYear() &&
                                        month === d.getMonth() &&
                                        date === i + 1 ? 
                                        'today' : null 
                                }
                            >{i + 1}</li>
                        )
                    })
                }
            </ul>
        </main>

    </div>
  )
}

export default Calendar