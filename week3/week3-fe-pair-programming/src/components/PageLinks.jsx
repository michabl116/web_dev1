import { pageLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((link) => {
        return <PageLinks parentClass='footer-links' itemClass='footer-link' />
      })}
    </ul>
  )
}
export default PageLinks