import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center px-10 py-4 bg-gray-50 text-gray-900'>
      <h3 className='text-2xl font-bold cursor-pointer'>Pentagram</h3>
      <ul className='flex justify-evenly items-center gap-5'>
        <li className='text-[18px] text-gray-900 hover:text-gray-700 cursor-pointer'>Work</li>
        <li className='text-[18px] text-gray-900 hover:text-gray-700 cursor-pointer'>About</li>
        <li className='text-[18px] text-gray-900 hover:text-gray-700 cursor-pointer'>News</li>
        <li className='text-[18px] text-gray-900 hover:text-gray-700 cursor-pointer'>Contact</li>
        <li className='text-[18px] text-gray-900 hover:text-gray-700 cursor-pointer'>🔍</li>
        <li className='text-[18px] text-gray-900 hover:text-gray-700 cursor-pointer'>Archive</li>
      </ul>
    </div>
  )
}

export default Header