import React from 'react'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
    let name = useLocation().state.key
    return (
      <div>
          <h2>{`Hello ${name} welcome to the admin dashboard`}</h2>
    </div>
  )
}

export default Dashboard
