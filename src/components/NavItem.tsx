'use client'

import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { PRODUCT_CATEGORIES } from '@/config'


type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
  category: Category
  handleOpen: () => void
  close: () => void
  isOpen: boolean
  isAnyOpen: boolean
}

const NavItem = ({
  isAnyOpen,
  category,
  handleOpen,
  close,
  isOpen,
}: NavItemProps) => {
  const handleClick = () => {
    // Navigate to the respective product page based on the category
    if (category.label === 'Poems') {
      window.location.href = '/products?category=ui_kits'; // Update with the correct path
    } else if (category.label === 'Novels') {
      window.location.href = '/products?category=icons'; // Update with the correct path
    } else {
      handleOpen(); // Fallback to the original behavior
    }
  };

  return (
    <div className='flex'>
      <div className='relative flex items-center'>
        <Button
          className='gap-1.5'
          onClick={handleClick} // Updated to use handleClick
          variant={isOpen ? 'secondary' : 'ghost'}>
          {category.label}
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-all text-muted-foreground opacity-100 group-hover:opacity-100', // Updated for hover effect
              {
                'rotate-180': isOpen, // Change rotation to point right
              }
            )}
          />
        </Button>
      </div>

      
    </div>
  )
}

export default NavItem
