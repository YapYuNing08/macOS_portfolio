# Yu Ning's macOS Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logoColor=white)

A macOS-inspired personal portfolio website. Built to simulate a real desktop environment, this portfolio is used to showcase my projects, skills, and resume.

## ✨ Features

* **Desktop Environment:** Interactive desktop with draggable folder icons that open via double-click.
* **Draggable Windows:** Smooth, physics-based window dragging powered by GSAP.
* **Window Management:** Advanced z-index state management ensures the focused window always comes to the front, just like a real OS.
* **Functional Dock:** Animated macOS-style dock for launching applications.
* **Custom Applications:**
  * 📁 **Finder:** Browse through projects, images, and text files with a simulated file system.
  * 👨‍💻 **Terminal:** A command-line interface that renders my technical skills and stacks.
  * 📄 **Resume:** An integrated PDF viewer.
  * 📬 **Contact:** A sleek contact widget featuring social links and a built-in messaging form.
  * 🖼️ **Preview:** Native-looking image and text file viewers.

## 🛠️ Tech Stack Details

* **Framework:** [React.js](https://react.dev/) + [Vite](https://vitejs.dev/) for lightning-fast module replacement and builds.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) for pixel-perfect, utility-first styling.
* **Animations:** [GSAP](https://gsap.com/) (`@gsap/react` and `Draggable`) for physics-based, 60fps window interactions.
* **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) (with Immer) for managing complex, globally accessible window configurations.
