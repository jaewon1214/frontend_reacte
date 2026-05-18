import React from 'react'

function Form({info, setInfo, setScores}) {

    const handleChange = (event) =>{
    const {name, value} = event.target;
    setInfo((prev)=>(
        {...prev, [name]: value}
    ))
  }

    const handlesubmit = (evant) =>{
    evant.preventDefault();
    setScores((prev)=>(
      [...prev, info]
    ))
  }
  
  return (
    <form onSubmit={handlesubmit}>
      <div>이름 : 
        <input 
          type="text" 
          name="이름" 
          value={info.이름}
          onChange={handleChange}
        /> 
      </div>
      <div>국어 : 
        <input 
          type="number" 
          name="국어" 
          value={info.국어} 
          onChange={handleChange}
          /> 
        </div> 
       <div>영어 : 
        <input 
          type="number" 
          name="영어" 
          value={info.영어} 
          onChange={handleChange}
          /> 
        </div> 
       <div>수학 : 
        <input 
          type="number" 
          name="수학" 
          value={info.수학}
          onChange={handleChange}
          /> 
        </div> 
       <div>과학 : 
        <input 
          type="number" 
          name="과학" 
          value={info.과학} 
          onChange={handleChange}
          /> 
        </div> 
      <button>제출</button>
    </form>
  )
}

export default Form
