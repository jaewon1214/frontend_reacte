import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const scores = [
  { 이름 : 'john', 국어 : 91, 영어 : 91, 수학 : 81, 과학 : 91},
  { 이름 : 'peter', 국어 : 92, 영어 : 92, 수학 : 82, 과학 : 92},
  { 이름 : 'susan', 국어 : 93, 영어 : 93, 수학 : 83, 과학 : 93},
  { 이름 : 'sue', 국어 : 94, 영어 : 94, 수학 : 84, 과학 : 94},
] 


/*let newScores = numbers.map(item=>{return item*2})
{console.log(newScores)}*/

function App() {
 
  return (
    <table>
      <tr>
        <th>이름</th>
        <th>국어</th>
        <th>영어</th>
        <th>수학</th>
        <th>과학</th>
      </tr>
      {[0, 1, 2, 3].map(idx =>
          (
          <tr>
            <td>{scores[idx].이름}</td>
            <td>{scores[idx].국어}</td>
            <td>{scores[idx].영어}</td>
            <td>{scores[idx].수학}</td>
            <td>{scores[idx].과학}</td>
          </tr>
          )
        )
      }
    </table>
  )
}

export default App
