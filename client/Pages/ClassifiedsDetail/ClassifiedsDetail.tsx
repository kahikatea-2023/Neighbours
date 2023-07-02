import { useParams } from 'react-router-dom'
import ClassifiedsDetailPost from '../../components/Classifieds/ClassifiedsDetailPost'
import Comment from '../../components/Comment/Comment'

function ClassifiedsDetail() {
  const location = useParams()

  return
  ;<div>
    <ClassifiedsDetailPost />
    <Comment />
  </div>
}

export default ClassifiedsDetail
