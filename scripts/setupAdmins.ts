import 'dotenv/config'; // Load environment variables from .env file
import { createClient } from '@supabase/supabase-js';

// Create a Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Make sure we have the required environment variables
if (!supabaseUrl) {
  console.error('Error: VITE_SUPABASE_URL is required for this script.');
  console.error('\nPlease follow these steps:');
  console.error('1. Create a .env file in the root directory if it doesn\'t exist');
  console.error('2. Add your Supabase URL to the .env file:');
  console.error('   VITE_SUPABASE_URL=your-supabase-url');
  console.error('\nYou can find your Supabase URL in the Supabase dashboard:');
  console.error('- Go to https://app.supabase.io');
  console.error('- Select your project');
  console.error('- Go to Project Settings > API');
  process.exit(1);
}

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

console.log(`Using Supabase URL: ${supabaseUrl}`);
console.log(`Service role key is ${supabaseServiceKey.length} characters long`);

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

const ADMIN_USERS = [
  { email: 'pamacomkb@gmail.com', password: 'Yarima@505' },
  { email: 'yarimaind@gmail.com', password: 'Yarima@505' },
  { email: 'pamacospares@gmail.com', password: 'Yarima@505' },
  { email: 'fortunemillstores@gmail.com', password: 'Yarima@505' },
];

const setupAdmins = async () => {
  try {
    console.log('Starting admin setup process...');
    console.log(`Will set up ${ADMIN_USERS.length} admin users`);

    for (const admin of ADMIN_USERS) {
      console.log(`Processing admin user: ${admin.email}`);
      
      try {
        // First try to create a new user
        console.log(`Attempting to create new user for ${admin.email}`);
        
        const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
          email: admin.email,
          password: admin.password,
          email_confirm: true,
          user_metadata: { role: 'admin' },
          app_metadata: { role: 'admin' }
        });
        
        if (createError) {
          if (createError.message.includes('already exists')) {
            console.log(`User ${admin.email} already exists, updating...`);
            
            // Get user by email
            const { data: { users }, error: getUserError } = await supabase.auth.admin.listUsers();
            
            if (getUserError) {
              console.error(`Error getting user list:`, getUserError);
              continue;
            }
            
            const existingUser = users?.find(user => user.email === admin.email);
            
            if (!existingUser) {
              console.error(`Could not find user ${admin.email} in the user list`);
              continue;
            }
            
            // Update the user's password
            console.log(`Updating password for ${admin.email}`);
            const { error: updateError } = await supabase.auth.admin.updateUserById(
              existingUser.id,
              { 
                password: admin.password,
                user_metadata: { role: 'admin' },
                app_metadata: { role: 'admin' }
              }
            );
            
            if (updateError) {
              console.error(`Error updating user ${admin.email}:`, updateError);
              continue;
            }
            
            console.log(`Updated user ${admin.email} successfully`);
          } else {
            console.error(`Error creating user ${admin.email}:`, createError);
            continue;
          }
        } else {
          console.log(`Created new admin user ${admin.email} with ID: ${newUser.user.id}`);
        }
        
        console.log(`Admin user ${admin.email} set up successfully`);
      } catch (userError) {
        console.error(`Unexpected error processing user ${admin.email}:`, userError);
      }
    }

    console.log('Admin setup process completed.');
  } catch (error) {
    console.error('Error setting up admin users:', error);
  }
};

console.log('Starting admin setup script');
setupAdmins()
  .then(() => {
    console.log('Admin setup script completed successfully');
    process.exit(0);
  })
  .catch(error => {
    console.error('Admin setup script failed:', error);
    process.exit(1);
  });