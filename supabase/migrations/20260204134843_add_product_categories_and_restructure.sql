/*
  # Add Product Categories and Restructure Products

  1. Changes
    - Delete existing products to avoid conflicts
    - Add new categories: Clutch Bag, Shell Bags, Fringe Bag, Noodle Bag, Laptop Bag, Eye Glasses, Bucket Bag
    - Create sample products under each category with various yarn colors
    - Set Clutch Bag, Shell Bags, Fringe Bag, Noodle Bag as featured categories for homepage

  2. Structure
    - Categories represent product types (Clutch Bag, Shell Bags, etc.)
    - Products under each category represent different yarn color variants
    - Featured flag on categories (using products table) determines homepage display

  3. Notes
    - Homepage will display 4 featured categories
    - Shop page will display all categories and their color variants
*/

-- Clear existing data
DELETE FROM product_images;
DELETE FROM product_variants;
DELETE FROM products;
DELETE FROM categories;

-- Insert categories
INSERT INTO categories (name, slug, description) VALUES
  ('Clutch Bag', 'clutch-bag', 'Elegant handmade crochet clutch bags perfect for any occasion'),
  ('Shell Bags', 'shell-bags', 'Unique shell-shaped crochet bags with beautiful patterns'),
  ('Fringe Bag', 'fringe-bag', 'Trendy crochet bags with stylish fringe details'),
  ('Noodle Bag', 'noodle-bag', 'Fun and playful noodle-style crochet bags'),
  ('Laptop Bag', 'laptop-bag', 'Protective and stylish crochet laptop bags'),
  ('Eye Glasses', 'eye-glasses', 'Handmade crochet eyeglass cases and accessories'),
  ('Bucket Bag', 'bucket-bag', 'Spacious bucket-style crochet bags for everyday use');

-- Insert products for Clutch Bag category (Featured)
INSERT INTO products (category_id, name, slug, description, materials, price, featured) 
SELECT 
  c.id,
  'Clutch Bag - ' || color,
  'clutch-bag-' || LOWER(REPLACE(color, ' ', '-')),
  'Handmade crochet clutch bag in beautiful ' || color || ' yarn',
  'Premium cotton yarn, magnetic snap closure',
  45.00,
  true
FROM categories c, 
  (VALUES ('Cream White'), ('Dusty Pink'), ('Sky Blue'), ('Sage Green')) AS colors(color)
WHERE c.slug = 'clutch-bag';

-- Insert products for Shell Bags category (Featured)
INSERT INTO products (category_id, name, slug, description, materials, price, featured)
SELECT 
  c.id,
  'Shell Bag - ' || color,
  'shell-bag-' || LOWER(REPLACE(color, ' ', '-')),
  'Unique shell-shaped crochet bag in ' || color,
  'Soft cotton blend yarn, shell-inspired design',
  52.00,
  true
FROM categories c,
  (VALUES ('Pearl White'), ('Coral Pink'), ('Ocean Blue'), ('Sandy Beige')) AS colors(color)
WHERE c.slug = 'shell-bags';

-- Insert products for Fringe Bag category (Featured)
INSERT INTO products (category_id, name, slug, description, materials, price, featured)
SELECT 
  c.id,
  'Fringe Bag - ' || color,
  'fringe-bag-' || LOWER(REPLACE(color, ' ', '-')),
  'Trendy crochet bag with fringe details in ' || color,
  'Cotton yarn with decorative fringe, adjustable strap',
  48.00,
  true
FROM categories c,
  (VALUES ('Ivory'), ('Rust Orange'), ('Forest Green'), ('Navy Blue')) AS colors(color)
WHERE c.slug = 'fringe-bag';

-- Insert products for Noodle Bag category (Featured)
INSERT INTO products (category_id, name, slug, description, materials, price, featured)
SELECT 
  c.id,
  'Noodle Bag - ' || color,
  'noodle-bag-' || LOWER(REPLACE(color, ' ', '-')),
  'Fun noodle-style crochet bag in ' || color,
  'Chunky yarn, playful noodle texture',
  42.00,
  true
FROM categories c,
  (VALUES ('Butter Yellow'), ('Lavender'), ('Mint Green'), ('Rose Pink')) AS colors(color)
WHERE c.slug = 'noodle-bag';

-- Insert products for Laptop Bag category
INSERT INTO products (category_id, name, slug, description, materials, price, featured)
SELECT 
  c.id,
  'Laptop Bag - ' || color,
  'laptop-bag-' || LOWER(REPLACE(color, ' ', '-')),
  'Protective crochet laptop bag in ' || color,
  'Durable cotton yarn with padded interior, fits up to 15" laptop',
  65.00,
  false
FROM categories c,
  (VALUES ('Charcoal Gray'), ('Black'), ('Brown'), ('Dark Blue')) AS colors(color)
WHERE c.slug = 'laptop-bag';

-- Insert products for Eye Glasses category
INSERT INTO products (category_id, name, slug, description, materials, price, featured)
SELECT 
  c.id,
  'Eye Glasses Case - ' || color,
  'eye-glasses-case-' || LOWER(REPLACE(color, ' ', '-')),
  'Handmade crochet eyeglass case in ' || color,
  'Soft cotton yarn, snap closure',
  18.00,
  false
FROM categories c,
  (VALUES ('Red'), ('Purple'), ('Teal'), ('Gold')) AS colors(color)
WHERE c.slug = 'eye-glasses';

-- Insert products for Bucket Bag category
INSERT INTO products (category_id, name, slug, description, materials, price, featured)
SELECT 
  c.id,
  'Bucket Bag - ' || color,
  'bucket-bag-' || LOWER(REPLACE(color, ' ', '-')),
  'Spacious bucket-style crochet bag in ' || color,
  'Sturdy cotton yarn, drawstring closure, adjustable strap',
  55.00,
  false
FROM categories c,
  (VALUES ('Tan'), ('Olive Green'), ('Burgundy'), ('Slate Gray')) AS colors(color)
WHERE c.slug = 'bucket-bag';

-- Add product images for sample products (using placeholder)
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, sort_order)
SELECT 
  p.id,
  '/moon_bag_2.png',
  p.name,
  true,
  0
FROM products p
WHERE p.slug LIKE 'clutch-bag-%' OR p.slug LIKE 'shell-bag-%' OR p.slug LIKE 'fringe-bag-%' OR p.slug LIKE 'noodle-bag-%';
