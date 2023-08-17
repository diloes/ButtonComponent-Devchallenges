import { useState } from 'react'

const Sidebar = () => {
  const menuItems = ['Colors', 'Typography', 'Spaces', 'Buttons', 'Inputs', 'Grid']
  const [activeIndex, setActiveIndex] = useState(3)

  const handleActive = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className='bg-[#FAFBFD] h-full p-8'>
      <h4 className='text-[13px] font-semibold mb-[7rem]'>
        <span className='text-[#F7542E]'>Dev</span>challenges.io
      </h4>
      <ul>
        {menuItems.map((item, index) => (
          <li
            style={{ color: activeIndex === index ? 'black' : '#9E9E9E' }}
            onClick={() => handleActive(index)}
            className='text-sm text-[#9E9E9E] mb-4 cursor-pointer'
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
