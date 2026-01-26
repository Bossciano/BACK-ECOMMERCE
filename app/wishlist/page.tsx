'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, ShoppingCart } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { WishlistItem } from '@/types'

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchWishlist()
  }, [])

  async function fetchWishlist() {
    try {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('wishlists')
        .select(`
          *,
          product:products (
            *,
            product_images (
              image_url,
              alt_text
            )
          )
        `)
        .eq('user_id', user.id)

      if (error) throw error
      setWishlistItems(data || [])
    } catch (error) {
      console.error('Error fetching wishlist:', error)
    } finally {
      setLoading(false)
    }
  }

  async function removeFromWishlist(itemId: string) {
    try {
      await supabase.from('wishlists').delete().eq('id', itemId)
      setWishlistItems(items => items.filter(item => item.id !== itemId))
    } catch (error) {
      console.error('Error removing from wishlist:', error)
    }
  }

  async function moveToCart(item: WishlistItem) {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      // Add to cart
      const { data: existingItem } = await supabase
        .from('user_carts')
        .select('*')
        .eq('user_id', user.id)
        .eq('product_id', item.product_id)
        .single()

      if (existingItem) {
        await supabase
          .from('user_carts')
          .update({ quantity: existingItem.quantity + 1 })
          .eq('id', existingItem.id)
      } else {
        await supabase
          .from('user_carts')
          .insert({
            user_id: user.id,
            product_id: item.product_id,
            quantity: 1,
          })
      }

      // Remove from wishlist
      await removeFromWishlist(item.id)
      alert('Moved to cart!')
    } catch (error) {
      console.error('Error moving to cart:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h1>
        <p className="text-gray-600 mb-8">Add some products you love!</p>
        <Link
          href="/"
          className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition inline-block"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <Link href={`/product/${item.product_id}`}>
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={item.product?.product_images?.[0]?.image_url || '/placeholder.png'}
                  alt={item.product?.name || ''}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>

            <div className="p-4">
              <Link href={`/product/${item.product_id}`}>
                <h3 className="text-lg font-semibold text-gray-800 hover:text-purple-600 transition">
                  {item.product?.name}
                </h3>
              </Link>

              <p className="text-2xl font-bold text-purple-600 mt-2">
                ${item.product?.price.toFixed(2)}
              </p>

              <div className="mt-4 flex items-center space-x-2">
                <button
                  onClick={() => moveToCart(item)}
                  className="flex-1 flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
