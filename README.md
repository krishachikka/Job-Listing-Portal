# JobListing

## Description

JobListing is a web application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js) designed to facilitate job search and listing. The platform allows users to browse job listings, apply for positions, and manage their applications. Employers can post job openings, review applications, and manage their listings.

## Features

- **User Authentication**: Secure user registration and login system.
- **Job Listings**: Browse and search job listings with various filters.
- **Application Management**: Apply for jobs and track application status.
- **Recruiter Dashboard**: Post job openings and manage applications.
- **Responsive Design**: Mobile-friendly layout and design.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or a cloud instance)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/JobListing.git
   ```

2. Navigate to the `server` directory:

   ```bash
   cd JobListing/server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the `server` directory and configure the following environment variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. Start the server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `client` directory:

   ```bash
   cd ../client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

The application will be running at `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

## Usage

- **User**: Register, log in, browse job listings, and apply for jobs.
- **Recruiter**: Post new job listings, manage applications, and review candidates.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
