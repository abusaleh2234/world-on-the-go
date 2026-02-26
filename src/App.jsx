
import { Suspense } from 'react'
import './App.css'
import Countries from './Component/Countries/Countries'
import { add, diff } from './utils/math/math'
import { modular } from './utils/math/mod'

const countriesPromises = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json())

function App() {

  const Add = add(5,8)
  // console.log(Add);
  const Diff = diff(10,6)
  // console.log(Diff);
  
  const Mod = modular(45,7)
  // console.log(Mod);
  

  return (
    <>
      <Suspense fallback={<p>World on the go in loading ...</p>}>
        <Countries countriesPromises={countriesPromises}></Countries>
      </Suspense>
    </>
  )
}

export default App
