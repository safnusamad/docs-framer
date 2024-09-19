import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({data,referance}) => {
  return (
    <motion.div drag dragConstraints={referance} dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} className='relative bg-zinc-700 w-60 h-60 rounded-[40px] p-5 overflow-hidden text-white flex-shrink-0'>
        <FaFileAlt />
        <p className='py-2 tracking-tight text-sm'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0 '>
            <div className='flex items-center justify-between py-3 px-3 md-6 '>
                <h4>{data.filesize}</h4>
                <span className='w-7 h-7 bg-zinc-800 rounded-full flex items-center justify-center'>
                    {data.close ? <IoMdClose size="1rem"/>: <BsDownload size="1rem"/> }
                </span>
            </div>
            {data.tag.isOpen && (<div className={`tag flex py-4 justify-center  ${
              data.tag.tagColor === "red" ? "bg-red-800" : "bg-green-800"
            } text-white`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>)
            }
            
        </div>  
    </motion.div>
  )
}

export default Card