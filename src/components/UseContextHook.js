import React, {useContext} from 'react'
import { UsernameContext } from '../App'

const UseContextHook = () => {
  const user = useContext(UsernameContext);
  return (
    <div>
        Hello my name is {user}
    </div>
  )
}

export default UseContextHook