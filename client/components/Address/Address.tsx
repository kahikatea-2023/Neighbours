import React, { useState } from 'react'
import GetAddressAutocomplete from '../../apis/address'

function Address() {
  const [autocompleteResults, setAutocompleteResults] = useState<string[]>([])
  const [searchInput, setSearchInput] = useState('')

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value
    setSearchInput(input)

    try {
      // Call the address autocomplete API
      const results = await GetAddressAutocomplete(input)
      setAutocompleteResults(results)
    } catch (error) {
      // Handle the error
      console.error('Error fetching address autocomplete:', error)
    }
  }

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Enter an address"
      />

      {autocompleteResults.length > 0 && (
        <ul>
          {autocompleteResults.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Address
