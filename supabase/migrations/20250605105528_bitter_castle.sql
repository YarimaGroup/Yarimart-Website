/*
# Fix Orders User Relation

1. This migration fixes the relationship between orders and auth.users
2. Updates the foreign key constraint
3. Updates RLS policies to use auth.uid() correctly

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
USING ((SELECT (r.jwt->'app_metadata'->>'role')::text = 'admin' 
        FROM auth.users u 
        WHERE u.id = auth.uid()));

-- Create admin policy to allow admins to update all orders
DROP POLICY IF EXISTS "Admins can update orders" ON public.orders;
CREATE POLICY "Admins can update orders"
ON public.orders
FOR UPDATE
TO authenticated
USING ((SELECT (r.jwt->'app_metadata'->>'role')::text = 'admin' 
        FROM auth.users u 
        WHERE u.id = auth.uid()));