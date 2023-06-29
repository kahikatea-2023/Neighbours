import { vi, test, expect, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegisterUser, { RegisterUserProps } from './RegisterUser'

afterEach(cleanup)

test('When the form is submitted the handleSubmit function should be called with a form object', async () => {
  // Create a variable to store the form object
  let submittedForm: unknown = null

  // Define a mock handleSubmit function
  const handleSubmitMock = vi.mockFn((form: unknown) => {
    submittedForm = form
  })

  // Render the component with the mock handleSubmit function
  const props: RegisterUserProps = {
    handleSubmit: handleSubmitMock,
  }
  render(<RegisterUser {...props} />)

  // Find the form elements
  const firstNameInput = screen.getByLabelText(/First Name/i)
  const lastNameInput = screen.getByLabelText(/Last Name/i)
  const suburbSelect = screen.getByLabelText(/Suburb/i)
  const submitButton = screen.getByRole('button', { name: /Register/i })

  // Enter values in the form inputs
  userEvent.type(firstNameInput, 'John')
  userEvent.type(lastNameInput, 'Doe')
  userEvent.selectOptions(suburbSelect, 'Auckland Central')

  // Submit the form
  userEvent.click(submitButton)

  // Assert that the handleSubmit function is called with the expected form object
  expect(handleSubmitMock).toHaveBeenCalledWith(
    expect.objectContaining({
      firstName: 'John',
      lastName: 'Doe',
      suburb: 'Auckland Central',
    })
  )

  // Assert that the submitted form object is stored correctly
  expect(submittedForm).toEqual(
    expect.objectContaining({
      firstName: 'John',
      lastName: 'Doe',
      suburb: 'Auckland Central',
    })
  )
})
