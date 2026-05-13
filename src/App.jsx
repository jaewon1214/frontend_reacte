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

function App() {
 
  return (
    <table>
      <tr>
        {
          Object.keys(scores[1]).map(key=>(
            <th>{key}</th>
          ))
        }
      </tr>
      {scores.map(item =>
          (
          <tr>
            {
              Object.values(item).map(
                value => (<td>{value}</td>)
              )
            }
            
          </tr>
          )
        )
      }
    </table>
  )
}

export default App
