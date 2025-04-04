import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
  const [events, setEvents] = useState([])
  const [numberOfEvents, setNumberOfEvents] = useState(null)

  // Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events')
        setEvents(response.data)
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        setNumberOfEvents(events.length)
      }
    }
    fetchEvents()
  }, [events])

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="font-semibold mb-2">Total Members</h3>
        <p className="text-3xl font-bold">-</p>
      </div>
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="font-semibold mb-2">Pending Questions</h3>
        <p className="text-3xl font-bold">-</p>
      </div>
      <div className="bg-primary/5 rounded-lg p-6">
        <h3 className="font-semibold mb-2">Upcoming Events</h3>
        <p className="text-3xl font-bold">{numberOfEvents}</p>
      </div>
    </div>
  )
}

export default Dashboard
