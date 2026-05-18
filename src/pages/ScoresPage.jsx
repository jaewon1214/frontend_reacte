import React, {useState} from 'react'
import ScoresTable from '../components/socre/ScoresTable'
import Form from '../components/socre/Form'

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

function ScoresPage() {
    const [info, setInfo] = useState(initinfo)
    const [scores, setScores] = useState(initscores)
  return (
    <>
        <ScoresTable scores={scores}/>
        <Form info = {info} setInfo={setInfo} setScores={setScores}/>
    </>
  )
}

export default ScoresPage
