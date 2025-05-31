import 'dotenv/config'; // Load environment variables from .env file
import { createClient } from '@supabase/supabase-js';

// Create a Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Make sure we have the service role key for admin operations
if (!supabaseServiceKey) {
  console.error('Error: SUPABASE_SERVICE_ROLE_KEY is required for this script.');
  console.error('\nPlease follow these steps:');
  console.error('1. Create a .env file in the root directory if it doesn\'t exist');
  console.error('2. Add your Supabase service role key to the .env file:');
  console.error('   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key');
  console.error('\nYou can find your service role key in the Supabase dashboard:');
  console.error('- Go to https://app.supabase.io');
  console.error('- Select your project');
  console.error('- Go to Project Settings > API');
  console.error('- Copy the "service_role key" (NOT the anon key)');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const ADMIN_USERS = [
  { email: 'pamacomkb@gmail.com', password: 'Yarima@505' },
  { email: 'yarimaind@gmail.com', password: 'Yarima@505' },
  { email: 'pamacospares@gmail.com', password: 'Yarima@505' },
  { email: 'fortunemillstores@gmail.com', password: 'Yarima@505' },
];

const setupAdmins = async () => {
  try {
    console.log('Starting admin setup process...');

    for (const admin of ADMIN_USERS) {
      console.log(`Processing admin user: ${admin.email}`);
      
      // First check if user already exists using the auth API
      const { data: existingUser, error: lookupError } = await supabase.auth.admin.getUserByEmail(admin.email);

      if (lookupError) {
        console.error(`Error looking up user ${admin.email}:`, lookupError);
        continue;
      }
      
      let userId;
      
      if (existingUser?.user) {
        console.log(`User ${admin.email} already exists, updating...`);
        userId = existingUser.user.id;
        
        // Update the user's password
        const { error: updateError } = await supabase.auth.admin.updateUserById(
          userId,
          { password: admin.password }
        );
        
        if (updateError) {
          console.error(`Error updating password for ${admin.email}:`, updateError);
          continue;
        }
      } else {
        console.log(`Creating new admin user: ${admin.email}`);
        
        // Create the user with the admin role
        const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
          email: admin.email,
          password: admin.password,
          email_confirm: true, // Auto-confirm the email
          user_metadata: { role: 'admin' },
          app_metadata: { role: 'admin' }
        });
        
        if (createError) {
          console.error(`Error creating user ${admin.email}:`, createError);
          continue;
        }
        
        console.log(`Admin user ${admin.email} created successfully`);
        userId = newUser.user.id;
      }
      
      // Update metadata to ensure admin role is set
      const { error: metadataError } = await supabase.auth.admin.updateUserById(
        userId,
        {
          user_metadata: { role: 'admin' },
          app_metadata: { role: 'admin' }
        }
      );
      
      if (metadataError) {
        console.error(`Error setting admin role for ${admin.email}:`, metadataError);
        continue;
      }
      
      console.log(`Successfully set up admin user: ${admin.email}`);
    }

    console.log('Admin setup process completed.');
  } catch (error) {
    console.error('Error setting up admin users:', error);
  } finally {
    // Close the connection
    await supabase.auth.signOut();
  }
};

setupAdmins().catch(console.error);