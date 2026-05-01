<a href="javascript:history.back()" class="back-link">← Back</a>

# Apps

The Tenx platform is delivered as a set of focused apps that work together
across the trainee lifecycle. This page lists every component, its
responsibility, and the key functionality it provides.

---

## Tenx Learning Apps

Apps that power the **Tenx Learning** training platform.

### Tenx App (Tenx Learning Frontend)

**Description.** The user-facing web application for trainees and staff on the
training platform. The single interface where trainees consume content and
submit work, and where staff author content and run grading.

**Key functionality.**

- React-based learning platform for trainees and staff
- Single sign-on with the rest of the Tenx ecosystem (Apply, Leap)
- Trainee surfaces: home, leaderboard, modules, assignments, profile, peer grading
- Staff surfaces: cohort dashboard, content authoring, grading, trainee management
- Hosts the entry points for every other Tenx Learning app (Smart Grader, Rubric Generator, Trainee Information Processor, json2pdf, Insight Management)

---

### Smart Grader

**Description.** The automated grading engine. Smart Grader evaluates trainee
submissions against rubric criteria, produces per-criterion scores and
qualitative feedback, and feeds results back into the assignment view.

**Key functionality.**

- Automatic scoring of trainee submissions against attached rubrics
- Per-criterion progress bars and numeric scores
- Qualitative feedback generation per rubric criterion
- AI-assisted review with regrade workflow and audit trail
- Powers the Submission Detail and Feedback panels in the staff grading screen

---

### Auto-Rubric Generator

**Description.** The AI-assisted rubric authoring service. Lets staff create
grading criteria fast — either fully AI-generated, or AI-assisted from a
challenge document or prompt template.

**Key functionality.**

- Generates structured rubrics from a brief or challenge document
- Three creation modes: Smart Rubrics (AI-assisted), Rubrics with AI (auto-generated), Manual Rubrics
- Edits and regeneration with refined prompts
- JSON import/export for advanced customisation
- Feeds rubrics into the Assignment package

---

### Trainee Information Processor

**Description.** The trainee/user-management service. Handles trainee
registration, batch onboarding, profile data, environment-aware secret
management, and webhook callbacks for batch processing.

**Key functionality.**

- Single-trainee creation with email confirmation flow
- Bulk CSV import with preview, validation, and chunked processing
- Multi-environment configuration support
- Webhook callback handling for batch completion events
- Trainee list management with filters, search, and CSV export

---

### json2pdf

**Description.** The PDF generation service. Renders structured JSON profiles
into polished PDFs — used for trainee resumes, certificates, and other
trainee-facing documents.

**Key functionality.**

- JSON → Jinja2 → LaTeX → PDF rendering pipeline
- Multiple visual templates for resumes and certificates
- Powers the *Download Profile* and *Generate Resume* actions on the trainee profile
- LaTeX injection-safe input handling
- Supports trainee-side (self-service) and staff-side (bulk) generation

---

### Insight Management

**Description.** The engagement and performance analytics layer for Tenx
Learning. Aggregates trainee activity into the dashboards and leaderboards
staff use to monitor cohorts.

**Key functionality.**

- Cohort-level performance metrics (grades, attendance, participation, submissions)
- Per-trainee performance trends and weekly progress indicators
- Powers the Home dashboard's Trainee Data Table and Performance Metrics
- Leaderboard rankings per topic with current and cumulative scores
- Competency tracking with SFIA levels for each trainee

---

## Leap Apps

Apps that power the **Leap** career-readiness platform.

### Leap Frontend

**Description.** The user-facing web application that trainees and staff
interact with. Provides the unified interface for all Leap workflows: profile
building, job browsing, interview preparation, and career coaching.

**Key functionality.**

- React-based career platform for trainees and staff
- Single sign-on with the rest of the Tenx ecosystem (Apply, Tenx Learning)
- Surfaces personalised dashboards, job feeds, application tracking, and coaching tools
- Hosts the entry points for every other Leap app (Frog, CSS, Parrot, Eagle)

---

### Frog — Job Recommendation Engine

**Description.** The intelligent job-matching engine. Frog analyses each
trainee's competencies, preferences, and career goals to recommend the most
relevant job opportunities, using vector-based matching for personalised
results.

**Key functionality.**

- Personalised job recommendations per trainee
- Profile + preference vector matching
- Filters by sector, role, level, and location
- Feeds the trainee Job Feed in the Leap Frontend
- Re-ranks suggestions as the trainee's profile evolves

---

### Career Scenario Simulator (CSS)

**Description.** An interactive coaching and practice environment. CSS
provides scenario-based exercises so trainees can rehearse professional
situations and receive competency-based feedback before facing them in the
real world.

**Key functionality.**

- Interactive coaching scenarios for soft and technical skills
- Competency-based, automated feedback after each scenario
- Personalised difficulty progression
- Used as part of interview preparation flows
- Tracks practice history per trainee

---

### Parrot (iPersona) — CV Analysis & Enhancement

**Description.** The AI-powered CV analysis service. Parrot reads uploaded
CVs, extracts competencies, and maps the trainee's experience to job
requirements — surfacing strengths and gaps and suggesting concrete
improvements.

**Key functionality.**

- AI extraction of competencies from CV text
- Gap analysis vs. target roles or job listings
- Suggestions for stronger phrasing and structure
- Feeds extracted competencies back into the trainee's profile
- Inputs to Frog's recommendation engine

---

### Eagle — Engagement Monitoring & Notifications

**Description.** The engagement layer of Leap. Eagle observes how trainees
interact with career services, identifies inactivity, and sends targeted
notifications to keep job seekers engaged in their search and professional
development.

**Key functionality.**

- Tracks trainee engagement signals (logins, jobs viewed, applications sent)
- Detects disengagement and triggers nudges
- Sends notifications via email and in-app channels
- Flags candidates who need outreach to the staff dashboard
- Closes the feedback loop with the rest of the Leap apps

---

## Management Dashboard Apps

Apps that power the **Management Dashboard** for organization administrators.

### Dashboard Frontend

**Description.** The web interface used by Program Managers and Operations
staff to oversee the Tenx ecosystem. Provides a unified surface for managing
programs, cohorts, services, and cross-platform reporting.

**Key functionality.**

- React-based administrative UI
- Single sign-on with the rest of the Tenx ecosystem
- Hosts the entry points for Program Management, Cohort Management, Service Oversight, and Reporting
- Surfaces real-time operational metrics

---

### Dashboard Backend

**Description.** The API and data layer that powers the dashboard. Aggregates
operational data from Apply, Tenx Learning, and Leap so administrators can
manage programs end-to-end from a single place.

**Key functionality.**

- Centralised API for program, cohort, and service operations
- Data aggregation across platforms (Apply, Tenx Learning, Leap)
- Authentication and role-based access control for organization staff
- Cross-platform reporting and analytics endpoints
- Service health checks and operational telemetry

---

### Program Management Module

**Description.** The component that lets administrators create and configure
training programs.

**Key functionality.**

- Create new training programs
- Customize program parameters (timeline, participant structure, curriculum links)
- Edit and archive programs
- Link a program to its cohorts on Tenx Learning

---

### Cohort Management Module

**Description.** The component for running multiple cohorts simultaneously
and handling cohort-specific configurations.

**Key functionality.**

- View all active cohorts at a glance
- Track cohort progress and key metrics
- Manage cohort-specific settings across the Apply / Tenx Learning / Leap services
- Trigger cohort lifecycle events (open, close, archive)

---

### Service Oversight Module

**Description.** The operational monitoring layer of the dashboard. Surfaces
the health and status of every Tenx Platform service.

**Key functionality.**

- Health status of every Tenx Platform service
- Operational metrics (latency, error rate, throughput)
- Issue identification across the ecosystem
- Drill-in views per service

---

### Cross-Platform Reporting Module

**Description.** The analytics layer that produces reports spanning the full
trainee lifecycle.

**Key functionality.**

- Reports across Apply, Tenx Learning, and Leap
- Application metrics, training performance, career placement outcomes
- Configurable report templates
- CSV / report export

---

## Shared Apps

Cross-platform utilities that serve more than one platform.

### Content Extractor

**Description.** Processes and extracts structured content from documents,
code submissions, and external platforms. Powers content workflows across
Tenx Learning and Apply.

**Key functionality.**

- Document and code extraction from submissions
- Submission parsing and content normalisation
- Integration with content management and storage systems
- Used by both Tenx Learning (assignments) and Apply (application materials)

---

### Documentation

**Description.** The central knowledge base for the entire Tenx Platform.
Provides guides, platform descriptions, and reference material for trainees,
staff, and administrators.

**Key functionality.**

- Unified documentation site for every platform
- Built with MkDocs and the Material theme
- Hosts user guides for Apply, Tenx Learning, Leap, and the Management Dashboard
- Searchable across all platforms

---

### Official Website

**Description.** The public-facing site that presents the organization's
mission, programs, and value to prospective trainees, partners, and the
broader community.

**Key functionality.**

- Program information and application entry points
- Organization mission and impact stories
- Public content and resources

---

### Auto Content Generator *(in development)*

**Description.** An AI-assisted content creation and optimization tool. Aims
to automate and improve content production across training materials,
assessments, and public communications.

**Key functionality.**

- AI-assisted authoring of training materials, assessments, and communications
- Content optimisation suggestions
- Workflow integration with Tenx Learning and Apply

> **Status** — In development.

---

## Summary

| Category | App |
|---|---|
| **Tenx Learning** | Tenx App (Frontend), Smart Grader, Auto-Rubric Generator, Trainee Information Processor, json2pdf, Insight Management |
| **Leap** | Leap Frontend, Frog, Career Scenario Simulator (CSS), Parrot (iPersona), Eagle |
| **Management Dashboard** | Dashboard Frontend, Dashboard Backend, Program Management, Cohort Management, Service Oversight, Cross-Platform Reporting |
| **Shared** | Content Extractor, Documentation, Official Website, Auto Content Generator *(in development)* |
