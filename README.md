# -A-very-long-repo-name-A-very-long-repoA-very-long-repo-name

## Description

A Node.js server built with Express.js framework featuring multiple API endpoints. This tutorial project demonstrates how to integrate Express.js into a Node.js application and create RESTful endpoints with clean routing patterns.

## Features

- Express.js v4.18.2 integration for robust web server functionality
- Multiple GET endpoints demonstrating Express routing
- Environment-based configuration for flexible deployment
- Clean, tutorial-friendly code structure for learning

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** >= 18.0.0 (Current version: v20.19.5 recommended)
- **npm** >= 6.0.0 (Comes bundled with Node.js)

You can verify your installations by running:
```bash
node --version
npm --version
```

## Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd -A-very-long-repo-name-A-very-long-repoA-very-long-repo-name
```

2. Install dependencies:
```bash
npm install
```

This will install Express.js and all required dependencies as specified in `package.json`.

## Usage

### Starting the Server

To start the server in production mode:
```bash
npm start
```

Or run directly with Node.js:
```bash
node server.js
```

The server will start and display:
```
Server is running on http://localhost:3000
Available endpoints:
  - GET http://localhost:3000/
  - GET http://localhost:3000/evening
```

### Stopping the Server

To stop the server, press `Ctrl+C` in the terminal where the server is running.

### Environment Configuration

You can configure the server port using the `PORT` environment variable:

```bash
PORT=8080 npm start
```

Or create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
# Edit .env to set your preferred PORT
```

## API Endpoints

The server provides the following endpoints:

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| GET | `/` | Root endpoint | Returns "Hello world" as plain text |
| GET | `/evening` | Evening greeting endpoint | Returns "Good evening" as plain text |

### Example Requests

#### Test the "Hello world" endpoint:
```bash
curl http://localhost:3000/
```

**Expected Response:**
```
Hello world
```

#### Test the "Good evening" endpoint:
```bash
curl http://localhost:3000/evening
```

**Expected Response:**
```
Good evening
```

#### Test with a browser:
- Open your browser and navigate to `http://localhost:3000/` to see "Hello world"
- Navigate to `http://localhost:3000/evening` to see "Good evening"

## Development

For development with automatic server restart on file changes, you can use nodemon:

1. Install nodemon as a dev dependency:
```bash
npm install --save-dev nodemon
```

2. Start the development server:
```bash
npm run dev
```

## Project Structure

```
.
├── server.js           # Main Express.js server application
├── package.json        # Node.js project manifest and dependencies
├── package-lock.json   # Locked dependency versions
├── .gitignore         # Git ignore patterns
├── .env.example       # Environment variable template
└── README.md          # This file
```

## Troubleshooting

### Port Already in Use

If you see an error like "Port 3000 is already in use":

1. Change the port by setting the PORT environment variable:
```bash
PORT=3001 npm start
```

2. Or find and kill the process using port 3000:
```bash
# On Unix/Linux/macOS
lsof -ti:3000 | xargs kill -9

# On Windows
netstat -ano | findstr :3000
taskkill /PID <process_id> /F
```

### Express Not Found

If you see "Cannot find module 'express'":

1. Make sure you've run `npm install` in the project directory
2. Verify that `node_modules/express` directory exists
3. Check that `package.json` includes express in dependencies

### Permission Denied

If you get permission errors when trying to use port 80 or 443:

- Use a port number >= 1024 (like 3000) which doesn't require elevated permissions
- Or run with sudo (not recommended for development)

## License

MIT

## Notes

**This is a tutorial/learning project.** For production use, consider adding:

- Proper error handling and logging (Winston, Morgan)
- Security middleware (Helmet, CORS)
- Input validation and sanitization
- Authentication and authorization
- Database integration
- Comprehensive testing
- Process management (PM2)
- Environment-specific configurations