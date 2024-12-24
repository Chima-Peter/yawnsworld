import MediaQuery from 'react-responsive'
// import MobileNav from './mobile_nav.js'
import DesktopNav from './desktop_nav.js'
import MobileNav from './mobile_nav.js'
import NavbarProvider from '../../context/nav_context.js'


const ExportNav = () => {
  return (
    <NavbarProvider>
        <MediaQuery maxWidth={1189.9}>
            <MobileNav />
        </MediaQuery>
        <MediaQuery minWidth={1190}>
            <DesktopNav />
        </MediaQuery>
    </NavbarProvider>
  )
}

export default ExportNav