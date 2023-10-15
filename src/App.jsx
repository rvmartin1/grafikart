import { useState } from "react"

function App() {
   const [count,setCount]=useState(0);
   console.log("render")
   const [person, setPerson]=useState({
      lastName:"John",
      firstName:"Doe",
      age:18
   })

   const incrementCount=()=>{
      setCount(count+1);
   }

   const incrementAge=()=>{
      setPerson({...person,age:person.age+1});
   }

   return <>
   <p>compteur : {count}</p>
   <button onClick={incrementCount}>Incrementer compteur </button>
   <p>Nom : {person.firstName}, age : {person.age}</p>
   <button onClick={incrementAge}>Incrementer Age </button>
   </>
}

export default App
