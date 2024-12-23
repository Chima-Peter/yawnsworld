import { BrowserRouter, Route, Routes } from "react-router-dom"
import ErrorPage from "./apps/error_page"
import HomePage from "./apps/home_page";
import ExportNav from "./components/ui/nav/export_nav";

const App = () => {
  return (
      <BrowserRouter basename={import.meta.env.PROD ? '/repo_name' : '/'}>
         <ExportNav />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes> 
      </BrowserRouter>
  )
}

export default App;


