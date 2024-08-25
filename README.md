#Resilient Email Sending Service - TypeScript/JavaScript

Objective: Develop a resilient email sending service in TypeScript/JavaScript that utilizes two mock email providers and includes retry logic with exponential backoff, a fallback mechanism, idempotency, rate limiting, and status tracking. The service should be designed with clean code principles, focusing on maintainability and testability.

Key Requirements:

EmailService Class: Create a service that interacts with two mock email providers to send emails.
Retry Logic: Implement a retry mechanism with exponential backoff to handle temporary failures.
Fallback Mechanism: Switch between email providers when one fails to ensure delivery.
Idempotency: Ensure that duplicate emails are not sent when retrying.
Rate Limiting: Implement basic rate limiting to control the number of emails sent within a time period.
Status Tracking: Track the status of each email sending attempt for monitoring and debugging.
Bonus Features:

Circuit Breaker Pattern: Prevent further attempts to send emails when a provider consistently fails.
Simple Logging: Log all actions, errors, and statuses for better debugging and transparency.
Basic Queue System: Handle email sending requests in a queue to manage load and processing efficiently.
Development Guidelines:

Use TypeScript/JavaScript.
Minimize reliance on external libraries.
Write documentation and unit tests.
Follow SOLID principles and maintain clean code.
Deliverables:

Source Code: Well-structured and documented TypeScript/JavaScript code.
README: Setup instructions, design choices, assumptions, and usage examples.
Unit Tests: Coverage for all major features and edge cases.
Screencast: A video explanation of the code, showcasing how it works and demonstrating key features.
Deployed API: A cloud-deployed version of the email sending API endpoint.
Evaluation Criteria:

Code quality and organization.
Accurate implementation of the required features.
Robust error handling and consideration of edge cases.
Testability of the service.
Clarity and completeness of the documentation.
Completion Deadline: The project should be completed within 3 days from the date of receiving this assignment.
