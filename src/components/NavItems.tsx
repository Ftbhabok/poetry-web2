'use client'

import { PRODUCT_CATEGORIES } from '@/app/config'
// import { useOnClickOutside } from '@/hooks/use-on-click-outside'
import { useEffect, useRef, useState } from 'react'
import NavItem from './NavItem'



const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<
    null | number
  >(null)
// till here same

  // useEffect(() => {
  //   const handler = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape') {
  //       setActiveIndex(null)
  //     }
  //   }

  //   document.addEventListener('keydown', handler)

  //   return () => {
  //     document.removeEventListener('keydown', handler)
  //   }
  // }, [])

  const isAnyOpen = activeIndex !== null

  // const navRef = useRef<HTMLDivElement | null>(null)

  // useOnClickOutside(navRef, () => setActiveIndex(null))

  return (
    <div className='flex gap-4 h-full'>
      {PRODUCT_CATEGORIES.map((category, i) => {

        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null)
          } else {
            setActiveIndex(i)
          }
        }

        const close = () => setActiveIndex(null)

        const isOpen = i === activeIndex

        return (
          <NavItem
            category={category}
            close={close}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        )
      })}
    </div>
  )
}

export default NavItems

// function useOnClickOutside(navRef: MutableRefObject<HTMLDivElement | null>, arg1: () => void) {
//     throw new Error('Function not implemented.')
// }

