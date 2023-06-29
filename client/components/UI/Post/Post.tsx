import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type DivProps = HtmlHTMLAttributes<HTMLDivElement>

function Post({ children, className, ...rest }: DivProps) {
  return (
    <div
      className={twMerge(
        'w-auto bg-primary text-white font-bold py-2 px-4 rounded-lg hover:shadow-[0px_0px_9px_2px_#65768C] drop-shadow-2xl',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Post
