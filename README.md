# 🎰 Blackjack Interface — Praeses Challenge

A clean, responsive Blackjack interface built with **HTML**, **CSS**, and **JavaScript**, designed for clarity, accessibility, and ease of use.  
This project demonstrates practical UI/UX design principles—balance, hierarchy, and interaction feedback—brought together in a modern web experience.

---

## 🎨 Design Decisions

### 🧱 Layout & Structure
- **Dealer area** anchored at the top for clear visual hierarchy.  
- **Player section** pinned to the bottom with betting and action controls grouped logically.  
- **No vertical scroll** on mobile — the play area fills the entire viewport.  
- **Grid/Flexbox layout** ensures scalability across desktop, tablet, and mobile.  

### 💅 Visual System
- Primary color palette built around **deep blue** (`#01426a`) for trust and focus.  
- Supporting accents in **green** (`#219c46`) and **gold** (`#cfb147`) for contrast and clarity.  
- **reset.css** normalizes default browser styles for visual consistency.  
- Subtle shadows and rounded corners create a refined, tactile aesthetic.  

### ♿ Accessibility
- WCAG-compliant color contrast on all primary and secondary components.  
- Keyboard-focus outlines for all actionable elements.  
- Clear text hierarchy (labels, headers, values) for screen readers.  

### 🧮 Interactions & Feedback
- **Betting chips:** $1, $5, $10 — cumulative up to **$50 max**.  
- **Alert** appears when the betting cap is reached.  
- **Clear All** resets all bets and chip selections.  
- **Action buttons** (Hit, Stand, Split, Double, Insurance) toggle dynamically based on state.  

---

## 💻 Tech Stack

- **HTML5** – semantic layout & ARIA structure  
- **CSS3** – Flexbox, responsive breakpoints, tokens for theming  
- **reset.css** – baseline consistency across browsers  
- **Vanilla JavaScript (ES6)** – event handling and UI logic  

---

## ▶️ How to View the Project

### 🔹 Option 1 — Quick View
Double-click `index.html` to open in your browser.

### 🔹 Option 2 — Local Server (Recommended)
If your JS imports require a local host:
```bash
python3 -m http.server 8080





## 📂 Folder Structure

praeses_blackjack/
├─ index.html                  # Main application shell
├─ styles/
│  ├─ reset.css                # Normalizes browser defaults
│  └─ styles.css               # Visual layout, components, and theme tokens
├─ scripts/
│  └─ main.js                  # Interactive logic and event handling
└─ assets/
   └─ img/                     # UI images and assets (cards, chips, icons)





## 👩‍🎨 Author

Jennifer G. Hollis
https://github.com/jghollis