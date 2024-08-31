import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../Layout'

const Route = () => {
  const route = useRoutes([
    {
        path:"/",
        element:<Layout/>
    }
  ])
}

export default Route