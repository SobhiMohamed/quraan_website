import { Button } from '@material-tailwind/react'
import React from 'react'

const Home = ({reciters,navigate}) => {
  
  return (
    <div className='flex-row-reverse flex justify-center gap-3 items-center flex-wrap w-[75%] overflow-y-scroll h-[90vh] '>
      {reciters.map((reciter,i) => (
          
          <Button key={i} className='flex justify-center flex-wrap  w-[100%] md:w-[48%] lg:w-[32%] text-[24px] bg-[#012f61]'onClick={()=>navigate(`/reciter/${reciter.id}`)} >{reciter.name}</Button>
      ))}
    </div>
  )
}

export default Home;