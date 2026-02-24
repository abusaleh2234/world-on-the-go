
import { Suspense } from 'react'
import './App.css'
import Countries from './Component/Countries/Countries'

const countriesPromises = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json())

function App() {

  return (
    <>
      <Suspense fallback={<p>World on the go in loading ...</p>}>
        <Countries countriesPromises={countriesPromises}></Countries>
      </Suspense>
    </>
  )
}

export default App
