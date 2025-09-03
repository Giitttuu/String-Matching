# String Matching Visualiser

An interactive React + Vite app to learn, run, and compare classic string matching algorithms with step-by-step visualisation and performance analysis.

## Features

- Visualiser with play/pause/step and adjustable speed
- Active-step highlighting of the current pattern window
- Algorithms: KMP, Rabin–Karp, Z-Algorithm
- Performance analysis: time and comparisons, charts and summaries
- File upload for large text inputs
- Dedicated algorithm pages with definitions, code, diagrams, and examples

## Tech Stack

- React 18 + React Router
- Vite 5
- Tailwind CSS
- Recharts (charts)
- Lucide Icons
- react-syntax-highlighter (code blocks)

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

The app runs at http://localhost:5173

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    StringMatcher.jsx      # Visualiser + performance analysis
    ui/                    # Reusable UI primitives
    Nav.jsx                # Top navigation
  pages/
    Index.jsx              # Home (introduction)
    Visualiser.jsx         # Hosts StringMatcher
    Algorithms.jsx         # Algorithms index (tabs)
    Kmp.jsx                # KMP page
    RabinKarp.jsx          # Rabin–Karp page
    ZAlgorithm.jsx         # Z-Algorithm page
```

## Usage Tips

- Use the Visualiser to run with a chosen algorithm and watch step-by-step playback.
- Toggle speed from the controls and restart playback by pressing Play again at the end.
- Use Benchmark All to compare algorithms on the same input.

## Assets

Place images in `public/` and reference them with `/your_file_name.ext`.

---

Made by Lokesh Singh 🔥
