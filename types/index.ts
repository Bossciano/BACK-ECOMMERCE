export interface Product {
  id: string
  name: string
  description: string | null
  price: number
  category: string
  stock_quantity: number
  is_active: boolean
  created_at: string
  updated_at: string
  product_images?: ProductImage[]
}

export interface ProductImage {
  id: string
  product_id: string
  image_url: string
  alt_text: string | null
  display_order: number
  created_at: string
}

export interface CartItem {
  id: string
  user_id: string | null
  product_id: string
  quantity: number
  product?: Product
}

export interface WishlistItem {
  id: string
  user_id: string
  product_id: string
  product?: Product
}

export interface Order {
  id: string
  user_id: string
  total_amount: number
  status: string
  shipping_address: {
    name: string
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  created_at: string
  updated_at: string
  order_items?: OrderItem[]
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price_at_time: number
  product?: Product
}

export interface UserProfile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}
