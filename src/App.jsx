import { useState } from 'react'
import ContactList from './components/contactList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactList />
    </>
  )
}

export default App
