---
hide:
  - navigation
---

# Get started with Tenx

<style>
/* ===== Responsive Layout Styling ===== */

.responsive-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 60vw;
  margin-left: 0;
  background-color: #F7F7F7;
  font-size: 0.75rem;
  padding: 0;
}

.responsive-row {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  gap: 2%;
}

.responsive-box {
  background-color: white;
  min-height: 250px;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.responsive-box h3 {
  margin-top: 0.5rem;
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.responsive-box ul {
  margin-top: 0.5rem;
}

.responsive-box a {
  color: #FA4C07;
  text-decoration: none;
}

.responsive-box a:hover {
  text-decoration: underline;
}

/* Box Widths */
.responsive-wide { width: 60%; }
.responsive-third { width: 33%; }

/* ===== Mobile View ===== */
@media (max-width: 768px) {
  .responsive-container {
    width: 95vw;
  }
  .responsive-row {
    flex-direction: column;
  }
  .responsive-box,
  .responsive-wide,
  .responsive-third {
    width: 100% !important;
  }
}
</style>

<div class="responsive-container">

  <!-- First Row -->
  <div class="responsive-row">

    <div class="responsive-box responsive-wide">
      <img src="assets/icons/welcome.png" style="height: 20px; width: 20px;">
      <h3> Welcome to Tenx</h3>
      <ul>
        <li><a href="Platform Overview_ Introduction, Purpose, and Benefits of Tenx">Platform Overview</a></li>
        <li><a href="https://drive.google.com/file/d/1w7JWu3rjptBFgJ-DDKfSZow4d1Hyl7XK/view?usp=drive_link" target="_blank">Introductory Video About Tenx</a></li>
        <li><a href="demo">Demo Guide</a></li>
      </ul>
    </div>

    <div class="responsive-box responsive-third">
      <img src="assets/icons/quick start.png" style="height: 20px; width: 20px;">
      <h3> Quick Start Guides</h3>
      <ul>
        <li><a href="Account Management">Account Management</a></li>
        <li><a href="Trainee Quick Guide">Trainee Quick Guide</a></li>
        <li><a href="Staff_Admin Quick Guide">Staff/Admin Quick Guide</a></li>
      </ul>
    </div>

    <div class="responsive-box responsive-third">

   <img src="assets/icons/more.png" style="height:7px; width: 20px;">
      <h3> More</h3>
      <ul>
        <li><a href="Browse All Features">Browse Tenx Features</a></li>
        <li><a href="whats-new">What’s New</a></li>
      </ul>
    </div>

  </div>

  <!-- Second Row -->
  <div class="responsive-row">

    <div class="responsive-box responsive-third">
      <img src="assets/icons/trainees.png" style="height: 20px; width: 20px;">
      <h3> For Trainees</h3>
      <ul>
        <li><a href="Initial Skill Assessment">Initial Skill Assessment</a></li>
        <li><a href="Navigating Your Dashboard">Navigating Your Dashboard</a></li>
        <li><a href="Personalized Learning Journey">Personalised Learning Journey</a></li>
        <li><a href="_AI-Assisted Assignments">AI Assisted Assignment</a></li>
        <li><a href="LEAP Navigation">Job Readiness & Matching</a></li>
        <li><a href="Certification and Portfolio">Certification and Portfolio</a></li>
        <li><a href="Career Exploration">Career Exploration</a></li>
      </ul>
    </div>

    <div class="responsive-box responsive-third">
      <img src="assets/icons/staff.png" style="height: 20px; width: 18px;">
      <h3> For Staff & Administrators</h3>
      <ul>
        <li><a href="Site & Program Management">Site & Program Management</a></li>
        <li><a href="Content & Learning Design">Content & Learning Design</a></li>
        <li><a href="Trainee Management & Support">Trainee Management & Support</a></li>
        <li><a href="Grading & Assessment">Grading & Assessment</a></li>
        <li><a href="Analytics & Reporting">Analytics and Reporting</a></li>
      </ul>
    </div>

    <div class="responsive-box responsive-third">
     <img src="assets/icons/developers.png" style="height: 20px; width: 20px;">
      <h3> For Developers & Technical Users</h3>
      <ul>
        <li><a href="tenx Architecture">Tenx Architecture Overview</a></li>
        <li><a href="API Documentation">API Documentation</a></li>
        <li><a href="Contribution Guidelines">Contribution Guidelines</a></li>
        <li><a href="Security Guidelines">Security Guidelines</a></li>
        <li><a href="System Integration Guidelines">System Integration Guidelines</a></li>
      </ul>
    </div>

  </div>

</div>
