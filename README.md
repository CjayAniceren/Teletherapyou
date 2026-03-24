# 🌈 Teletherapyou

## ✨ About this project
Teletherapyou is a polished mental wellness web experience built as a lightweight static app with an MVC pattern:
- **Daily Journal** with calendar moods
- **Resource Library** (mental health content + self-care tools)
- **Therapist directory** with quick booking
- **Appointment scheduler** by provider

✅ Reorganized into MVC to keep data, UI, and behavior separate and maintainable.

## 📁 Project structure (after MVC refactor)

**Model**
- `model/psychiatristsModel.js` - centralized data and model helper functions

**View**
- `view/index.html` (formerly `main.html`) - app shell with sidebar + iframe content
- `view/journal.html` - journaling experience
- `view/resources.html` - resource gallery
- `view/therapists.html` - therapist cards
- `view/scheduling.html` - booking form
- `view/css/` - styles for each page (`index.css`, `journal.css`, `resources.css`, `therapists.css`, `scheduling.css`, `side.css`)

**Controller**
- `controller/side.js` - navigation and iframe controller
- `controller/journal.js` - journal entry/calendar behavior
- `controller/resources.js` - resource listing behavior
- `controller/therapists.js` - therapist card generation and navigation
- `controller/scheduling.js` - scheduler form/confirmation logic

## 🎯 New entrypoint
- Open `view/index.html` in browser.
- Navigation routed through sidebar links and iframe.
- Therapist cards route to `scheduling.html?doctorId=<id>`.

## ⏯️ Run locally (recommended)
```bash
cd /workspaces/Teletherapyou
python3 -m http.server 8000
```
Visit: `http://localhost:8000/view/index.html`

## 🛠️ Notes
- Modern ES modules used in controllers (`type="module"` imports).
- All psychiatrist data is in the model and consumed by controllers.
- Pages are now MVC-friendly and easier to extend.

## 💡 Idea board (next improvements)
- Local persistence for journal & appointment data (e.g., `localStorage`, backend API)
- Login/auth flow and user profile
- Calendar slot availability / booking conflict checks
- Smooth animation and responsive transitions
- Unit tests for controller logic (jest + DOM testing)

---

### 🌟 Quick status
`main.html` renamed to `view/index.html` and README updated with a branded, more creative visual style.

