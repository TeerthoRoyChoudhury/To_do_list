# TaskMaster Pro

A sleek, minimal task management app built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies, just clean code.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## Preview



> Dark, minimal UI inspired by Nothing OS and SpaceX — pixel-precise borders, grain texture, and monospace typography.

---

## Features

- Add tasks with a title and description
- Edit existing tasks
- Delete tasks
- Persistent storage via `localStorage` — tasks survive page refresh
- Empty state message when no tasks exist
- Duplicate task prevention
- XSS sanitization on all user input
- Press `Enter` to quickly add a task
- Fully responsive — works on mobile

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling, animations, responsive layout |
| Vanilla JavaScript | Logic, DOM manipulation |
| localStorage | Client-side data persistence |
| Font Awesome | Icons |
| Google Fonts | Typography (Barlow, Share Tech Mono) |

---

## Getting Started

No installation or build step needed.

```bash
# Clone the repository
git clone https://github.com/TeerthoRoyChoudhury/taskmaster-pro.git

# Navigate into the folder
cd taskmaster-pro

# Open in browser
open index.html
```

Or just download the ZIP and open `index.html` in any browser.

---

## Project Structure

```
taskmaster-pro/
├── index.html       # Main HTML structure
├── style.css        # All styling and animations
├── app.js           # App logic and localStorage handling
└── README.md        # You are here
```

---

## What I Learned

- DOM manipulation with vanilla JavaScript
- Working with `localStorage` to persist data
- Preventing XSS vulnerabilities by sanitizing user input
- CSS custom properties (variables) for consistent theming
- Responsive design with CSS Grid and media queries
- Event handling (`click`, `keydown`)

---

## Future Improvements

- [ ] Mark tasks as complete
- [ ] Filter tasks by status (Pending / Completed)
- [ ] Drag and drop to reorder tasks
- [ ] Due dates and priority levels
- [ ] Backend integration with a REST API

---

## Author

Teertho RoyChoudhury 
ECE Graduate — VIT Vellore  
[GitHub](https://github.com/TeerthoRoyChoudhury)

---

## License

This project is open source and available under the [MIT License](LICENSE).
