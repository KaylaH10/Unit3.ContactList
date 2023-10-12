import { useState } from 'react'
import ContactList from './components/contactList'

import './App.css'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact</div>
        ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
        )}
    </>
  )
}



export default App
