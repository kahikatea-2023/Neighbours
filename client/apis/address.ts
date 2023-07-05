import axios from 'axios'

async function getAddressAutocomplete(input: string): Promise<string[]> {
  const url = `/api/v1/address-autocomplete?input=${encodeURIComponent(input)}`

  try {
    const response = await axios.get(url)

    if (response.data) {
      const autocompleteResults = response.data.map(
        (suggestion: any) => suggestion.text
      )
      return autocompleteResults
    }
  } catch (error) {
    console.error('Error fetching address autocomplete:', error)
  }

  return []
}

export default getAddressAutocomplete
