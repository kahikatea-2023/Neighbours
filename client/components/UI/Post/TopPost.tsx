import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

// type DivProps = HtmlHTMLAttributes<HTMLDivElement>
interface PostProps {
  imgSource: string
  title: string
  date: string
  className: string
  path: string
}

function Post({ imgSource, title, date, className, path }: PostProps) {
  return (
    <div
      className={twMerge(
        ' bg-lightPink flex rounded-2xl drop-shadow-xl w-50% h-32 items-center ',
        className
      )}
    >
      <img className="h-11 w-11" src={imgSource} alt={title} />
      <div className="flex flex-col pl-4 pt-2">
        <p className="text-black font-semibold text-xs">
          <Link to={path}>{title}</Link>
        </p>
        <div className="text-slate-600 font-medium text-xs">
          <p>Posted on {date}</p>
          <p>(3) comments</p>
        </div>
      </div>
    </div>
  )
}

export default Post
