---
hide:
  - navigation
---


### **Admin / Super-Admin**

---

## **0 | Executive Summary**

Site & Program Management in Tenx stitches together **Apply**, **Learn**, and **Leap** so you can turn a brand-new initiative into a fully running, data-driven program.  
 Super-Admins control the high-level levers—program creation, cohort lifecycle, roles, infrastructure—while Staff operate day-to-day activities such as building forms, sending emails, and reviewing applicant data.  
 This manual walks you through every stage: *planning ➜ launch ➜ daily operations ➜ scale ➜ wrap-up & archive.*

---

## **1 | Core Concepts & Data Objects**

| Object | What it means | Why it matters |
| ----- | ----- | ----- |
| **Program** | A top-level container (e.g. “Gen-AI Bootcamp 2025”) | Governs branding, default roles, KPIs |
| **Cohort** | A dated instance of a Program (e.g. “Batch A — Mar 2025”) | Holds users, forms, quizzes, notifications |
| **Role** | Permission bundle (Staff, Reviewer, Mentor, etc.) | Drives UI visibility & API access |
| **Form** | Any data-capture interface: application, survey, review | Can be public or invite-only, time-bound |
| **Quiz / Mock** | Auto-graded question set tied to a cohort | Supports adaptive testing & CV insights |
| **Notification Rule** | Email or in-app alert triggered by an event | Keeps everyone in sync |
| **Operation Mode** | *Dense* vs *Sparse*, *Day* vs *Night* resource profiles | Optimises compute cost |
| **Infrastructure Stack** | Kubernetes namespace \+ DB instance \+ CDN bucket | One per Program by default |

---

## **2 | Feature Map (What you can do)**

### **Public-Facing**

* **Registration Portal** – email/password account creation

* **Public Forms** – multi-step applications, surveys, feedback

* **CV-Upload with Instant Insight** – résumé parsed & scored in seconds

### **Authenticated – Super-Admin**

* Create / edit / archive **Programs** and **Cohorts**

* Launch or scale **infrastructure stacks** (one-click K8s namespace)

* Define / edit unlimited **Roles & Permissions**

* Global **System Control** panel: load monitor, cost dashboard, mode switch

* Add extra **email domains** for system campaigns

### **Authenticated – Staff**

* **Form Builder**: duplicate, preview, schedule open/close windows

* **Quiz & Question-Bank** management (tag, label, stats)

* **Bulk Email** composer with delivery report download

* **Applicant 360°** view: aggregated submissions \+ CV analysis

* **Cohort & Notification Preferences** per staff member

* CSV/Excel **Table Export** for offline analysis

---

## **3 | Role & Permission Matrix**

| Capability | Super-Admin | Staff | Applicant |
| ----- | ----- | ----- | ----- |
| Create Program | ✅ | ❌ | ❌ |
| Edit Cohort Dates | ✅ | ✅ | ❌ |
| Build / Publish Form | ✅ | ✅ | ❌ |
| Launch Infra Stack | ✅ | ❌ | ❌ |
| View All Applicant Data | ✅ | ✅ | Own only |
| Download Bulk Table Data | ✅ | ✅ | ❌ |
| Manage Roles | ✅ | ❌ | ❌ |
| Switch Operation Mode | ✅ | ❌ | ❌ |

*(Screenshot 01 – “Role Permissions Grid” placeholder)*

---

## **4 | First-Time Setup (Step-by-Step)**

1. **Create a Program**

   * **Dashboard ► Programs ► \+New**

   * Fill branding fields; choose default colour scheme.

   * *(Screenshot 02 – Program wizard)*

2. **Spin-up Infrastructure**

   * System prompts: *“Launch stack now?”* → **Launch**.

   * Takes \~4 min; status turns green.

3. **Add Roles (optional)**

   * **Settings ► Roles** → Duplicate “Staff” → name it “Reviewer” → remove ‘bulk\_email’ permission.

4. **Create First Cohort**

   * **Programs ► Your Program ► Cohorts ► \+New**

   * Start/End dates, timezone, auto-archive toggle.

5. **Invite Staff**

   * **Users ► Bulk Import** → upload CSV (email, role, cohort).

   * Verify invitation email delivery (Email ► Sent).

6. **Publish Registration Form**

   * **Forms ► \+New** → use “Standard Application” template.

   * Set open/close dates; toggle *Public*; enable CAPTCHA.

7. **Test Public Flow**

   * Open incognito browser, register, submit demo form.

   * Staff views submission under **Forms ► Submissions**.

8. **Schedule Nightly Backup**

   * **Settings ► Ops ► Backups** → 02:00 UTC, 7-day retention.

---

## **5 | Daily & Weekly Operations (Staff)**

| Frequency | Task | Where |
| ----- | ----- | ----- |
| Daily AM | Check **Dashboard** for new submissions & CV-insight flags | Dashboard |
| Daily PM | Respond to “Issues” tickets from applicants | Apply ► Issues |
| Monday | Download previous week’s table data → send to BI | Forms ► ⋯ |
| Wednesday | Review “Question Bank Stats” to retire low-value questions | Quizzes ► Bank |
| Friday | Bulk email “application-status update” | Email ► Campaigns |

*(Screenshot 03 – Staff dashboard heat-map placeholder)*

---

## **6 | Advanced Configuration**

### **6.1 Form Automations**

* Add **Decision Rules**: auto-label as *Shortlist* if score \> 85 % AND GPA ≥ 3.2.

* **Decision Validation**: require dual-approval for “Reject”.

### **6.2 Notification Rules**

* New submission → Slack \#apply-alerts (Staff)

* Operation-mode change → Email Ops Team

### **6.3 Operation Modes**

| Mode | CPU / DB Pool | Typical Use |
| ----- | ----- | ----- |
| **Dense-Day** | 4× | Launch week, heavy traffic |
| **Sparse-Night** | 0.5× | 00:00–06:00 quiet hours |
| Switch under **Ops ► Modes** or schedule automatic pattern. |  |  |

### **6.4 Cost Monitoring**

* Real-time graph of compute-hours & email sends.

* Set **Budget Alert** (e.g. 80 % of monthly limit).  
   *(Screenshot 04 – Cost Monitor)*

---

## **7 | Security & Compliance Notes**

* All public uploads (CVs) scanned for malware; stored in private S3 bucket.

* Role changes logged in immutable audit trail for 24 months.

* Applicants can file **Data-Deletion Request Form** (GDPR / POPIA).

* Bulk-email uses dedicated sub-domain with SPF/DKIM.

---

## **8 | Maintenance & Backup**

| Task | Owner | Cadence |
| ----- | ----- | ----- |
| Backup validation restore test | Dev-Ops | Quarterly |
| Dormant applicant purge (\>120 days) | Staff | Monthly |
| Cost dashboard calibration | Super-Admin | Monthly |
| Role audit | Super-Admin | Bi-Annually |

---

## **9 | Troubleshooting FAQ**

| \# | Problem | Likely Cause | Fix |
| ----- | ----- | ----- | ----- |
| 1 | Public can’t see registration form | Form not “Public” or outside date range | Edit form → Visibility |
| 2 | Staff bulk email shows 0 delivered | New domain lacks SPF | Add SPF / wait DNS TTL |
| 3 | CV insight returns blank | Parsing queue backlog | Ops ► Runners → Scale to 2x |
| 4 | Cohort list empty for staff | Role missing read\_cohort | Update role permissions |
| 5 | Cost spike overnight | Mode stuck in Dense-Night | Set schedule; review cron |

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABFCAYAAAC/iY+qAAAE30lEQVR4Xu2XPW9eRRCFXVAQhIQo80FNEJ2dBlFgUaQHZISQv5r4FyB6aqgRHT2ipOEfBERPAzRYFFFskigoARKHu9bdaHnuzO7e9/OudR7pSPHM2dnNnRNCNjaEEEIIIYQQTXFy9cazRYrzhRjA0MwrzhdiAEMzjzhbCBMGZ1ZxrhAuDM8s4kwhsjBAY8V5QhRhiMaIs4SogkGqFecIUQ3DVCPOEGIUDFRJPC/EaBiqnHhWiJlgsDzxnBAzw3BZ4hmxZg4PD5teCgNG0S/WTOuBCzBkSwschy9SvOuichEC9/vGtUvc38L3yMHLEO+s5eDg4GZYZBT7Fp3vxTFnujt+G+MPdGee0F9zNr2nm/ET+ym973ry68H7vHrK2N6vr269wv3Ns8MBHLws8d4S/JBxyamHxDOd99/d3d3X4887Ozsv0xvgHfzZIno63enuOerv+7z2nPcz6fvXk/t+Ts/0vz7u9DQ3K9S79/1g1b0zdy9vfjvv/lw4eJni3WPJfaT9/f1vrF5/5jbrHrk7vJ5Xj3h9rx7welbdqkW8nlVLObmy9XCRu3sOQ7Fs8f4xeB8vkOuNITen1GMtMkvPu6uv/2jVWYtYPatGTq7ceLKIvf0PBmIV4hs84ken6At49RzdmducPesdXq/76+xTzqZ4JuD1rFrAqwc4q//549TjMXZnRRiGVYnvINYH5IdLCfVuuQ9Z99je3n7BmlW6I/y/IesB78zR0dFLXi+H9w6rFvDqkbRf8pKafVXDIKxSfEsk97GteiDXs/D8Xj1Q6rEWyfU8vLusWsCrR0K/+wP5YadPSt6lwhCsWnxPxPoo3hIiVt+q9fVfnLrpj4Ret7Qz1kpnrH4/6wPWA7kzrAW8eqT7R9VX3syVwgCsQ3xTIH6cVLFObwrP5Pz01dyxt7f3jncmd45ngrqwHdMX8eZZtYBXT/FmrhQuf13iu8TiUeAgvk0slrWHLcClr1t8n1gMk/ivW4ALT/XXF58NRE9O927unJ853dwe9HLiG8V8TCZsAS47lQU9VA08Y4nvFBcELroUHnqe6423aM0yOG+IbxUXAC45lQU9QWcP/qStCs6xxPeKxuGCU1nQc/rm27SMgvMs8c2iYbjcVBY1nrFwpiW+WzQKF1sKU6kf4ayc/+Ta0GuJbxcNwqWWAlLqBzhn3jOp+H7RGFxoKosxfUtn/zzmkXPo83T36uYhfw+iIbjQVBa5XoAzLFnQ40mBaxwuNJVFrhfgDEse9FlS4BqHCy0FI9e7//6twQxLHvRZUuAahwstBaOmV5IHfZYUuMbhQkvBqOmV5EGfJQWucbjQUjByvdOtdwczLHnQZ0mBaxwutBSMXC/AGZY86LOkwDUOF1oKRq4X4AxLFk//OB74LClwjcOFloIRe/c/eo+tczhjoNfyc0tS4BqHC01lUeoHOGfeM6kUuMbhQlNZlPqBv7//bjAr5z97/Gjg9aTANQ4XmsqixhOJHu+v3whn5qTANQ4XmsqixjMGzitJgWscLjSVBT2erxbOKkmBaxwuNJUFPTlvCc6okQLXOFxoKgt6Uj36+kvaTXhujBS4xuFCU1nQ48mCnlmkwDUOFzp1KXCNw4VOXQpc43ChU5cC1zhc6NSlwDUOFzp18f2iQbjUKYtvF0IIIYQQQggxcf4DypenEkLHlLsAAAAASUVORK5CYII=>