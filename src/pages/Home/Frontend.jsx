import React from 'react'
import { Outlet } from 'react-router-dom'

const Frontend = () => {
  return (
    <div>
        <Outlet/>
        <h1>
            Hello this is Frontend Page
        </h1>
    </div>
  )
}

export default Frontend