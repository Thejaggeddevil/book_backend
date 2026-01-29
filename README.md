# 📚 Auto-Flip 3D Digital Library

A dynamic, full-stack web application that transforms a folder of PDF documents into an interactive 3D bookshelf.

## 🚀 Features
* **Automatic Sync:** No need to edit code to add books. Just drop a PDF into the `/books` folder.
* **3D Flipbook Engine:** Uses the DearFlip library to create a realistic page-turning experience.
* **Instant Search:** A real-time search bar to filter through large collections (optimized for 1,000+ books).
* **Smart Backend:** Node.js API that scans the directory and serves file metadata to the frontend.
* **Clean UI:** Responsive grid layout that handles special characters and spaces in filenames automatically.

## 🛠️ Project Structure
* `/books` - The storage folder for your PDF stories.
* `/dflip` - The 3D engine (CSS, JS, and Assets).
* `server.js` - The Node.js Backend (The "Brain").
* `index.html` - The Frontend Interface (The "Face").

## 💻 Setup Instructions

1. **Install Prerequisites:**
   Ensure you have [Node.js](https://nodejs.org/) installed.

2. **Install Dependencies:**
Open your terminal in this folder and run:

```bash
   npm init -y
   npm install express
```

3. Run the App: Start the server by running: 

node server.js

4. View the Library: Open your browser and navigate to http://localhost:3000.

Usage Notes
Naming: You can name your PDFs with spaces and commas (e.g., The Big, Red Feeling.pdf). The app will handle the encoding for you.

Loading: The library uses on-demand loading, meaning it only loads pages as you flip them, saving memory and speed.

---

### Final "Pro" Tip for your developer:
If you ever want to show this to someone on a different computer in your house right now, just find your computer's **IP Address** (e.g., `192.168.1.5`). If they type `http://192.168.1.5:3000` into their phone or laptop (on the same Wi-Fi), **they will see your library too!**

