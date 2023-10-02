import Header from "../../Components/Header";
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js';
import Sidebar from "../../Components/Sidebar";
import Body from "../../Components/Body";

export default function Home() {
  return(
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <Header/>
          <Sidebar/>
           <Body/>


      </main>
  )
}