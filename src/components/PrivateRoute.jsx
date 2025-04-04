import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem('auth_token')
        if (!token) {
          setIsAuthenticated(false)
          return
        }

        // Send the token in the Authorization header
        const response = await axios.get(
          'http://localhost:5000/api/check-auth',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        setIsAuthenticated(response.data.authenticated)
      } catch (error) {
        console.error(
          'Check-auth error:',
          error.response?.data || error.message
        )
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, [])

  if (isAuthenticated === null) {
    return <div>Loading...</div>
  }

  return isAuthenticated ? children : <Navigate to="/login" />
}

export default PrivateRoute
