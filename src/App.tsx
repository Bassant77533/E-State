import { About } from "./components/About"
import { ContactUs } from "./components/ContactUs"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Testmonials } from "./components/Testmonials"
  import { ToastContainer } from 'react-toastify';
export const App = () => {
  return (
    <div className="w-full overflow-hidden">
        <ToastContainer />
        <Header/>
        <About/>
        <Projects/>
        <Testmonials/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}
