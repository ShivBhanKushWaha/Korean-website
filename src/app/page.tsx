import React from 'react'
import { Card } from '@/organisms'  // Make sure to adjust the import path according to your project structure
import { DotOfSun } from '../../assets'
const HomePage = () => {
  const dummyData = [
    {
      img: DotOfSun, // Ensure you have this image in your public/images directory
      title: 'Descendants of the sun',
      description: 'Total 16 episode'
    },
    {
      img: DotOfSun, // Ensure you have this image in your public/images directory
      title: 'Love Is Sweet',
      description: 'Total 36 episode'
    },
    {
      img: DotOfSun, // Ensure you have this image in your public/images directory
      title: 'W Two Worlds',
      description: 'Total 16 episode'
    }
  ]

  return (
    <div className="flex flex-wrap gap-4 py-4">
      {dummyData.map((data, index) => (
        <Card
          key={index}
          img={data.img}
          title={data.title}
          desciption={data.description}
        />
      ))}
    </div>
  )
}

export default HomePage
