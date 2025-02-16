# Task Manager

Task Manager is a web-based application designed to help users efficiently manage their tasks. It is built using Next.js and styled with Tailwind CSS for a responsive and user-friendly experience.

## Technologies Used

-Frontend: Next.js (React Framework) with TSX
-Styling: Tailwind CSS
-Programming Language: TypeScript
## Features 
-Ability to create, edit, view details and delete tasks.
-Ability to filter tasks according to their name, date of creation.
-Ability to view and hide columns from the outcome data.
-Ability to switch from dark to light mode.
-Ability to have desired number of tasks in a single page.

## Installation and Setup

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (Latest stable version recommended)
- npm (Comes with Node.js)

### Steps to Run Locally

1. Clone the Repository

   Open a terminal and run:

   ```bash
   git clone https://github.com/andrewelalfy57/Task_Manager.git
   cd Task_Manager
   ```

2. Install Dependencies

   Run the following command to install all required dependencies:
   npm install
3. Modify environment variables
    
    modify the .env file in the root having the following 
    mongodb+srv://user:<db_password>@andrew.sxbpg.mongodb.net/
    PORT= 8000
    replace the user with your MongoDb user name and <db_password> with your password 

4. Start the backend Server

   Run the application's backend :

   ```bash
    npx ts-node src/app.ts    ```

   The application should now be accessible at:

   [http://localhost:8000](http://localhost:8000)

5-Run the applications frontend :
 ```bash
        npm run build 
        npm start
 ```

## Notes

- Ensure that all dependencies are installed properly before running the project.
- If there are any missing environment variables, check for a `.env.example` file or documentation in the repository.

