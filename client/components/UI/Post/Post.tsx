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
        ' bg-lightPink flex flex-row py-2 px-4 mb-2 mx-5 rounded-2xl drop-shadow-xl',
        className
      )}
    >
      <img className="h-14 w-14" src={imgSource} alt={title} />
      <div className="flex flex-col pl-4 pt-2">
        <p className="text-black font-bold font-xl">
          <Link to={path}>{title}</Link>
        </p>
        <div className="flex flex-row space-x-10 text-grey font-base">
          <p>{date}</p>
          {/* <p>({comment}) comments</p> */}
        </div>
      </div>
    </div>
  )
}

export default Post
