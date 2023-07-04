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
        'w-full bg-lightPink flex py-2 mb-2 items-center border-b-1 border-slate-500',
        className
      )}
    >
      <img className="h-12 w-12" src={imgSource} alt={title} />
      <div className="flex flex-col pl-4 pt-2 w-full">
        <p className="text-black font-bold text-sm">
          <Link to={path}>{title}</Link>
        </p>
        <div className="text-sm">
          <p>Posted on {date}</p>
          <p className="text-end pt-1">(5) comments</p>
        </div>
      </div>
    </div>
  )
}

export default Post
