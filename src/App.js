/* eslint-disable */
import './App.css'
import Novels from './components/novels'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  useEffect(() => {
    async function getAuthors() {
      const { data } = await axios.get('localhost:1337/authors')
      return data
    }
    console.log(getAuthors())
  })
  return (
    <div>
      < Novels />
    </div>
  )
}

export default App
