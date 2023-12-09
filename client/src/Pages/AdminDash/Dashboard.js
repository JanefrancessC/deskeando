import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Dashboard = () => {
    let name = useLocation().state.key
    return (
      <div>
          <h2>{`Hello ${name} from the admin dashboard`}</h2>
    </div>
  )
}

export default Dashboard
