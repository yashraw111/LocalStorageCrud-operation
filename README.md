This project is a simple React form application that demonstrates CRUD (Create, Read, Update, Delete) operations, storing data in the browser's local storage. It uses react-hook-form for form validation and management.

Features
Create: Add new users with fields like Username, Email, and Mobile.
Read: Display all users in a table format.
Update: Edit an existing user's information.
Delete: Remove a user from the list.
Local Storage: User data is saved to and loaded from local storage, preserving data even after the page is refreshed.
Dependencies
react-hook-form: For form handling and validation.
Project Structure
Form Component: Contains the form to input user details and a table to display the list of users.
Key Files
Form.js: The main component containing form and table display logic.
App.js: Entry point to render the Form component.
Code Explanation
State Management
users: Stores the list of users in an array.
EditIndex: Tracks the index of the user being edited.
CRUD Operations
Create/Submit:

Adds a new user to the users array.
Validates inputs with react-hook-form.
Update:

Sets the selected user's data back into the form for editing.
Updates the user in the users array once edited.
Delete:

Removes a user by filtering out the selected index.
Clears local storage if the first user is deleted.
Local Storage:

Data is saved to local storage whenever there’s a change in users.
Loads initial data from local storage on component mount.


Form Validation
Username: Required, 3-15 characters, only letters.
Email: Required, 10-25 characters, only letters.
Mobile: Required, exactly 10 digits.
Customization
You can modify the validation rules, styles, or add new fields in Form.js based on your requirements.