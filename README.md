# Tenx Documentation

This repository contains the documentation for the Tenx Platform, built using [MkDocs](https://www.mkdocs.org/).

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Documentation Locally](#running-the-documentation-locally)
- [Building the Documentation Site](#building-the-documentation-site)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

---

## Getting Started

These instructions will help you set up and run the documentation site locally.

### Prerequisites

- [Python 3.6+](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/installation/)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/tenx-documentation.git
   cd tenx-documentation
   ```

2. **Install MkDocs:**
   ```sh
   pip install mkdocs
   ```

   Optionally, for the Material theme:
   ```sh
   pip install mkdocs-material
   ```

## Running the Documentation Locally

Start the live-reloading development server:
```sh
mkdocs serve
```
Then open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser to view the docs.

## Building the Documentation Site

To generate a static site in the `site/` directory:
```sh
mkdocs build
```

## Project Structure

```
tenx-documentation/
│   mkdocs.yml         # MkDocs configuration file
│   README.md          # Project readme
└───docs/
    │   index.md       # Documentation homepage
    │   _AI-Assisted Assignments.md
    │   Account Management.md
    │   Analytics & Reporting.md
    │   API Documentation.md
    │   Career Exploration.md
    │   Certification and Portfolio.md
    │   Content & Learning Design.md
    │   Contribution Guidelines.md
    │   Grading & Assessment.md
    │   Initial Skill Assessment.md
    │   LEAP Navigation.md
    │   Navigating Your Dashboard.md
    │   Personalized Learning Journey.md
    │   Platform Overview_ Introduction, Purpose, and Benefits of Tenx.md
    │   ... (other markdown files)
```

## Contributing

Please see docs/Contribution Guidelines.md for instructions on how to contribute.

---

For more information, visit the [MkDocs documentation](https://www.mkdocs.org/).
