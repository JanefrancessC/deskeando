import React from 'react'
import { useLocation } from 'react-router-dom'


const EmployeeDsh = () => {
    let name = useLocation().state.key
  return (
    <div>
          <h1>{`Hello ${name} welcome to the employee dashboard`}</h1>
    </div>
  )
}

export default EmployeeDsh
