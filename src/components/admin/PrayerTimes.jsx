import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PrayerTimesAdmin = () => {
  const [formData, setFormData] = useState({
    fajrAdhan: '',
    fajrIqama: '',
    dhuhrAdhan: '',
    dhuhrIqama: '',
    asrAdhan: '',
    asrIqama: '',
    maghribAdhan: '',
    maghribIqama: '',
    ishaAdhan: '',
    ishaIqama: '',
    jumuahAdhan: '',
    jumuahIqama: '',
  })

  useEffect(() => {
    const fetchLatestTimes = async () => {
      try {
        const token = localStorage.getItem('auth_token')
        const response = await axios.get(
          'http://localhost:5000/api/prayer-times',
          { headers: { Authorization: `Bearer ${token}` } }
        )

        if (response.data) {
          setFormData({
            fajrAdhan: response.data.fajr.adhan,
            fajrIqama: response.data.fajr.iqama,
            dhuhrAdhan: response.data.dhuhr.adhan,
            dhuhrIqama: response.data.dhuhr.iqama,
            asrAdhan: response.data.asr.adhan,
            asrIqama: response.data.asr.iqama,
            maghribAdhan: response.data.maghrib.adhan,
            maghribIqama: response.data.maghrib.iqama,
            ishaAdhan: response.data.isha.adhan,
            ishaIqama: response.data.isha.iqama,
            jumuahAdhan: response.data.jumuah?.adhan || '',
            jumuahIqama: response.data.jumuah?.iqama || '',
          })
        }
      } catch (error) {
        toast.error('Failed to fetch prayer times.')
      }
    }
    fetchLatestTimes()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const token = localStorage.getItem('auth_token')
      if (!token) {
        toast.warn('Please login first')
        return
      }

      // Prepare payload with all required fields
      const payload = {
        fajr_adhan: formData.fajrAdhan || '00:00',
        fajr_iqama: formData.fajrIqama || '00:00',
        dhuhr_adhan: formData.dhuhrAdhan || '00:00',
        dhuhr_iqama: formData.dhuhrIqama || '00:00',
        asr_adhan: formData.asrAdhan || '00:00',
        asr_iqama: formData.asrIqama || '00:00',
        maghrib_adhan: formData.maghribAdhan || '00:00',
        maghrib_iqama: formData.maghribIqama || '00:00',
        isha_adhan: formData.ishaAdhan || '00:00',
        isha_iqama: formData.ishaIqama || '00:00',
        jumuah_adhan: formData.jumuahAdhan || null,
        jumuah_iqama: formData.jumuahIqama || null,
      }

      console.log('Submitting:', payload) // Debug log

      const response = await axios.post(
        'http://localhost:5000/api/prayer-times',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      toast.success('Prayer times updated successfully!')
      window.location.reload() // Force refresh to show changes
    } catch (error) {
      console.error('Full error:', error)
      console.error('Error response:', error.response?.data)
      alert(`Error: ${error.response?.data?.error || error.message}`)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-primary">
        Manage Prayer Times
      </h2>
      <p className="text-gray-600 mb-8">
        Update prayer times. Changes will reflect immediately on the user side.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fajr Adhan */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Fajr Adhan</label>
          <input
            type="time"
            name="fajrAdhan"
            value={formData.fajrAdhan}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        {/* Fajr Iqama */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Fajr Iqama</label>
          <input
            type="time"
            name="fajrIqama"
            value={formData.fajrIqama}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        {/* Dhuhr Adhan */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Dhuhr Adhan</label>
          <input
            type="time"
            name="dhuhrAdhan"
            value={formData.dhuhrAdhan}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        {/* Dhuhr Iqama */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Dhuhr Iqama</label>
          <input
            type="time"
            name="dhuhrIqama"
            value={formData.dhuhrIqama}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        {/* Asr Adhan */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Asr Adhan</label>
          <input
            type="time"
            name="asrAdhan"
            value={formData.asrAdhan}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        {/* Asr Iqama */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Asr Iqama</label>
          <input
            type="time"
            name="asrIqama"
            value={formData.asrIqama}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        {/* Maghrib Adhan */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">
            Maghrib Adhan
          </label>
          <input
            type="time"
            name="maghribAdhan"
            value={formData.maghribAdhan}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        {/* Maghrib Iqama */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">
            Maghrib Iqama
          </label>
          <input
            type="time"
            name="maghribIqama"
            value={formData.maghribIqama}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        {/* Isha Adhan */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Isha Adhan</label>
          <input
            type="time"
            name="ishaAdhan"
            value={formData.ishaAdhan}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        {/* Isha Iqama */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Isha Iqama</label>
          <input
            type="time"
            name="ishaIqama"
            value={formData.ishaIqama}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        {/* Jumu'ah Adhan (Optional) */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">
            Jumu'ah Adhan (Optional)
          </label>
          <input
            type="time"
            name="jumuahAdhan"
            value={formData.jumuahAdhan}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {/* Jumu'ah Iqama (Optional) */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">
            Jumu'ah Iqama (Optional)
          </label>
          <input
            type="time"
            name="jumuahIqama"
            value={formData.jumuahIqama}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Save Prayer Times
          </button>
        </div>
      </form>
    </div>
  )
}

export default PrayerTimesAdmin
