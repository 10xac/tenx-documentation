---
hide:
  - navigation
---


### **(Admin / Staff)**

**Audience:** Super-Admins, Programme Managers, Cohort Managers, Mentors, Support Staff  
 **Modules referenced:** Nana (Insight Dashboard), Eagle (at-risk engine), Trainee Information Processor (TIP), Institutional Insights, Notification Service

---

## **0 | Executive Snapshot**

Tenx gives Staff a **360° command-centre** for every learner. Three pillars keep things humming:

1. **Institutional Insights** – live metrics for engagement, satisfaction, experience and performance.

2. **Eagle** – an automated sentinel that flags at-risk trainees, fires notifications and assigns follow-up tasks.

3. **TIP** – a secure pipeline for importing, correcting, deleting and archiving trainee records (GDPR / POPIA ready).

Together they turn raw participation data into actionable tasks—so you move from *reactive firefighting* to *proactive coaching*.

---

## **1 | Key Objects & Signals**

| Object / Signal | Source | Default Refresh | Why it matters |
| ----- | ----- | ----- | ----- |
| **Engagement Score** | Slack, G-Meet, Submissions | 10 min | Measures presence & activity |
| **Satisfaction Index** | Pulse survey (1-5 stars) | 24 h | Early mood check |
| **Experience Gain** | Self-report \+ grade delta | Weekly | Shows learning velocity |
| **Risk Flag** | Eagle rule output | Instant | Triggers alerts / tasks |
| **TIP Record** | CSV/XLSX import | Manual | Secure, auditable data mutation |

*(Screenshot 01 – System “Traffic-light” KPI panel placeholder)*

---

## **2 | Role & Permission Matrix**

| Action | Super-Admin | Staff | Trainee |
| ----- | ----- | ----- | ----- |
| View all cohort KPIs | ✅ | ✅ | ❌ |
| Create / edit Eagle rules | ✅ | ✅ (if role \= Cohort Mgr) | ❌ |
| Bulk import trainee data (TIP) | ✅ | ✅ | ❌ |
| Approve data-deletion request | ✅ | ❌ | ❌ |
| Receive at-risk notifications | ✅ | ✅ | Personal only |
| Chat with Nana insight bot | View | ✅ | ✅ |

---

## **3 | System Map**

                     `+------------------+`  
     `Slack / G-Meet → |   Data Capture   | ← Assignment Submits`  
                      `+---------+--------+`  
                                `|`  
                     `Nightly ETL / Live Webhooks`  
                                `↓`  
 `+------------------+    +------------+     +------------------+`  
 `| Institutional    |    |  Eagle     |     |     TIP          |`  
 `| Insights DB      | →  | (Rules &   | ←-- | Secure Data Ops  |`  
 `| (metrics store)  |    |  Alerts)   |     +------------------+`  
 `+------------------+    +------------+            ↑`  
        `↓                                           |`  
  `Nana Insight                                   Admin Upload`  
  `Dashboard                                       (CSV/XLSX)`

---

## **4 | Quick-Start Checklist (New Cohort)**

1. **Pull cohort roster** from Apply → *Export CSV.*

2. **TIP ► Batch Insert** → upload roster (encrypted XLSX).

3. **Eagle ► Import Rules Template** (“Standard Ten-week Bootcamp”).

4. **Set Alert Channels**

   * Slack `#cohort-alerts` \+ email to mentors.

5. **Institutional Insights ► Cohort Settings**

   * Enable satisfaction pulse; weekly cadence; anonymity ON.

6. **Schedule Weekly Summary** → every Monday 08:00 local to Programme Director.

7. Post welcome note with **Nana** instructions (*All-Hands* channel).

---

## **5 | Daily & Weekly Workflows**

| Frequency | Staff Task | Tool | Steps |
| ----- | ----- | ----- | ----- |
| **Daily** | Check new **Risk Flags** | Eagle | Dashboard \> “Today’s alerts” → click trainee name → assign mentor |
|  | Respond to **Issue Tickets** | Apply | Issues \> Unresolved → comment / escalate |
| **Mon** | Download **Engagement Heat-map** | Insights | Filters: last 7 days → Export PDF |
| **Wed** | Run “TIP Data Clean” (missing IDs, duplicates) | TIP | Integrity Scan → Fix |
| **Fri** | Mentor 1-on-1 follow-ups | Nana \+ Slack | Use Nana “prep note” shortcut |

*(Screenshot 02 – Eagle alert list placeholder)*

---

## **6 | Eagle: Rule-Building Deep Dive**

### **6.1 Rule Anatomy**

`IF  (Engagement_Score < 40)  AND  (Days_Since_Last_Submission > 7)`  
`THEN Create_Risk_Flag("LowEngage"),`   
     `Notify_Slack(#cohort-alerts),`   
     `Assign_Task("MentorCheck-24h")`

*Components:* Signal, Operator, Threshold, Action(s).  
 Multi-conditions support AND/OR nesting, sliding windows, time-of-day.

### **6.2 Default Rule Set *(importable template)***

| ID | Condition | Action |
| ----- | ----- | ----- |
| R-01 | Engagement \< 40 % two days running | Slack alert |
| R-02 | Satisfaction ≤ 3 | Email mentor & cohort manager |
| R-03 | No submission 14 days | Create Jira task “Catch-Up” |

### **6.3 Best-Practice Tips**

1. **Stack signals gradually** – too many rules \= alert fatigue.

2. **Add human delay** – e.g., require mentor confirmation before auto-emailing trainee.

3. **Use ‘Snooze’** during exam weeks.

---

## **7 | TIP: Secure Data Operations**

### **7.1 Batch Insertion**

*File requirements:* AES-encrypted XLSX, columns \= `user_email`, `ext_id`, `scholarship_code`, `import_tag`.  
 Upload path → *TIP ► Batch*; system auto-confirms checksum \+ row count.

### **7.2 Data-Deletion Requests (Trainee SPF)**

1. Trainee submits **Deletion Form**.

2. TIP route → *Pending* queue.

3. Super-Admin approves → records anonymised; pointer stored for 24 months.

4. System notifies trainee & logs in audit trail.

### **7.3 Notifications & Integrity Scan**

* **Integrity Scan** button: find duplicates, orphan IDs, schema drift.

* Email digest sent if \>3 critical issues.

---

## **8 | Institutional Insights Dashboards**

| Dashboard | Key Widgets | Typical Questions |
| ----- | ----- | ----- |
| **Cohort Overview** | Submission count, Avg grade, Engagement trend | “Is activity rising week-on-week?” |
| **Radar Competency** | Tech depth, Soft skills, Consistency | “Where is skill gap widest?” |
| **Satisfaction Pulse** | NPS, mood over time | “When did morale dip?” |
| **Experience Gain** | Grade delta heat-map | “Are weaker students catching up?” |

*(Screenshot 03 – Radar chart placeholder)*

**Export Options:** PDF, CSV, JSON; schedule auto-send to email groups.

---

## **9 | Maintenance & Audit**

| Cadence | Task | Owner |
| ----- | ----- | ----- |
| Daily | Review Eagle alerts cleared \<24 h | Cohort Manager |
| Weekly | TIP integrity scan | Staff |
| Fortnightly | Rule effectiveness check (precision/recall) | Programme Manager |
| Monthly | KPI deep-dive with BI team | Super-Admin |
| Quarterly | Role & permission audit | Super-Admin |
| Semester | Satisfaction survey redesign | Staff \+ Comms |

---

## **10 | Troubleshooting FAQ**

| \# | Problem | Root Cause | Fix |
| ----- | ----- | ----- | ----- |
| 1 | Risk flag fires repeatedly after mentor follow-up | Rule missing *cool-down* | Edit rule → add `snooze = 72 h` |
| 2 | TIP import “Checksum mismatch” | File saved unencrypted | Re-export with AES key |
| 3 | Engagement scores locked at 0 | Slack API token expired | Re-authorise in Integrations |
| 4 | Nana insight blank | Context not selected | Nana Dashboard ► “Select context” |
| 5 | Pulse survey replies low | Anonymous toggle OFF | Enable anonymity, resend |
| 6 | Radar chart shows NaN | Missing rubric data | Insights ► Recalc → choose fallback 0 |
| 7 | Alert email spam | Overlapping rules | Merge conditions or change severity |
| 8 | Deletion request stuck “Pending” | No Super-Admin assigned | re-assign approver in TIP Queue |

---

## **11 | Glossary & Links**

| Term | Definition |
| ----- | ----- |
| **Risk Flag** | System label marking potential drop-out or dissatisfaction |
| **Satisfaction Pulse** | 1-5 star micro-survey sent weekly |
| **Experience Gain** | Δ in competency score over last period |
| **Integrity Scan** | TIP routine checking data hygiene |
| **Cool-down** | Period Eagle waits before repeating same alert |

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABFCAYAAAC/iY+qAAAE30lEQVR4Xu2XPW9eRRCFXVAQhIQo80FNEJ2dBlFgUaQHZISQv5r4FyB6aqgRHT2ipOEfBERPAzRYFFFskigoARKHu9bdaHnuzO7e9/OudR7pSPHM2dnNnRNCNjaEEEIIIYQQTXFy9cazRYrzhRjA0MwrzhdiAEMzjzhbCBMGZ1ZxrhAuDM8s4kwhsjBAY8V5QhRhiMaIs4SogkGqFecIUQ3DVCPOEGIUDFRJPC/EaBiqnHhWiJlgsDzxnBAzw3BZ4hmxZg4PD5teCgNG0S/WTOuBCzBkSwschy9SvOuichEC9/vGtUvc38L3yMHLEO+s5eDg4GZYZBT7Fp3vxTFnujt+G+MPdGee0F9zNr2nm/ET+ym973ry68H7vHrK2N6vr269wv3Ns8MBHLws8d4S/JBxyamHxDOd99/d3d3X4887Ozsv0xvgHfzZIno63enuOerv+7z2nPcz6fvXk/t+Ts/0vz7u9DQ3K9S79/1g1b0zdy9vfjvv/lw4eJni3WPJfaT9/f1vrF5/5jbrHrk7vJ5Xj3h9rx7welbdqkW8nlVLObmy9XCRu3sOQ7Fs8f4xeB8vkOuNITen1GMtMkvPu6uv/2jVWYtYPatGTq7ceLKIvf0PBmIV4hs84ken6At49RzdmducPesdXq/76+xTzqZ4JuD1rFrAqwc4q//549TjMXZnRRiGVYnvINYH5IdLCfVuuQ9Z99je3n7BmlW6I/y/IesB78zR0dFLXi+H9w6rFvDqkbRf8pKafVXDIKxSfEsk97GteiDXs/D8Xj1Q6rEWyfU8vLusWsCrR0K/+wP5YadPSt6lwhCsWnxPxPoo3hIiVt+q9fVfnLrpj4Ret7Qz1kpnrH4/6wPWA7kzrAW8eqT7R9VX3syVwgCsQ3xTIH6cVLFObwrP5Pz01dyxt7f3jncmd45ngrqwHdMX8eZZtYBXT/FmrhQuf13iu8TiUeAgvk0slrWHLcClr1t8n1gMk/ivW4ALT/XXF58NRE9O927unJ853dwe9HLiG8V8TCZsAS47lQU9VA08Y4nvFBcELroUHnqe6423aM0yOG+IbxUXAC45lQU9QWcP/qStCs6xxPeKxuGCU1nQc/rm27SMgvMs8c2iYbjcVBY1nrFwpiW+WzQKF1sKU6kf4ayc/+Ta0GuJbxcNwqWWAlLqBzhn3jOp+H7RGFxoKosxfUtn/zzmkXPo83T36uYhfw+iIbjQVBa5XoAzLFnQ40mBaxwuNJVFrhfgDEse9FlS4BqHCy0FI9e7//6twQxLHvRZUuAahwstBaOmV5IHfZYUuMbhQkvBqOmV5EGfJQWucbjQUjByvdOtdwczLHnQZ0mBaxwutBSMXC/AGZY86LOkwDUOF1oKRq4X4AxLFk//OB74LClwjcOFloIRe/c/eo+tczhjoNfyc0tS4BqHC01lUeoHOGfeM6kUuMbhQlNZlPqBv7//bjAr5z97/Gjg9aTANQ4XmsqixhOJHu+v3whn5qTANQ4XmsqixjMGzitJgWscLjSVBT2erxbOKkmBaxwuNJUFPTlvCc6okQLXOFxoKgt6Uj36+kvaTXhujBS4xuFCU1nQ48mCnlmkwDUOFzp1KXCNw4VOXQpc43ChU5cC1zhc6NSlwDUOFzp18f2iQbjUKYtvF0IIIYQQQggxcf4DypenEkLHlLsAAAAASUVORK5CYII=>