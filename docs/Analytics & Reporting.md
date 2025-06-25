---
hide:
  - navigation
---


### **(Admin / Staff)**

**Audience:** Super-Admins, Programme Directors, Cohort Managers, Data Analysts, Instructors  
 **Modules referenced:** Institutional Insights, Radar Chart Engine, Success-Probability Model, Leaderboard (Leap), Load & Cost Monitor, Nana Insight Extractor, Scheduled Exporter

---

## **0 | Executive Snapshot**

Tenx Analytics turns raw activity logs (Slack, G-Meet, submissions, assessments, job-search events) into **decision-grade dashboards**.  
 Five pillars make up the stack:

| Pillar | What it shows | Typical User |
| ----- | ----- | ----- |
| **Institutional Insights** | Training KPIs (engagement, satisfaction, grades) | Programme & Cohort Managers |
| **Radar Charts** | Competency distribution vs. benchmark | Mentors, Instructors |
| **Success-Probability** | Likelihood of timely graduation & job placement | Directors, Advisors |
| **Leaderboard (Leap)** | Job-search effort, interviews, offers | Placement Team, Trainees |
| **Load & Cost Monitor** | Infra usage, email spend, runner hours | Super-Admins, Dev-Ops |

Nana’s **Insight Extractor** layer sits on top, allowing natural-language queries like “Show top 5 cohorts by satisfaction trend last month”.

---

## **1 | Data Objects & Refresh Cadence**

| Object | Data Sources | Refresh | Notes |
| ----- | ----- | ----- | ----- |
| **Engagement** | Slack, G-Meet, LMS clicks | 10 min | Rolling 7-day window |
| **Submission Scores** | Grader DB | 10 min | Weighted by assignment weight |
| **Satisfaction** | Pulse surveys | 24 h | Anonymised |
| **Experience Gain** | Grade deltas | 24 h | Week-over-week |
| **Job-Search Events** | Leap logs | 10 min | Reactions, applications |
| **Cost Metrics** | Kubernetes, SES, DB bills | Hourly | USD equivalent |
| **Success-Prob Model** | ML pipeline | Nightly | Re-trains if new data \>1 % |

*(Screenshot 01 – Data-pipeline flowchart placeholder)*

---

## **2 | Role & Permission Matrix**

| Dashboard / Report | Super-Admin | Staff (Cohort / Instructor) | Trainee |
| ----- | ----- | ----- | ----- |
| Institutional Overview | ✅ | View own cohort | View own profile slice |
| Radar Chart Engine | ✅ | ✅ | View own |
| Success-Probability | ✅ | ✅ | ❌ |
| Leaderboard (Leap) | ✅ | ✅ | View cohort \+ own |
| Load & Cost Monitor | ✅ | ❌ | ❌ |
| Custom SQL / API | ✅ | Analyst role only | ❌ |
| Schedule Auto-Email | ✅ | ✅ | ❌ |

---

## **3 | Main Dashboards – Widgets & Interpretation**

### **3.1 Institutional Insights (Home)**

| Widget | KPI | Green | Amber | Red |
| ----- | ----- | ----- | ----- | ----- |
| **Engagement Gauge** | ≥ 70 % | 55–69 % | \< 55 % |  |
| **Avg Satisfaction** | ≥ 4.2 / 5 | 3.5–4.1 | \< 3.5 |  |
| **Median Turnaround** | ≤ 6 h | 6–12 h | \> 12 h |  |
| **Experience Gain** | ≥ \+8 pts/wk | \+2–7 | ≤ \+1 |  |

Click any widget to drill into cohort, group, individual.

### **3.2 Radar Chart View**

* Axes default: **Tech Depth · Soft Skills · Consistency · Engagement**.

* Hover shows percentile vs. global benchmark.

* **Interpretation:** Perfect circle above 70 % \= balanced; star-shaped \= spike skill; inward dent \= gap.

*(Screenshot 02 – Radar overlay of two cohorts placeholder)*

### **3.3 Success-Probability Panel**

* **Logistic prediction** 0–100 % for *On-time Graduation* & *Job Placement (6 mo)*.

* **What-if sliders**: alter engagement, grade trend, peer feedback to show probability lift.

* **Action-Button** → one-click creates Eagle follow-up for at-risk group.

### **3.4 Leaderboard (Leap)**

| Column | Meaning | Note |
| ----- | ----- | ----- |
| **Effort Score** | Weighted count of applications, networking touches | 30-day rolling |
| **Interview Count** | Sum of scheduled & completed | auto from Parrot |
| **Offers** | Signed offers | Verified by staff |
| **Delta** | Position change vs. last week | Green ↑ / Red ↓ |

### **3.5 Load & Cost Monitor**

* CPU hrs, DB GB-hrs, Runner hrs, SES emails, GPT tokens.

* **Budget Alert** slider; default 80 % monthly budget.

* **Mode Switch Log** shows Dense ↔ Sparse events.

---

## **4 | Quick-Start Checklist (First Dashboard Setup)**

1. **Grant Roles** – ensure staff \= “Analyst” or above for custom SQL.

2. **Review Data Filters**

   * *Settings ► Analytics ► Cohort Mapping* (multi-programme orgs).

3. **Enable Pulse Survey** – Institutional Insights ▶ Preferences ▶ cadence \= weekly.

4. **Set Cost Budget** – Load & Cost Monitor ▶ Budget ▶ USD cap.

5. **Schedule Exports**

   * Insights → ⋯ Export → Schedule → “Monday 07:00 AM Africa/Addis\_Ababa” → send to MD \+ PM.

6. **Publish Leaderboard to Trainees**

   * Leap ▶ Leaderboard ▶ Visibility \= Cohort.

*(Screenshot 03 – Export schedule dialog placeholder)*

---

## **5 | Nana Insight Extractor (Natural-Language Queries)**

**Examples:**

* “Show cohorts where satisfaction dipped more than 0.5 last week.”

* “List top 10 trainees by engagement who still have risk flag.”

* “Plot cost vs. completion rate for last 4 programmes.”

**How it works:**

1. LLM parses question ➜ converts to SQL/Graph query.

2. Runs with row-level role security.

3. Returns chart or table; user can save as widget.

*Tip:* For repeat queries, **Save → Pin to Dashboard**.

---

## **6 | Advanced Usage**

### **6.1 Custom Metrics**

* Head to **Insights ► Metric Builder**.

* Define SQL or choose wizard (sum, avg, ratio).

* Map to colour thresholds; save as organisation-wide or cohort-only.

### **6.2 API & Notebook Access**

* API Key (Analyst role+) under **Profile ► Developer**.

* `/v1/analytics/query` – pass SQL; returns JSON.

* Jupyter notebooks auto-auth via environment var `TENX_API_KEY`.

### **6.3 Real-Time Alerts**

* Any widget ► ⋯ **Set Alert** → threshold, channel (Slack / Email).

* Example: **Median Turnaround \> 8 h** → email `grading-team@`.

---

## **7 | Maintenance & Housekeeping**

| Cadence | Task | Owner |
| ----- | ----- | ----- |
| Daily | Spot-check dashboard load time \< 3 s | Ops |
| Weekly | Validate success-prob model ROC ≥ 0.78 | Data Scientist |
| Monthly | KPI threshold review with leadership | Programme Director |
| Monthly | Cost anomaly scan (\>20 % spike) | Super-Admin |
| Quarterly | Archive dashboards from closed cohorts | Analyst |
| Semester | Radar axis review vs. updated curriculum | Curriculum Lead |

---

## **8 | Troubleshooting FAQ**

| \# | Symptom | Possible Cause | Fix |
| ----- | ----- | ----- | ----- |
| 1 | Dashboard blank tiles | Data-warehouse lag | Wait 5 min or check ETL logs |
| 2 | Radar values \= 0 | Rubric mapping missing | Insights ► Re-calculate competencies |
| 3 | Success-prob slider not updating | JS cache | Hard reload or incognito |
| 4 | Cost chart flat line | Billing API key expired | Settings ► Integrations ► Renew |
| 5 | Nana query “Permission denied” | Role lacks `run_custom_query` | Update role or ask Analyst |
| 6 | Export email not sent | SES quota exceeded | Load & Cost Monitor ► Email |
| 7 | Leaderboard ranks wrong | Out-of-sync job events | Leap ► Reconcile job log |
| 8 | Alert fires too often | Threshold too tight / duplicate widget | Edit alert or combine metrics |

---

## **9 | Best-Practice Nuggets**

1. **Triangulate** – never rely on a single metric; cross-check engagement \+ grades \+ satisfaction.

2. **Visual First** – save charts, not tables, for busy execs.

3. **Set Budget Alerts Early** – easier to relax than tighten mid-month.

4. **Pin Trend Lines** – watch velocity, not just absolute levels.

5. **Document Custom SQL** – store query in Git or Notion; analytics should be reproducible.

---

## **10 | Glossary & Links**

| Term | Meaning |
| ----- | ----- |
| **KPI** | Key Performance Indicator |
| **ROC** | Receiver Operating Characteristic – model quality |
| **What-if Slider** | UI control to simulate metric changes |
| **Delta Arrow** | Week-over-week direction indicator |
| **BI** | Business Intelligence |

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABFCAYAAAC/iY+qAAAE30lEQVR4Xu2XPW9eRRCFXVAQhIQo80FNEJ2dBlFgUaQHZISQv5r4FyB6aqgRHT2ipOEfBERPAzRYFFFskigoARKHu9bdaHnuzO7e9/OudR7pSPHM2dnNnRNCNjaEEEIIIYQQTXFy9cazRYrzhRjA0MwrzhdiAEMzjzhbCBMGZ1ZxrhAuDM8s4kwhsjBAY8V5QhRhiMaIs4SogkGqFecIUQ3DVCPOEGIUDFRJPC/EaBiqnHhWiJlgsDzxnBAzw3BZ4hmxZg4PD5teCgNG0S/WTOuBCzBkSwschy9SvOuichEC9/vGtUvc38L3yMHLEO+s5eDg4GZYZBT7Fp3vxTFnujt+G+MPdGee0F9zNr2nm/ET+ym973ry68H7vHrK2N6vr269wv3Ns8MBHLws8d4S/JBxyamHxDOd99/d3d3X4887Ozsv0xvgHfzZIno63enuOerv+7z2nPcz6fvXk/t+Ts/0vz7u9DQ3K9S79/1g1b0zdy9vfjvv/lw4eJni3WPJfaT9/f1vrF5/5jbrHrk7vJ5Xj3h9rx7welbdqkW8nlVLObmy9XCRu3sOQ7Fs8f4xeB8vkOuNITen1GMtMkvPu6uv/2jVWYtYPatGTq7ceLKIvf0PBmIV4hs84ken6At49RzdmducPesdXq/76+xTzqZ4JuD1rFrAqwc4q//549TjMXZnRRiGVYnvINYH5IdLCfVuuQ9Z99je3n7BmlW6I/y/IesB78zR0dFLXi+H9w6rFvDqkbRf8pKafVXDIKxSfEsk97GteiDXs/D8Xj1Q6rEWyfU8vLusWsCrR0K/+wP5YadPSt6lwhCsWnxPxPoo3hIiVt+q9fVfnLrpj4Ret7Qz1kpnrH4/6wPWA7kzrAW8eqT7R9VX3syVwgCsQ3xTIH6cVLFObwrP5Pz01dyxt7f3jncmd45ngrqwHdMX8eZZtYBXT/FmrhQuf13iu8TiUeAgvk0slrWHLcClr1t8n1gMk/ivW4ALT/XXF58NRE9O927unJ853dwe9HLiG8V8TCZsAS47lQU9VA08Y4nvFBcELroUHnqe6423aM0yOG+IbxUXAC45lQU9QWcP/qStCs6xxPeKxuGCU1nQc/rm27SMgvMs8c2iYbjcVBY1nrFwpiW+WzQKF1sKU6kf4ayc/+Ta0GuJbxcNwqWWAlLqBzhn3jOp+H7RGFxoKosxfUtn/zzmkXPo83T36uYhfw+iIbjQVBa5XoAzLFnQ40mBaxwuNJVFrhfgDEse9FlS4BqHCy0FI9e7//6twQxLHvRZUuAahwstBaOmV5IHfZYUuMbhQkvBqOmV5EGfJQWucbjQUjByvdOtdwczLHnQZ0mBaxwutBSMXC/AGZY86LOkwDUOF1oKRq4X4AxLFk//OB74LClwjcOFloIRe/c/eo+tczhjoNfyc0tS4BqHC01lUeoHOGfeM6kUuMbhQlNZlPqBv7//bjAr5z97/Gjg9aTANQ4XmsqixhOJHu+v3whn5qTANQ4XmsqixjMGzitJgWscLjSVBT2erxbOKkmBaxwuNJUFPTlvCc6okQLXOFxoKgt6Uj36+kvaTXhujBS4xuFCU1nQ48mCnlmkwDUOFzp1KXCNw4VOXQpc43ChU5cC1zhc6NSlwDUOFzp18f2iQbjUKYtvF0IIIYQQQggxcf4DypenEkLHlLsAAAAASUVORK5CYII=>