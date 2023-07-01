//@vitest-environment jsdom
import { expect, test, vi, beforeEach } from 'vitest'
import { renderComponent } from '../../test-utils'
import ClassifiedPost from './ClassifiedPost'

beforeEach(() => {
  vi.mock('../UI/Post/Post')
})

test('renders ClassifiedPost without errors', () => {
  renderComponent(<ClassifiedPost />)
})
