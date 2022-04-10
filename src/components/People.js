import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Pagination from "@mui/material/Pagination";
import { AppPeople } from "../components/common"
import { Loading } from '../assets';

const fetchPeople = async (keys) => {
   const [key, page] = keys?.queryKey;
   const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
   return res.json();
}

const People = () => {
   const [pageNumber, setPageNumber] = useState(1);
   const { data, status, error } = useQuery(['people', pageNumber], fetchPeople);
   const [totalCount, setTotalCount] = useState(0)

   const handleChange = (event, pageNumber) => {
      setPageNumber(pageNumber)
   };

   React.useEffect(() => {
      if (data && data?.count != 0 && totalCount == 0) {
         setTotalCount(data?.count)
      }
   }, [data])

   return (
      <div>
         <h2>
            People
         </h2>
         {
            totalCount != 0 && totalCount >= 10 &&
            <Pagination
               count={parseInt(totalCount / 10) ?? parseInt(0)}
               onChange={handleChange}
            />
         }
         {
            status == 'loading' ?
               <div className='center'>
                  <Loading />
               </div>
               :
               status == 'success' ? totalCount != 0 &&
                  <div>
                     <div className='cards'>
                        {
                           data?.results?.map((item, i) =>
                              <AppPeople item={item} key={i.toString()} />
                           )
                        }
                     </div>
                  </div>
                  :
                  status == 'error' ?
                     <div className='error_message'>
                        <p>Error while fetching data</p>
                     </div>
                     : null
         }
      </div>
   )
}

export default People