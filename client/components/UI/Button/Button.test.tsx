//@vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import Button from './Button'
import { renderComponent } from '../../../test-utils'

describe('Button', () => {
  it('renders a button with the provided children', () => {
    const { getByText } = renderComponent(<Button>Click me</Button>)
    const buttonElement = getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  it('applies the provided className to the button', () => {
    const { container } = renderComponent(
      <Button className="custom-class">Button</Button>
    )
    const buttonElement = container.querySelector('button') as HTMLButtonElement
    expect(buttonElement).toHaveClass('custom-class')
  })

  it('calls the onClick handler when the button is clicked', () => {
    const onClick = vi.fn()
    const { container } = renderComponent(
      <Button onClick={onClick}>Button</Button>
    )
    const buttonElement = container.querySelector('button') as HTMLButtonElement
    buttonElement.click()
    expect(onClick).toHaveBeenCalled()
  })

  it('has default styling classes and attributes', () => {
    const { container } = renderComponent(<Button>Button</Button>)
    const buttonElement = container.querySelector('button') as HTMLButtonElement
    expect(buttonElement).toHaveClass(
      'w-auto bg-primary text-white font-bold py-2 px-4 rounded-lg hover:shadow-[0px_0px_9px_2px_#65768C] drop-shadow-2xl'
    )
  })
})
