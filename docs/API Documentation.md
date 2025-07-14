---
hide:
  - navigation
---

This page provides API documentation for 10Academy’s tools, including Parrot, Trainee Information Processor, Career Simulator, Auto Grader, and Eagle. Please visit each of these links to view the full documentation.

## Job Recommender

### Leap (Job-Matching)

AI platform that matches trainees to jobs and builds tailored CVs. Automated pipeline that transforms structured data into professional CVs and certificates.

Key Features

- AI-driven job-matching using trainee profiles and preferences
- Automated competency-matching algorithm with SFIA skill validation
- Customizable CV and cover-letter templates
- Advanced filters: experience level, company, location/remote, employment type
- Real-time leaderboard & analytics dashboard for job-search, interview, and skill metrics
- Interactive AI chat that pulls and presents trainee profiles on demand
- Customizable CV & cover-letter templates with section-order API
- Branded certificate generation

**API Reference** - [https://dev-frog.10academy.org/redoc](https://dev-frog.10academy.org/redoc)

---

## Trainee Information Processor

Secure data management for trainee profiles and administrative workflows.

Key Features

- Structured data intake and processing APIs
- Secure batch-insertion and update mechanisms
- Automated report generation and email notifications for administrators

**API Reference** - [https://user-management.10academy.org/redoc](https://user-management.10academy.org/redoc)

---

## Career Simulator

Interactive 3-D career cloud to visualize job–skill fit and guide learning paths.

Key Features

- 3-D “career cloud” mapping jobs to required skills
- 21-dimensional vector analysis for skill-gap insights
- Personalized learning-path wizard with LinkedIn job integration

**API Reference** - [https://wizard.10academy.org/redoc](https://wizard.10academy.org/redoc)

---

## Auto Grader

Provider-agnostic autograding engine for diverse submission types.

Key Features

- LLM-based grading for code, essays, and form submissions
- Streaming feedback and plagiarism detection
- Standardized result schema for easy integration
- Simplified core architecture for maintainability

**API Reference** - [https://autograde.10academy.org/redoc\#tag/autograde-endpoint/operation/validate_link_grade_validate_link_post](https://autograde.10academy.org/redoc#tag/autograde-endpoint/operation/validate_link_grade_validate_link_post)

---

## Eagle
Centralized monitoring system tracking engagement and performance metrics.

Key Features

- Engagement database with weekly scoring logic
- Single Kedro pipeline for data ingestion & processing
- LLM-generated configuration files for dynamic alerts
- Data Formulator for custom report visualization


**API Reference** - [https://eagle.10academy.org/redoc](https://eagle.10academy.org/redoc)

---

## Parrot (Interview Persona)

Mock-interview platform offering multi-modal practice and analytics.

Key Features

- Text, audio, and video interview simulations with structured feedback
- Real-interview upload and AI-driven analysis
- Peer-learning modes and admin analytics dashboard


- [https://dev-frog-ipersona.10academy.org/api/redoc](https://dev-frog-ipersona.10academy.org/api/redoc)

---

[image1]: data:image/png;base64,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
