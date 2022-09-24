import React, {useState} from 'react'

const HookCounter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for(let i = 0; i < 5; i++){
        setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div>
        <p>Count {count}</p>
        <button type="submit" onClick={() => setCount(setCount(initialCount))}>Reset</button>
        <button type="submit" onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button type="submit" onClick={() => setCount(prevCount => prevCount - 1)}>decrement</button>
        <button type="submit" onClick={() => incrementFive()}>add five</button>
    </div>
  )
}

export default HookCounter