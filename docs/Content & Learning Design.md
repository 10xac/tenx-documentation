---
hide:
  - navigation
---


### **Staff / Admin** 

 This guide is the “source-of-truth” for anyone curating challenges, rubrics, assignments, and automated learning flows on Tenx.

---

## **0 | Executive Snapshot**

Tenx’s Content & Learning Design layer lets you:

* Build high-quality modules, challenges, and quizzes in minutes.

* Generate rubrics and whole assignments with AI—then version and link them safely to cohorts.

* Personalise recommendations at scale, while still giving staff full editorial control.

* Track usage, retire low-value items, and roll out updates without breaking historical data.

Read once to understand the object model, then jump to the workflow or FAQ any time you need a refresher.

---

## **1 | Core Concepts & Data Objects**

| Object | What it stores | Key Fields | Versioning? |
| ----- | ----- | ----- | ----- |
| **Module** | A logical chunk of learning material | title, tags, skill taxonomy, difficulty | Minor & major |
| **Challenge** | Authentic task or project | background, assets, success criteria, LO link | Immutable v1.0 \+ branches |
| **Assignment** | Scheduled instance of a challenge | open/close dates, submission type, grading mode | Editable until first submission |
| **Rubric** | Multi-criteria scoring sheet | criteria, weight, Bloom level | Draft ➜ Active ➜ Archived |
| **Question** | Single quiz item | stem, options, label(s), metadata | No |
| **Question Bank** | Tagged pool of questions | skill tag, diff, usage count | N/A |

*(Screenshot 01 – object-relationship diagram placeholder)*

---

## **2 | Feature Map**

### **Build & Curate**

* **Challenge Builder** – rich-text editor, asset upload, embedded diagrams.

* **Smart Rubric Generator** – AI drafts criteria & weights; you finalise.

* **Auto-Content Extractor** – paste URL / PDF → Tenx parses into modules.

* **Auto-Content Generator** – Basic / Intermediate / Advanced templates produce full tasks.

* **Question-Bank Manager** – bulk import, tag/label, statistics.

### **Link & Schedule**

* Drag-drop **Assignment ↔ Rubric** linking.

* Adaptive **Quizzes**; mock exams per group/cohort.

* **Learning-Module Recommender** – gap-analysis weights (skill gap, interest, history).

### **Maintain & Evolve**

* **Version Customisation** – edit challenges without breaking past cohorts.

* **Content Usage Stats** – retire or improve under-performing material.

* **Bulk Table Export** – CSV/Excel for offline analytics.

---

## **3 | Role & Permission Matrix**

| Capability | Super-Admin | Staff | Trainee |
| ----- | ----- | ----- | ----- |
| Create Module / Challenge | ✅ | ✅ | ❌ |
| Run Auto-Content Generator | ✅ | ✅ | ❌ |
| Publish Assignment | ✅ | ✅ | ❌ |
| Edit Active Rubric | ✅ | ✅ | View |
| Delete Question Bank Items | ✅ | ❌ | ❌ |
| Trigger Recommendation Re-train | ✅ | ❌ | ❌ |
| Submit Task / View Feedback | View | View | ✅ |

---

## **4 | Workflow Cheat-Sheet**

### **4.1 Create a New Challenge (Staff)**

1. **Open Builder** → *Challenges ▶ \+New*.

2. Choose template **Blank** or **From Extractor**.

3. Fill metadata (tags, difficulty, time-box).

4. Attach assets (code repo link, dataset, PDF).

5. Click **Save Draft** (auto-creates v0.x).

6. **Generate Rubric** → tweak until satisfied.

7. **Publish** → v1.0 is immutable; creates Assignment wizard shortcut.

*(Screenshot 02 – Challenge Builder tab placeholder)*

### **4.2 Link Challenge to Assignment & Cohort**

1. **Assignments ▶ \+New** → select Challenge v1.0.

2. Pick **Grading Mode**: Auto, Peer, Hybrid.

3. Attach Rubric (drag-drop).

4. Set open/close dates; pick cohort(s).

5. Toggle plagiarism check, streaming feedback.

6. **Save & Activate**.

### **4.3 Auto-Content Generator in “Advanced” Mode**

1. **Generator ▶ Advanced**.

2. Input learning objective \+ prerequisite skill.

3. Choose desired output length, media type (code, essay, design).

4. Preview \+ cost estimate appears.

5. Click **Accept to Draft**; content lands in Module list (status \= Draft).

### **4.4 Recommendation Engine Setup (Super-Admin once per programme)**

1. **Settings ▶ Recommender**.

2. Weight sliders: Skill Gap 60 %, Interest 25 %, Engagement History 15 %.

3. Click **Re-train**; model refreshes nightly.

---

## **5 | Versioning Rules**

| Action | Version Outcome | Safe? |
| ----- | ----- | ----- |
| Edit Draft challenge | Updates v0.x | ✅ |
| Publish draft | Locks as v1.0 | ✅ |
| Minor tweak (typo) to live challenge | Creates v1.1 branch; prior cohorts stay on v1.0 | ✅ |
| Replace rubric after submissions exist | Not allowed | ❌ – clone & re-link |

**Tip:** Use **Clone►Modify►Publish** for semester refreshes; this keeps analytics clean.

---

## **6 | Analytics & Quality Control**

* **Module Usage Heat-map** – shows views, submissions, avg grade.

* **Rubric Item Discrimination Report** – flag weak criteria (\<0.2 correlation).

* **Question Bank Stats** – difficulty index, distractor efficiency.

* **Content Health Dashboard** – % outdated links, missing assets.

Actions:

* Retire *red* modules; schedule peer review for *amber*; celebrate *green*\!

---

## **7 | Maintenance & House-Keeping**

| Task | Owner | Cadence |
| ----- | ----- | ----- |
| Run “Broken-Link Sweep” | Staff | Monthly |
| Re-train Recommendation Engine | Auto | Nightly |
| Purge unused Drafts (\>90 days) | Staff | Quarterly |
| Audit Rubric inflation | Super-Admin | Semester |
| Export Question Bank for backup | Ops | Weekly |

---

## **8 | Best-Practice Playbook**

1. **Start with Learning Outcome** – everything else flows from LO.

2. Keep **Rubric criteria ≤ 6** to avoid cognitive overload.

3. Use **Bloom level tags**; helps AI generator stay on target.

4. Always **pilot new challenges** with a micro-cohort before full launch.

5. Write **exemplar answers**; they improve AI feedback quality.

6. **Archive, don’t delete** – historical data fuels longitudinal research.

---

## **9 | Troubleshooting FAQ**

| \# | Symptom | Possible Cause | Remedy |
| ----- | ----- | ----- | ----- |
| 1 | Auto-Generator returns bland tasks | Prompt too short | Add domain specifics \+ success criteria |
| 2 | Rubric weights disappear | Draft not saved before navigate | Ctrl \+ S or click *Save* |
| 3 | Students can’t see assignment | Cohort not linked or dates wrong | Edit Assignment → Cohort & Dates |
| 4 | Question bank stats “0 usage” | Item never assigned | Attach to quiz & republish |
| 5 | Recommendation list empty | Engine training failed | Settings ▶ Recommender ▶ Re-train |
| 6 | Content Edit blocked | Version locked | Clone challenge, edit clone |
| 7 | PDF extractor garbled math | OCR layer missing | Use high-resolution PDF or manual paste |
| 8 | Peer-grade mismatch totals | Reviewer quota too low | Increase “reviews per submission” |

---

## **10 | Glossary & Quick Links**

| Term | Definition |
| ----- | ----- |
| **LO** | Learning Outcome |
| **Discriminator** | How well rubric item differentiates high vs low performers |
| **Bloom Level** | Cognitive complexity tier (Remember→Create) |
| **Hybrid Grading** | Auto-grade first, manual adjust by staff |
| **Streaming Feedback** | Live, line-by-line comments during code execution |

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABFCAYAAAC/iY+qAAAE30lEQVR4Xu2XPW9eRRCFXVAQhIQo80FNEJ2dBlFgUaQHZISQv5r4FyB6aqgRHT2ipOEfBERPAzRYFFFskigoARKHu9bdaHnuzO7e9/OudR7pSPHM2dnNnRNCNjaEEEIIIYQQTXFy9cazRYrzhRjA0MwrzhdiAEMzjzhbCBMGZ1ZxrhAuDM8s4kwhsjBAY8V5QhRhiMaIs4SogkGqFecIUQ3DVCPOEGIUDFRJPC/EaBiqnHhWiJlgsDzxnBAzw3BZ4hmxZg4PD5teCgNG0S/WTOuBCzBkSwschy9SvOuichEC9/vGtUvc38L3yMHLEO+s5eDg4GZYZBT7Fp3vxTFnujt+G+MPdGee0F9zNr2nm/ET+ym973ry68H7vHrK2N6vr269wv3Ns8MBHLws8d4S/JBxyamHxDOd99/d3d3X4887Ozsv0xvgHfzZIno63enuOerv+7z2nPcz6fvXk/t+Ts/0vz7u9DQ3K9S79/1g1b0zdy9vfjvv/lw4eJni3WPJfaT9/f1vrF5/5jbrHrk7vJ5Xj3h9rx7welbdqkW8nlVLObmy9XCRu3sOQ7Fs8f4xeB8vkOuNITen1GMtMkvPu6uv/2jVWYtYPatGTq7ceLKIvf0PBmIV4hs84ken6At49RzdmducPesdXq/76+xTzqZ4JuD1rFrAqwc4q//549TjMXZnRRiGVYnvINYH5IdLCfVuuQ9Z99je3n7BmlW6I/y/IesB78zR0dFLXi+H9w6rFvDqkbRf8pKafVXDIKxSfEsk97GteiDXs/D8Xj1Q6rEWyfU8vLusWsCrR0K/+wP5YadPSt6lwhCsWnxPxPoo3hIiVt+q9fVfnLrpj4Ret7Qz1kpnrH4/6wPWA7kzrAW8eqT7R9VX3syVwgCsQ3xTIH6cVLFObwrP5Pz01dyxt7f3jncmd45ngrqwHdMX8eZZtYBXT/FmrhQuf13iu8TiUeAgvk0slrWHLcClr1t8n1gMk/ivW4ALT/XXF58NRE9O927unJ853dwe9HLiG8V8TCZsAS47lQU9VA08Y4nvFBcELroUHnqe6423aM0yOG+IbxUXAC45lQU9QWcP/qStCs6xxPeKxuGCU1nQc/rm27SMgvMs8c2iYbjcVBY1nrFwpiW+WzQKF1sKU6kf4ayc/+Ta0GuJbxcNwqWWAlLqBzhn3jOp+H7RGFxoKosxfUtn/zzmkXPo83T36uYhfw+iIbjQVBa5XoAzLFnQ40mBaxwuNJVFrhfgDEse9FlS4BqHCy0FI9e7//6twQxLHvRZUuAahwstBaOmV5IHfZYUuMbhQkvBqOmV5EGfJQWucbjQUjByvdOtdwczLHnQZ0mBaxwutBSMXC/AGZY86LOkwDUOF1oKRq4X4AxLFk//OB74LClwjcOFloIRe/c/eo+tczhjoNfyc0tS4BqHC01lUeoHOGfeM6kUuMbhQlNZlPqBv7//bjAr5z97/Gjg9aTANQ4XmsqixhOJHu+v3whn5qTANQ4XmsqixjMGzitJgWscLjSVBT2erxbOKkmBaxwuNJUFPTlvCc6okQLXOFxoKgt6Uj36+kvaTXhujBS4xuFCU1nQ48mCnlmkwDUOFzp1KXCNw4VOXQpc43ChU5cC1zhc6NSlwDUOFzp18f2iQbjUKYtvF0IIIYQQQggxcf4DypenEkLHlLsAAAAASUVORK5CYII=>