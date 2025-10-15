import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {   // useState hook => used to change d variable states.
  const [count, setCount] = useState(0)

  useEffect(() => {
  setTimeout(() => {
    console.log("You clicked count");
  }, 1000); // runs after 1 second
}, [count]);
// once this retrun will exectued after that useEffect will be exectuted.
// u can see this o/p in console...

  return (
    <div>
      <h1>Welcome to React</h1>
      <button onClick={() =>
        setCount(count => count + 2)}>
        count is {count}
        </button> 
    </div>
  );
}

export default App
