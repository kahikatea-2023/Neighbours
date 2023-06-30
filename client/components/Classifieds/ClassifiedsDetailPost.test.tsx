//@vitest-environment jsdom
import { expect, test, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { screen } from '@testing-library/react'
import ClassifiedsDetailPost from './ClassifiedsDetailPost'
import { renderComponent } from '../../test-utils'

test('renders ClassifiedDetailPost without errors', () => {
  renderComponent(
    <MemoryRouter>
      <ClassifiedsDetailPost />
    </MemoryRouter>
  )

  // No error should be thrown during rendering
})

test('displays the correct post content', async () => {
  renderComponent(
    <MemoryRouter>
      <ClassifiedsDetailPost />
    </MemoryRouter>
  )

  expect(
    await screen.findAllByText((content, element) => {
      const hasText = (text: string | null): boolean =>
        element?.textContent?.match(new RegExp(text ?? '', 'i')) !== null

      return (
        hasText('Posted by: Sarah') &&
        hasText(
          "There is a cockroach in my house, and I need someone's help to get rid of it!"
        ) &&
        hasText('Date: 2023-07-15') &&
        hasText('Time: 15:00:00')
      )
    })
  ).toBeTruthy()
})

test('displays the correct post title', async () => {
  renderComponent(
    <MemoryRouter>
      <ClassifiedsDetailPost />
    </MemoryRouter>
  )

  expect(
    await screen.findAllByText((content, element) => {
      const hasText = (text: string | null): boolean =>
        element?.textContent?.match(new RegExp(text ?? '', 'i')) !== null

      return hasText('Help Needed: Cockroach in House')
    })
  ).toBeTruthy()
})

test('displays the correct post author', async () => {
  renderComponent(
    <MemoryRouter>
      <ClassifiedsDetailPost />
    </MemoryRouter>
  )

  expect(
    await screen.findAllByText((content, element) => {
      const hasText = (text: string | null): boolean =>
        element?.textContent?.match(new RegExp(text ?? '', 'i')) !== null

      return hasText('Posted by: Sarah')
    })
  ).toBeTruthy()
})
