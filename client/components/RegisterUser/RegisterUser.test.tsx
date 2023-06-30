/**
 * @vitest-environment jsdom
 */

import { expect, test } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import RegisterUser from './RegisterUser'

test('the input field', () => {
  render(<RegisterUser />)
  const input = document.querySelector('input') as HTMLInputElement | null

  // input exists in the RegisterUser component
  expect(input).toBeTruthy()

  // is empty
  expect(input?.textContent).toBe('')
})
