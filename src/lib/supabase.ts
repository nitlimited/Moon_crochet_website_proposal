import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  description: string;
  materials: string;
  price: number;
  sku: string;
  stock_quantity: number;
  featured: boolean;
  created_at: string;
  updated_at: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_at: string;
};

export type ProductImage = {
  id: string;
  product_id: string;
  image_url: string;
  alt_text: string;
  is_primary: boolean;
  sort_order: number;
};

export type Review = {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  title: string;
  comment: string;
  created_at: string;
};

export type CartItem = {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  variant_details: Record<string, unknown>;
};

export type CustomBooking = {
  name: string;
  email: string;
  phone: string;
  preferred_date: string;
  message: string;
  design_preferences: string;
  reference_images: string[];
};
