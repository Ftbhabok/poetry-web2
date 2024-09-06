'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { useCart } from '@/hooks/use-cart'
import { Product } from '@/payload-types'
import { Star } from 'lucide-react'

const AddToFavoritesButton = ({
  product,
}: {
  product: Product
}) => {
  const { addItem, removeItem, items } = useCart()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [isInFavorites, setIsInFavorites] = useState<boolean>(false)
  const [actionText, setActionText] = useState<string>('')

  useEffect(() => {
    setIsInFavorites(items.some(item => item.product.id === product.id))
  }, [items, product.id])

  const handleToggleFavorites = () => {
    if (isInFavorites) {
      removeItem(product.id)
      setActionText('Removed from Favorites!')
    } else {
      addItem(product)
      setActionText('Added to Favorites!')
    }
    setIsSuccess(true)
    setIsInFavorites(!isInFavorites)
    setTimeout(() => {
      setIsSuccess(false)
      setActionText('')
    }, 2000)
  }

  return (
    <Button
      onClick={handleToggleFavorites}
      size='sm'
      variant='ghost'
      className='group relative'
    >
      <Star
        className={`h-5 w-5 transition-colors ${
          isInFavorites ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400 group-hover:text-yellow-400'
        }`}
      />
      <span className='absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100'>
        {isSuccess 
          ? actionText 
          : (isInFavorites ? 'Remove from Favorites' : 'Add to Favorites')}
      </span>
    </Button>
  )
}

export default AddToFavoritesButton