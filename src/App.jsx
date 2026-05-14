import './App.css'
import { useState } from 'react'
import ScoresTable from './components/ScoresTable'

const style = {
  width: "500px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}

const initscores = [
  { 이름 : 'john', 국어 : 91, 영어 : 91, 수학 : 81, 과학 : 91},
  { 이름 : 'peter', 국어 : 92, 영어 : 92, 수학 : 82, 과학 : 92},
  { 이름 : 'susan', 국어 : 93, 영어 : 93, 수학 : 83, 과학 : 93},
  { 이름 : 'sue', 국어 : 94, 영어 : 94, 수학 : 84, 과학 : 94},

]

const initinfo = {
  이름 : "",
  국어 : null,
  영어 : null,
  수학 : null,
  과학 : null,
}

function App() {
  const [info, setA] = useState(initinfo)
  const [scores, setScores] = useState(initscores)

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setA((prev)=>(
        {...prev, [name]: value} // {...prev, [event.target.name]: event.target.value}
    ))
    console.log(event.target.name)
  }
  const handlesubmit = (evant) =>{
    evant.preventDefault();
   // console.log(evant.target)
    setScores((prev)=>(
      [...prev, info]
    ))
  }
  return (
    <>

    <ScoresTable scores={scores}/>

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
    
    </>
   
  )
}

export default App
