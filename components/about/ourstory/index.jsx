import React from 'react'
import Heading from './heading'
import OurstoryContent from './ourstory-content'

const Ourstory = () => {
  return (
      <section className="relative bg-white py-24 ">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
         <Heading />
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <OurstoryContent />
           </div>
         </div>
       </section>
  )
}

export default Ourstory