# AI Project Generator

A full-stack application that generates project foundations based on AI prompts.

## Features
- **Backend**: Spring Boot 3.2.3, Java 17, JPA, MySQL.
- **Frontend**: React, Vite, Axios, Premium CSS.
- **AI Integration**: (In progress)

## Project Structure
- `backend/`: Spring Boot server and JPA models.
- `frontend/`: React + Vite application with Axios services.

## Setup
### Backend
1. Ensure MySQL is running.
2. Configuration is in `backend/src/main/resources/application.properties`.
3. Run with `mvn spring-boot:run`.

### Frontend
1. Navigate to `frontend/`.
2. Run `npm install`.
3. Run `npm run dev`.

## API Endpoints
- `POST /api/projects/generate`: Generates a project foundation from a string prompt.
