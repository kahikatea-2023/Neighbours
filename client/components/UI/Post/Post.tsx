import { twMerge } from 'tailwind-merge'

// type DivProps = HtmlHTMLAttributes<HTMLDivElement>
interface PostProps {
  imgSource: string,
  title: string,
  date: string,
  className: string
}

function Post({ imgSource, title, date, className }: PostProps) {
  return (
    <div
      className={twMerge(
        'w-3/4 bg-primary flex flex-row py-2 px-4 mb-6 ml-6 rounded-lg hover:shadow-[0px_0px_9px_2px_#65768C] drop-shadow-[0px_0px_10px_#65768C]',
        className
      )}
    >

      <img className="h-24" src={imgSource} alt="" />
      <div className='flex flex-col pt-8 pl-4'>
        <p className='text-black font-bold font-xl'>{title}</p>
        <p className='text-grey italic font-base'>{date}</p>
      </div>
    </div>
  )
}

export default Post
