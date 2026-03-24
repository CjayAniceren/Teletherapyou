# Teletherapyou

## Overview
Teletherapyou is a static single-page style mental health web app with:
- Daily Journal with calendar
- Resource Library
- Therapist directory
- Scheduling/reservation form

This version is refactored into MVC (Model-View-Controller)

## Project Structure

- `model/`
  - `psychiatristsModel.js` - shared data and access APIs for therapist information

- `view/`
  - `main.html` - main layout with sidebar and iframe navigation
  - `journal.html` - journal UI
  - `resources.html` - resource library UI
  - `therapists.html` - therapists list UI
  - `scheduling.html` - appointment scheduling
  - `css/` - styles for each view (`main.css`, `journal.css`, `resources.css`, `therapists.css`, `scheduling.css`, `side.css`)

- `controller/`
  - `side.js` - sidebar navigation controller
  - `journal.js` - journal controller (calendar and entries)
  - `resources.js` - resources list controller
  - `therapists.js` - therapist listing + navigation to scheduler (uses model)
  - `scheduling.js` - appointment form controller (uses model)

## MVC Design
- Model: central state/data in `model/psychiatristsModel.js`
- View: pure HTML/CSS in `view/` and `view/css/`
- Controller: page behavior and user interaction in `controller/`

## Usage
1. Open `view/main.html` in a browser.
2. Use sidebar links to switch between journal, resources, and therapists pages.
3. On therapists page, click a provider card to open `scheduling.html?doctorId=<id>`.

### Run via local server (recommended)
```bash
cd /workspaces/Teletherapyou
python3 -m http.server 8000
```
Open `http://localhost:8000/view/main.html`

## Notes
- `controller/therapists.js` and `controller/scheduling.js` import from `model/psychiatristsModel.js` using ES modules.
- `view/*.html` files now use `type="module"` in scripts to support imports.

## Future Improvements
- Add persistence (localStorage or backend API) for journal entries and appointments.
- Add form validation and error handling.
- Add real authentication and server-side API endpoints.
