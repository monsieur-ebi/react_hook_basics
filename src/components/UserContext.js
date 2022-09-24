import React from 'react'
import { UsernameContext } from '../App'

const UserContext = () => {

  return (
    <UsernameContext.Consumer>
        {
            user => {
                return <div>My name is {user}</div>
            }
        }
    </UsernameContext.Consumer>
  )
}

export default UserContext