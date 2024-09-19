import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

  const ref = useRef(null)

  const data= [{
    desc:"The work is pendending...",
    filesize:"9mb",
    close:true,
    tag:{ isOpen: true, tagTitle: "On Process", tagColor:"red"},
  },
  {
    desc:"This the content of the card",
    filesize:"9mb",
    close:false,
    tag:{ isOpen: true, tagTitle: "Download Now", tagColor:"green"},
  },
  {
    desc:"The application is successfully deployed",
    filesize:"9mb",
    close:false,
    tag:{ isOpen: true, tagTitle: "Download Now", tagColor:"green"},
  },

];
  return (
    <div ref={ref} className='fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5 border-2 border-gray-600'>
      {/* fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5 */}
        {data.map((item, index)=>(
          <Card data={item} referance={ref}/>
        ))}
    </div>
  )
}

export default Foreground