# directory requirements

- Users can create an account
  - New accounts will require email confirmation (this comes from Supabase; you don’t need to implement this)
- Users can sign in with their accounts
- Users can sign out after signing in
- When a user signs in:
  - If they haven’t created a profile yet:
  - They are presented with a “Create Profile” view with a message stating they will need to create a profile
    Below the message should be a form with the following inputs:
    - name: string
    - email: string (disabled; not editable, but still visible in the form)
    - birthday: date (you can use `<input type="date">`)
    - bio: text (you can use <`textarea`>)
  * If they have created a profile:
    - They are presented with a profile view page that displays the information from their profile
    - There is a link to the “Edit Profile” view
      - The “Edit Profile” view is the same as the “Create Profile” view, but without the message stating they will need to create a profile
- The app should have a header that displays the Acme Inc name and:
  - A “Sign In” button if the user is signed out
  - A “You are signed in as ${email}”` message with a “Sign Out” button if the user is signed in
- The app should have a homepage with some intro content (you can use filler text) and links to “Sign In” and “Create an Account” (which should navigate to the /login and /register paths, respectively)
