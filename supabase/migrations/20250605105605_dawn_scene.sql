/*
  # Fix foreign key relationship between orders and auth.users
  
  1. Changes:
    - Drops existing foreign key if it exists
    - Adds correct foreign key constraint to link orders.user_id to auth.users.id
    - Updates row-level security policies to use the correct auth.uid() reference
    - Adds admin policies for viewing and updating orders
  
  2. Security:
    - Updates RLS policies to ensure users can only access their own orders
    - Adds special policies for admin users to manage all orders
*/

-- Drop existing foreign key if it exists
ALTER TABLE IF EXISTS public.orders
DROP CONSTRAINT IF EXISTS orders_user_id_fkey;

-- Add the correct foreign key constraint 
ALTER TABLE public.orders
ADD CONSTRAINT orders_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES auth.users(id)
ON DELETE CASCADE;

-- Update RLS policies to ensure they use the correct auth.uid() reference
DROP POLICY IF EXISTS "Users can insert their own orders" ON public.orders;
CREATE POLICY "Users can insert their own orders"
ON public.orders
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can read their own orders" ON public.orders;
CREATE POLICY "Users can read their own orders"
ON public.orders
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Create admin policy to allow admins to view all orders
DROP POLICY IF EXISTS "Admins can view all orders" ON public.orders;
CREATE POLICY "Admins can view all orders"
ON public.orders
FOR SELECT
TO authenticated
USING ((auth.jwt() -> 'app_metadata' ->> 'role')::text = 'admin');

-- Create admin policy to allow admins to update all orders
DROP POLICY IF EXISTS "Admins can update orders" ON public.orders;
CREATE POLICY "Admins can update orders"
ON public.orders
FOR UPDATE
TO authenticated
USING ((auth.jwt() -> 'app_metadata' ->> 'role')::text = 'admin');