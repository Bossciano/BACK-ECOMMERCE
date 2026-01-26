'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart } from 'lucide-react'
import { Product } from '@/types'
import { supabase } from '@/lib/supabase'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [loading, setLoading] = useState(false)

  const primaryImage = product.product_images?.[0]?.image_url || '/placeholder.png'

  async function addToCart() {
    try {
      setLoading(true)
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        alert('Please sign in to add items to cart')
        return
      }

      // Check if item already in cart
      const { data: existingItem } = await supabase
        .from('user_carts')
        .select('*')
        .eq('user_id', user.id)
        .eq('product_id', product.id)
        .single()

      if (existingItem) {
        // Update quantity
        await supabase
          .from('user_carts')
          .update({ quantity: existingItem.quantity + 1 })
          .eq('id', existingItem.id)
      } else {
        // Insert new item
        await supabase
          .from('user_carts')
          .insert({
            user_id: user.id,
            product_id: product.id,
            quantity: 1,
          })
      }

      alert('Added to cart!')
    } catch (error) {
      console.error('Error adding to cart:', error)
      alert('Failed to add to cart')
    } finally {
      setLoading(false)
    }
  }

  async function toggleWishlist() {
    try {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        alert('Please sign in to add items to wishlist')
        return
      }

      if (isWishlisted) {
        await supabase
          .from('wishlists')
          .delete()
          .eq('user_id', user.id)
          .eq('product_id', product.id)
        setIsWishlisted(false)
      } else {
        await supabase
          .from('wishlists')
          .insert({
            user_id: user.id,
            product_id: product.id,
          })
        setIsWishlisted(true)
      }
    } catch (error) {
      console.error('Error toggling wishlist:', error)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-64 bg-gray-200">
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-purple-600 transition">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-600">
            ${product.price.toFixed(2)}
          </span>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleWishlist}
              className={`p-2 rounded-full ${
                isWishlisted
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition`}
            >
              <Heart className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} />
            </button>

            <button
              onClick={addToCart}
              disabled={loading || product.stock_quantity === 0}
              className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{loading ? 'Adding...' : 'Add'}</span>
            </button>
          </div>
        </div>

        {product.stock_quantity === 0 && (
          <p className="text-red-500 text-sm mt-2">Out of stock</p>
        )}
      </div>
    </div>
  )
}
