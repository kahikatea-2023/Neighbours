/**
 * @vitest-environment jsdom
 */

import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import RegisterUser from './RegisterUser'
import { MemoryRouter } from 'react-router-dom'


test('the input field', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/register']}>
      <RegisterUser />
    </MemoryRouter>
  )
  const input = container.querySelector('input')

  // input exists in the RegisterUser component
  expect(input).toBeTruthy()
  // is empty
  expect(input?.textContent).toBe('')
})

