import { useParams } from 'react-router-dom'
import ClassifiedsDetailPost from '../../components/Classifieds/ClassifiedsDetailPost'

function ClassifiedsDetail() {
  const location = useParams()

  return <ClassifiedsDetailPost />
}

export default ClassifiedsDetail
