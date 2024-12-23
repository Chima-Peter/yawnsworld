import MediaQuery from 'react-responsive'
// import MobileNav from './mobile_nav.js'
import DesktopNav from './desktop_nav.js'
import MobileNav from './mobile_nav.js'


const ExportNav = () => {
  return (
    <>
        <MediaQuery maxWidth={1189.9}>
            <MobileNav />
        </MediaQuery>
        <MediaQuery minWidth={1190}>
            <DesktopNav />
        </MediaQuery>
    </>
  )
}

export default ExportNav