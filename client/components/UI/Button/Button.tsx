import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>

function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'w-auto bg-primary text-white font-bold py-2 px-4 rounded-lg hover:shadow-[0px_0px_9px_2px_#F18A81] drop-shadow-xl',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
