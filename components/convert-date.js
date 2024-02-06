import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

const ConvertDate = ({ dateISO }) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), 'yyy年 MM月 dd日', {})}
    </time>
  )
}
export default ConvertDate
