import { ChangeEvent, FormEvent, useState } from 'react'

function RegisterUser() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [suburb, setSuburb] = useState('')

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }

  const handleSuburbChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSuburb(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  // Hardcoded towns
  const suburbs = [
    'Auckland Central',
    'Parnell',
    'Ponsonby',
    'Newmarket',
    'Takapuna',
    'Devonport',
    'Milford',
    'Albany',
    'Henderson',
    'New Lynn',
    'Titirangi',
    'Massey',
    'Manukau',
    'Papatoetoe',
    'Mangere',
    'Otahuhu',
    'Howick',
    'Pakuranga',
    'Botany Downs',
    'Half Moon Bay',
  ]

  return (
    <div>
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <br />
        <label>
          First Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <label>
          Country:
          <select value={country} disabled>
            <option value="New Zealand">New Zealand</option>
          </select>
        </label>
        <br />
        <label>
          City:
          <select value={city} disabled>
            <option value="Auckland">Auckland</option>
          </select>
        </label>
        <br />
        <label>
          Suburb:
          <select value={suburb} onChange={handleSuburbChange}>
            <option value="">Select Suburb</option>
            {suburbs.map((suburb) => (
              <option key={suburb} value={suburb}>
                {suburb}
              </option>
            ))}
            {/*Render list of suburbs*/}
          </select>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterUser
