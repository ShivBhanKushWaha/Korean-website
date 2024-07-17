'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
interface CardProps {
  img?: any,
  title: string,
  desciption: string
}
const Card: React.FC<CardProps> = ({ img, title, desciption }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/${title.toLowerCase().replace(/ /g, '-')}`)
  }
  return (
    <div className='py-2 my-4 cursor-pointer border-black rounded-lg shadow-lg px-7' onClick={() => handleClick()}>
      <div className="w-[60px] h-[50px] border border-[#04B600] rounded-[11px]">
        <div className=" border border-[#04B600] bg-black rounded-t-[11px] items-center justify-center flex">
          <Image src={img} alt={title} width={200} height={200}/>
        </div>
      </div>
      <p className="sm:text-[23px] text-[21px] sm:font-semibold font-normal text-[#013A00] capitalize sm:mt-6 mt-3">{title}</p>
      <p className="text-[17px] font-light text-[#013A00]">{desciption}</p>
    </div>
  )
}

export default Card