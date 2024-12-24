import { useContext } from "react"
import { NavBarContext } from "../context/nav_context"

const useNavbarContext = () => {
  const context = useContext(NavBarContext)
  if (!context) {
    throw new Error('useNavbarContext must be used with a NavbarProvider')
  }
  return context 
}

export default useNavbarContext