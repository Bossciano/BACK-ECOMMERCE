'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function SuccessPage() {
  useEffect(() => {
    // Clear cart after successful payment
    clearCart()
  }, [])

  async function clearCart() {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('user_carts').delete().eq('user_id', user.id)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for your order. We've received your payment and will start
          processing your order right away.
        </p>

        <div className="space-y-4">
          <Link
            href="/orders"
            className="block w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
          >
            View My Orders
          </Link>

          <Link
            href="/"
            className="block w-full border border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition"
          >
            Continue Shopping
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          You will receive a confirmation email shortly.
        </p>
      </div>
    </div>
  )
}
