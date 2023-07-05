import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

// type DivProps = HtmlHTMLAttributes<HTMLDivElement>
interface PostProps {
  imgSource: string
  title: string
  date: string
  className: string
  path: string
  price: number
}

function MarketPost({ imgSource, title, className, path, price }: PostProps) {
  return (
    <div
      className={twMerge(
        ' bg-lightPink py-2 mb-2 rounded-sm drop-shadow-xl',
        className
      )}
    >
      <img className="w-full h-28" src={imgSource} alt={title} />
      <div className="flex flex-col pl-4 pt-2">
        <div className="font-bold text-grey font-base">
          <p>${price}</p>
        </div>
        <p className="font-xl font-light">
          <Link to={path}>{title}</Link>
        </p>
      </div>
    </div>
  )
}

export default MarketPost
