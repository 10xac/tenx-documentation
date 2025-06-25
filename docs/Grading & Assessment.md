---
hide:
  - navigation
---


### **(Admin / Staff)**

**Modules covered:** Smart Grader, Smart Rubric, Peer Grading, Plagiarism Service, Assignment Queue  
 **Audience:** Programme Managers, Cohort Managers, Instructors, Reviewers, Super-Admins

---

## **0 | Executive Snapshot**

Tenx turns assessment from a bottleneck into a **continuous feedback engine**.  
 Smart Grader automatically marks code, essays, and form submissions, streams feedback while tests run, and plugs directly into plagiarism detection. Staff can blend AI scoring with manual or peer review, guaranteeing speed **and** pedagogical nuance. This manual details setup, daily use, scaling, and troubleshooting.

---

## **1 | Concepts & Data Objects**

| Object | Purpose | Key Fields | Versioning |
| ----- | ----- | ----- | ----- |
| **Assignment** | Live assessment linked to a Challenge | cohort, open/close, grading\_mode | Editable until first submission |
| **Test Suite** | Unit / integration tests for code tasks | language, runtime, weight | Immutable once assignment active |
| **Rubric** | Criteria × weight grid used by AI & reviewers | criteria, levels, descriptors | Draft → Active → Archived |
| **Auto-Score** | Raw score from Smart Grader | score, feedback\_blob, run\_log | Re-generated on re-grade |
| **Peer Review** | Trainee-to-trainee evaluation record | reviewer\_id, rubric\_snapshot | Lock after release |
| **Plagiarism Report** | Text/code similarity meta | pct\_match, sources, verdict | Stored 12 months |

*(Screenshot 01 – Assessment entity diagram placeholder)*

---

## **2 | Feature Map**

### **2.1 Smart Grader Core**

* **Languages:** Python, JavaScript/TypeScript, SQL, Markdown, PDF (essay).

* **Feedback Streams:** real-time console for code; inline comments for essays.

* **Scoring Modes:**

  1. Auto (AI+tests → final)

  2. Hybrid (AI draft → staff adjust)

  3. Manual only

* **Plagiarism Check:** Turnitin-style; threshold default 25 %.

* **Re-grade Button:** one-click re-runs tests & AI with latest model.

### **2.2 Smart Rubric Generator**

* Bloom-level aware (Remember → Create).

* Weight auto-suggestion based on challenge difficulty.

* Inflation-guard: warns if total \> 100 pts.

### **2.3 Peer Grading**

* Double-blind option.

* Reviewer quota, late penalty, bias-adjust algorithm (planned 2025 Q4).

### **2.4 Planned Upgrades (2024-25)**

* **Personalised Evaluation** – rubric criteria adapt to individual learning plans.

* **Large-Scale Queue Split** – shard grading runners for 5 000+ concurrent jobs.

* **CV/Portfolio Auto-Scoring** – cross-link Leap evidence to rubric criteria.

---

## **3 | Roles & Permissions**

| Capability | Super-Admin | Staff (Instructor) | Reviewer Role | Trainee |
| ----- | ----- | ----- | ----- | ----- |
| Create / Publish Assignment | ✅ | ✅ | ❌ | ❌ |
| Attach / Edit Rubric | ✅ | ✅ | ✅ (if Reviewer+) | ❌ |
| Enable Auto-grade | ✅ | ✅ | ❌ | ❌ |
| View All Submissions | ✅ | ✅ | ✅ (peers only) | Own |
| Release Scores | ✅ | ✅ | ❌ | ❌ |
| Override Score | ✅ | ✅ | ❌ | ❌ |
| Re-grade Batch | ✅ | ✅ | ❌ | ❌ |
| Access Plagiarism Reports | ✅ | ✅ | ❌ | ❌ |

---

## **4 | Workflow Cheat-Sheet**

### **4.1 New Assignment Setup**

1. **Challenges ▶ Select** (v ≥ 1.0) → **Create Assignment**.

2. **Choose Grading Mode**

   * Auto (default for code)

   * Hybrid (essays, complex SQL)

3. **Attach Rubric**

   * Click **Generate** or **Browse Drafts**.

   * Edit criteria, descriptors, weights.

4. **Configure Smart Grader**

   * **Test Suite:** upload tests/ ZIP or author inline.

   * **Runtime Limits:** CPU sec / memory MB.

   * Toggle **Streaming Feedback**.

   * Toggle **Plagiarism Check** (text / code).

5. **Schedule Open / Close** dates; select Cohort(s).

6. **Save → Activate** (status \= Open).

*(Screenshot 02 – Assignment wizard “Grader” step placeholder)*

### **4.2 Daily Grading Flow (Staff)**

| Step | Action | Tool |
| ----- | ----- | ----- |
| 1 | Open **Grade Queue** | Learn ► Grading |
| 2 | Filter by status (*Auto-graded*, *Needs Review*) | Sidebar |
| 3 | Review Auto score, feedback | Split-panel view |
| 4 | Adjust points or comment | Inline editor |
| 5 | **Release Feedback** (batch or single) | Toolbar |
| 6 | If plagiarism \> threshold → click **Investigate** | Plagiarism tab |

### **4.3 Peer-Grading Setup**

1. Assignment ► *Settings* ► **Peer-Review ON**.

2. Set “Reviews per submission” (default \= 3).

3. Decide anonymity level (Double-blind ON recommended).

4. Set **Late Review Penalty** (%).

5. Save – system autogenerates peer assignments after submission deadline.

### **4.4 Re-grading & Overrides**

* **Single Re-grade:** Submission ► ⋯ ► *Re-run*.

* **Batch Re-grade:** Grade Queue ► **Re-grade All** (use after rubric change).

* **Override Lock:** after manual score, Auto-grade is frozen unless staff un-locks.

---

## **5 | Scaling & Performance**

| Runner Tier | Concurrency | Typical Use |
| ----- | ----- | ----- |
| **Standard (default)** | 50 jobs | Cohort ≤ 300 |
| **High-Mem** | 30 jobs | ML / data-heavy tests |
| **Burst** | 200 jobs (ephemeral) | Hackathon deadline |

Switch in **Settings ▶ Grader ► Runner Pool**.  
 Auto-scaler will add pods once queue \> 80 % busy for 3 min.

---

## **6 | Analytics & Reporting**

| Report | Location | Insight |
| ----- | ----- | ----- |
| **Rubric Item Stats** | Grading ► Analytics | Low-variance criteria → revise |
| **Median Turn-around Time** | Grading ► SLA | Target \< 6 h |
| **Plagiarism Trend** | Plagiarism ► Trend | Spike \> 5 % → remind policy |
| **Grade Distribution** | Insights ► Assessment | Identify skew / inflation |

*(Screenshot 03 – Grade distribution violin plot placeholder)*

---

## **7 | Maintenance & House-Keeping**

| Cadence | Task | Owner |
| ----- | ----- | ----- |
| Weekly | Clear “Stuck – Processing” jobs \> 2 h | Ops |
| Bi-Weekly | Review rubric outliers (\< 0.2 discriminator) | Instructor |
| Monthly | Update base docker image (security patches) | Dev-Ops |
| Quarterly | Plagiarism service token renewal | Super-Admin |
| Semester | Rubric inflation audit | Programme Manager |

---

## **8 | Troubleshooting FAQ**

| \# | Issue | Cause | Fix |
| ----- | ----- | ----- | ----- |
| 1 | “Runner unavailable” error | Pod crash | Ops ► Runners ► Restart |
| 2 | Auto-grade timeout | Infinite loop in student code | Raise timeout or hint in prompt |
| 3 | Rubric weights reset to 0 | Draft not saved | Click **Save Draft** before navigation |
| 4 | Plagiarism report empty | Token expired | Integrations ► Renew Token |
| 5 | Peer reviews unassigned | Cohort \< reviewers quota | Lower quota or merge small groups |
| 6 | Essay feedback truncated | max\_tokens cap | Settings ► Grader ► Increase |
| 7 | Streaming feedback not visible | Browser WS blocked | Allow websockets / switch network |
| 8 | Re-grade button inactive | Assignment locked after release | Unlock → Re-grade → Lock |

---

## **9 | Best-Practice Nuggets**

1. **Write deterministic tests** – avoid random seeds or non-idempotent web calls.

2. **Limit file uploads** to \< 10 MB unless absolutely required.

3. Always run **pilot submission** yourself before opening to cohort.

4. **Rubric granularity ≈ assignment weight** – small tasks need ≤ 3 criteria.

5. **Release grades in waves** – prevents chat floods and allows quick hot-fix.

6. Document manual overrides with a short comment for audit clarity.

---

## **10 | Glossary & Links**

| Term | Definition |
| ----- | ----- |
| **Streaming Feedback** | Live console / inline comments pushed while tests run |
| **Discriminator** | Correlation between criterion score & total score |
| **Hybrid Mode** | AI produces draft, staff finalise |
| **Runner Pod** | Isolated container executing student code |
| **Bias-Adjust** | Statistical correction for peer-grading bias |

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABFCAYAAAC/iY+qAAAE30lEQVR4Xu2XPW9eRRCFXVAQhIQo80FNEJ2dBlFgUaQHZISQv5r4FyB6aqgRHT2ipOEfBERPAzRYFFFskigoARKHu9bdaHnuzO7e9/OudR7pSPHM2dnNnRNCNjaEEEIIIYQQTXFy9cazRYrzhRjA0MwrzhdiAEMzjzhbCBMGZ1ZxrhAuDM8s4kwhsjBAY8V5QhRhiMaIs4SogkGqFecIUQ3DVCPOEGIUDFRJPC/EaBiqnHhWiJlgsDzxnBAzw3BZ4hmxZg4PD5teCgNG0S/WTOuBCzBkSwschy9SvOuichEC9/vGtUvc38L3yMHLEO+s5eDg4GZYZBT7Fp3vxTFnujt+G+MPdGee0F9zNr2nm/ET+ym973ry68H7vHrK2N6vr269wv3Ns8MBHLws8d4S/JBxyamHxDOd99/d3d3X4887Ozsv0xvgHfzZIno63enuOerv+7z2nPcz6fvXk/t+Ts/0vz7u9DQ3K9S79/1g1b0zdy9vfjvv/lw4eJni3WPJfaT9/f1vrF5/5jbrHrk7vJ5Xj3h9rx7welbdqkW8nlVLObmy9XCRu3sOQ7Fs8f4xeB8vkOuNITen1GMtMkvPu6uv/2jVWYtYPatGTq7ceLKIvf0PBmIV4hs84ken6At49RzdmducPesdXq/76+xTzqZ4JuD1rFrAqwc4q//549TjMXZnRRiGVYnvINYH5IdLCfVuuQ9Z99je3n7BmlW6I/y/IesB78zR0dFLXi+H9w6rFvDqkbRf8pKafVXDIKxSfEsk97GteiDXs/D8Xj1Q6rEWyfU8vLusWsCrR0K/+wP5YadPSt6lwhCsWnxPxPoo3hIiVt+q9fVfnLrpj4Ret7Qz1kpnrH4/6wPWA7kzrAW8eqT7R9VX3syVwgCsQ3xTIH6cVLFObwrP5Pz01dyxt7f3jncmd45ngrqwHdMX8eZZtYBXT/FmrhQuf13iu8TiUeAgvk0slrWHLcClr1t8n1gMk/ivW4ALT/XXF58NRE9O927unJ853dwe9HLiG8V8TCZsAS47lQU9VA08Y4nvFBcELroUHnqe6423aM0yOG+IbxUXAC45lQU9QWcP/qStCs6xxPeKxuGCU1nQc/rm27SMgvMs8c2iYbjcVBY1nrFwpiW+WzQKF1sKU6kf4ayc/+Ta0GuJbxcNwqWWAlLqBzhn3jOp+H7RGFxoKosxfUtn/zzmkXPo83T36uYhfw+iIbjQVBa5XoAzLFnQ40mBaxwuNJVFrhfgDEse9FlS4BqHCy0FI9e7//6twQxLHvRZUuAahwstBaOmV5IHfZYUuMbhQkvBqOmV5EGfJQWucbjQUjByvdOtdwczLHnQZ0mBaxwutBSMXC/AGZY86LOkwDUOF1oKRq4X4AxLFk//OB74LClwjcOFloIRe/c/eo+tczhjoNfyc0tS4BqHC01lUeoHOGfeM6kUuMbhQlNZlPqBv7//bjAr5z97/Gjg9aTANQ4XmsqixhOJHu+v3whn5qTANQ4XmsqixjMGzitJgWscLjSVBT2erxbOKkmBaxwuNJUFPTlvCc6okQLXOFxoKgt6Uj36+kvaTXhujBS4xuFCU1nQ48mCnlmkwDUOFzp1KXCNw4VOXQpc43ChU5cC1zhc6NSlwDUOFzp18f2iQbjUKYtvF0IIIYQQQggxcf4DypenEkLHlLsAAAAASUVORK5CYII=>