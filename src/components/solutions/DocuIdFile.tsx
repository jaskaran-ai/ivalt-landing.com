import React from 'react'
import Image from 'next/image'
import Docuid from "@/assets/images/solutions/Douc-Id.jpg"


export const DocuIdFile = () => {
  return (
          <div className='flex justify-center mt-11 items-center '>
              <Image src={Docuid} alt="On-Demand" width={1100} height={1100} />
          </div>


    
  )
}
