/*
  # Add relationship between orders and users tables

  1. Changes
    - Add foreign key relationship between orders.user_id and auth.users.id
    - Update RLS policies to use proper user ID check
  
  2. Security
    - Maintain existing RLS policies with corrected user ID reference
*/

-- First check if the foreign key already exists to avoid errors
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_name = 'orders_user_id_fkey'
      AND table_schema = 'public' 
      AND table_name = 'orders'
  ) THEN
    -- Add foreign key constraint to link orders.user_id to auth.users.id
    ALTER TABLE public.orders
    ADD CONSTRAINT orders_user_id_fkey
    FOREIGN KEY (user_id)
    REFERENCES auth.users(id)
    ON DELETE CASCADE;
  END IF;
END $$;

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