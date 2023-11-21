import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import phonebookService from './services/phonebook'

const Notification = ({ message }) => {
  return (
    <div className="feedback">
      {message}
    </div>
  )
}
const Persons = ({ person, removeContact }) => {
  return (
    <p>
      {person.name} {person.number} <button onClick={removeContact}>delete</button>
    </p>
  )
}

const Filter = ({ handleChange, value }) => {
  return (
    <div>
    filter shown with <input value={value} onChange={handleChange}/>
    </div>
  )
}

const PersonForm = (props) => {
  return (
    <div>
    <form onSubmit={props.onsubmit}>
        <div>
          {props.text1}: <input 
          value={props.value1}
          onChange={props.handleChange1} />
        </div>
        <div>
          {props.text2}: <input 
          value={props.value2}
          onChange={props.handleChange2} />
        </div>
        <div>
          <button type={props.submitButton}>
            {props.text3}
          </button>
        </div>
      </form>
      </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [typing, setTyping] = useState('')
  const [notify, setNotify] = useState(null)

  useEffect(() => {
    console.log('effect')
    phonebookService
    .getContacts()
    .then(contacts => {
      console.log('promise fulfilled')
      setPersons(contacts)
    })
  }, [])
  
  const  deleteContact = (id) => {
    console.log(`Contact with ${id} needs to be deleted`)
    const url = `http://localhost:3001/persons/${id}`
    const contact = contactsToShow.find(c => c.id === id)
    const deletedContact = { ...contact}

    console.log('deleted', deletedContact)

    if (window.confirm(`Are you sure you want to delete ${deletedContact.name}`)) {
      axios
      .delete(url, deletedContact)
      .then(response => {
      setPersons(persons.map(person => person.id !== id ? person : response.data))
      
      setNotify(
        `Contact '${deletedContact.name}' is deleted`
      )
      setTimeout(() => {
        setNotify(null)
      }, 10000)

    })
    }
      setNewName('')
      setNewNumber('')

  }


  
  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    
    // const hasValue = (obj, value) => Object.values(obj).includes(value)

    // console.log('this is name', newName)
    // console.log('this is object', persons)
    // console.log(hasValue(persons[0], newName))
    const check = persons.filter((exist) => exist.name === newName)
    .map(exist => exist.name)

    console.log('Check', check, (check.includes(newName)))

      if (check.includes(newName) === true) {
        if (confirm(`${newName} is already added to phonebook, replace old number with a new one?`)) {
          // axios
          // .put(`http://localhost:3001/persons/${id}`, contactObject)
          // .then(response => response.data)
        }


      } else {
      phonebookService
      .AddNew(contactObject)
      .then(updatedContacts => {
          setPersons(persons.concat(updatedContacts))
          setNewName('')
          setNewNumber('')
        })

        setNotify(
          `Contact '${contactObject.name}' has been added`
        )
        setTimeout(() => {
          setNotify(null)
        }, 10000)
      }
      // console.log('Persons Array', persons)
      // setNewName('')
      // setNewNumber('')
    }
  

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setTyping(event.target.value)
  }

  const contactsToShow = typing
    ? persons.filter((person) => person.name.toLowerCase().includes(typing.toLowerCase())
    )
    : persons


  console.log('Filtered', contactsToShow)
  
  return (
    <div>
      <Notification message={notify} />

      <h2>Phonebook</h2>
      <Filter value={typing} handleChange={handleSearchChange} />
      
      <h2>add a new</h2>
      <PersonForm 
      onsubmit={addContact} 
      text1='name' 
      value1={newName} 
      handleChange1={handleNameChange} 
      text2='number'
      value2={newNumber}
      handleChange2={handleNumberChange}
      submitButton='submit'
      text3='add'
       />

      <h2>Numbers</h2>
      {contactsToShow.map((person) => 
        <Persons key={person.id} person={person} removeContact={() => deleteContact(person.id)} />)}
        
      
      {/* {persons.map(person => 
        <Contact key={person.name} person={person} />
        )} */}
    </div>
  )
}

export default App
