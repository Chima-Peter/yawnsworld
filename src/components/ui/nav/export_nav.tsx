import MediaQuery from 'react-responsive'
// import MobileNav from './mobile_nav.js'
import DesktopNav from './desktop_nav.js'
import MobileNav from './mobile_nav.js'


const ExportNav = () => {
  return (
    <>
        <MediaQuery maxWidth={1023}>
            <div />
        </MediaQuery>
        <MediaQuery minWidth={1024}>
            <DesktopNav />
        </MediaQuery>
    </>
  )
}

export default ExportNav