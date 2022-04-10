import { useState } from "react";
import { AppHeader, Planets, People, Films, Vehicles } from "./components";

const Root = () => {
   const [page, setPage] = useState('planets')

   const pageContent = (pageName) => {
      switch (pageName) {
         case 'films':
            return <Films />
         case 'planets':
            return <Planets />
         case 'people':
            return <People />
         case 'vehicles':
            return <Vehicles />

         default:
            break;
      }
   }

   return (
      <section className="App">
         <div className="header_example">React Query Example (With help of <a href="https://swapi.dev">Swapi Star wars</a>)</div>
         <AppHeader setPage={setPage} />
         <div className="content">
            {
               pageContent(page)
            }
         </div>
      </section>
   );
}

export default Root