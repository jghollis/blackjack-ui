# 🎰 Blackjack Interface — Praeses Challenge

A clean, responsive Blackjack interface built with **HTML**, **CSS**, and **JavaScript**, designed for clarity, accessibility, and smooth user interaction.  
This project demonstrates modern UI/UX design principles — balance, hierarchy, and intuitive feedback — brought together in a sleek, web-based experience.



## 🧭 Screen Flow

| Screen | Description | Navigation |
|:-------|:-------------|:------------|
| **index.html** | Landing screen — click **Deal** to start | → `dealt_won.html` |
| **dealt_won.html** | Cards are dealt, showing win/loss and action options — click **New Game** | → `new_game.html` |
| **new_game.html** | Resets and loops back to the start — click **Deal** | → `all_content.html` |
| **all_content.html** | Sandbox view showing all UI components for testing | Used for development and component inspection |


## 🎨 Design Decisions

### **Research**
Studied Blackjack mechanics to inform interaction logic:
- Min/Max bets — $2 to $500  
- Deal sequence (player/dealer flow)  
- Naturals, busts, and stand-off conditions  
- Player decision points (Hit, Stand, Split, Double, Insurance)

### **Ideate**
Explored comparable interfaces for UX inspiration:
- **Yahoo Games** – Blackjack Single Deck  
- **7 Seas Casino**  
- **iOS Blackjack** app for clean mobile ergonomics  

Sketched early wireframes and refined them into low-fi and hi-fi prototypes with a focus on clarity and feedback.

### **Design**
- WCAG-compliant color palette and typography for readability  
- Focused on vertical rhythm: dealer → table/actions → player → bet area  
- Used Figma for spacing, component states, and design system documentation  

### **Prototype & Test**
Iterated based on playtesting feedback:
- Adjusted chip layout and card overlap ratios  
- Refined overall board layout for readability and balance  
- Optimized spacing between dealer, player, and betting rows  
- Re-tested for mobile scaling and touch comfort  



## 🧱 Layout & Structure
- **Dealer area:** fixed at the top for clarity and visual hierarchy  
- **Action bar:** centered controls (Split, Insurance, Double, Hit, Stand) with priority order  
- **Betting area:** anchored at the bottom with chips and value indicators  
- **Full-viewport gameplay:** no scrolling on mobile or desktop  
- **Flexbox + Grid:** ensures seamless responsiveness across breakpoints  

## 💅 Visual System
- **Primary color:** Deep Blue Table `#001242` — focus and calm  
- **Accents:** Green `#008000` for actions, Red `#CC0000` for max bet alerts  
- Rounded corners, soft shadows, and subtle gradients for realism  
- `reset.css` normalizes cross-browser rendering  
 

## ♿ Accessibility
- WCAG 2.1 AA color contrast validated  
- Keyboard focus and ARIA labels for all interactive elements  
- Logical reading order across breakpoints for assistive technologies  
  

## 🧮 Interactions & Feedback
- **Bet Chips:** $1, $5, $10, $50 — up to $500 max  
- **Alert System:** warns when the cap is reached  
- **Undo/Clear:** removes last or all bets  
- **Action Buttons:** dynamically enable/disable based on state  
- **Smooth transitions:** maintain layout continuity during state changes  


## 💻 Tech Stack
- **HTML5** – Semantic markup and accessibility hooks  
- **CSS3** – Bootstrap, Flexbox, Grid, and responsive theming  
- **reset.css** – Normalized cross-browser defaults  
- **JavaScript (ES6)** – UI logic and interactivity  


## ▶️ How to View the Project

### 🔹 Option 1 — Quick View
Double-click `index.html` to open in your browser.

### 🔹 Option 2 — Local Server (Recommended)
If your JS imports require localhost:
```bash
python3 -m http.server 8080




## 📂 Folder Structure

blackjack-ui/
├─ index.html              # Landing screen  
├─ dealt_won.html          # Cards dealt, win/loss screen  
├─ new_game.html           # Reset and restart screen  
├─ all_content.html        # Sandbox with all UI components  
├─ main.js                 # Interactive logic and event handling  
├─ css/                    # Stylesheets  
│  ├─ reset.css            # Normalizes browser defaults  
│  └─ styles.css           # Visual layout, components, and theme tokens  
└─ assets/  
   └─ img/                 # UI mock images and assets (cards, chips, icons)



## 👩‍🎨 Author

Jennifer G. Hollis
https://github.com/jghollis