# Travlr Getaways Full Stack Application

## Architecture
In this project, I used both Express-based frontend development and a single-page application (SPA) approach. The Express frontend relied on HTML templates rendered with Handlebars, which allowed me to build dynamic pages using server-side data. This approach reloads the page when new content is requested. In contrast, the SPA built with Angular provides a more modern experience by updating content dynamically without reloading the entire page.

The backend used a NoSQL MongoDB database because it works well with JavaScript applications and stores data in a flexible JSON-like format.

## Functionality
JSON is a lightweight data format used to transfer data, while JavaScript is a programming language. JSON connects the frontend and backend by allowing structured data to be sent between them.

During development, I refactored code by separating routes, controllers, and models to improve organization. Reusable UI components helped reduce duplication and made updates easier.

## Testing
Different HTTP methods such as GET, POST, PUT, and DELETE are used to interact with API endpoints. Testing ensures each endpoint works correctly.

Adding authentication with JWT tokens made testing more complex because protected routes require authorization before access is granted.

## Reflection
This course helped me move closer to my goal of becoming a software engineer by giving me hands-on experience building a full stack application.

I learned how to connect frontend and backend systems, work with databases, and implement authentication. I also improved my debugging and problem-solving skills, making me more confident in building real-world applications.