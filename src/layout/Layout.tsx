import { Header } from "../components/Header/Header"
import Routers from "../routes/Routers"


function Layout() {


    return (
      <>
        <Header />
        <main>
          <Routers />   
        </main>
      </>
    )
  }
  
  export default Layout