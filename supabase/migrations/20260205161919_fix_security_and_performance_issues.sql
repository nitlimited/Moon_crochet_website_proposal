/*
  # Fix Security and Performance Issues

  ## 1. Add Missing Indexes
  Create indexes on foreign key columns to improve query performance:
    - `cart_items.product_id` - Speeds up product lookups in cart
    - `order_items.product_id` - Speeds up product lookups in orders
    - `reviews.user_id` - Speeds up user review queries

  ## 2. Optimize RLS Policies
  Update all RLS policies to use `(select auth.uid())` instead of `auth.uid()` directly.
  This prevents re-evaluation of the auth function for each row, dramatically improving performance at scale.
  
  Affected policies:
    - `reviews` table: "Users can create their own reviews"
    - `reviews` table: "Users can update their own reviews"
    - `orders` table: "Users can view their own orders"
    - `orders` table: "Users can create their own orders"
    - `order_items` table: "Users can view items from their own orders"
    - `cart_items` table: "Users can view their own cart items"
    - `cart_items` table: "Users can create their own cart items"
    - `cart_items` table: "Users can update their own cart items"
    - `cart_items` table: "Users can delete their own cart items"

  ## 3. Secure Public Form Policies
  Add basic validation to public submission policies to prevent abuse:
    - `custom_bookings` - Require valid email and name fields
    - `newsletter_subscribers` - Require valid email format

  ## 4. Security Impact
    - All changes maintain existing functionality
    - Performance improvements for authenticated operations
    - Enhanced security for public forms with basic validation
*/

-- ============================================
-- 1. Add Missing Indexes on Foreign Keys
-- ============================================

CREATE INDEX IF NOT EXISTS idx_cart_items_product ON cart_items(product_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product ON order_items(product_id);
CREATE INDEX IF NOT EXISTS idx_reviews_user ON reviews(user_id);

-- ============================================
-- 2. Optimize RLS Policies - Reviews Table
-- ============================================

DROP POLICY IF EXISTS "Users can create their own reviews" ON reviews;
DROP POLICY IF EXISTS "Users can update their own reviews" ON reviews;

CREATE POLICY "Users can create their own reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can update their own reviews"
  ON reviews FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);

-- ============================================
-- 3. Optimize RLS Policies - Orders Table
-- ============================================

DROP POLICY IF EXISTS "Users can view their own orders" ON orders;
DROP POLICY IF EXISTS "Users can create their own orders" ON orders;

CREATE POLICY "Users can view their own orders"
  ON orders FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can create their own orders"
  ON orders FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

-- ============================================
-- 4. Optimize RLS Policies - Order Items Table
-- ============================================

DROP POLICY IF EXISTS "Users can view items from their own orders" ON order_items;

CREATE POLICY "Users can view items from their own orders"
  ON order_items FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = (select auth.uid())
    )
  );

-- ============================================
-- 5. Optimize RLS Policies - Cart Items Table
-- ============================================

DROP POLICY IF EXISTS "Users can view their own cart items" ON cart_items;
DROP POLICY IF EXISTS "Users can create their own cart items" ON cart_items;
DROP POLICY IF EXISTS "Users can update their own cart items" ON cart_items;
DROP POLICY IF EXISTS "Users can delete their own cart items" ON cart_items;

CREATE POLICY "Users can view their own cart items"
  ON cart_items FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can create their own cart items"
  ON cart_items FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can update their own cart items"
  ON cart_items FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can delete their own cart items"
  ON cart_items FOR DELETE
  TO authenticated
  USING ((select auth.uid()) = user_id);

-- ============================================
-- 6. Secure Public Forms - Custom Bookings
-- ============================================

DROP POLICY IF EXISTS "Anyone can create custom bookings" ON custom_bookings;

CREATE POLICY "Anyone can create custom bookings"
  ON custom_bookings FOR INSERT
  TO public
  WITH CHECK (
    name IS NOT NULL AND 
    name != '' AND 
    email IS NOT NULL AND 
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

-- ============================================
-- 7. Secure Public Forms - Newsletter
-- ============================================

DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON newsletter_subscribers;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO public
  WITH CHECK (
    email IS NOT NULL AND 
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );
