import React from "react";
import { Card, CardContent } from "../components/ui/card.jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  BookOpen,
  Gauge,
  Lightbulb,
  Code,
  Image as ImageIcon,
} from "lucide-react";

const rkCode = `function rabinKarp(text, pattern) {
  if (!pattern) return [];
  const base = 256, prime = 101;
  const m = pattern.length, n = text.length;
  let p = 0, t = 0, h = 1;
  for (let i = 0; i < m - 1; i++) h = (h * base) % prime;
  for (let i = 0; i < m; i++) {
    p = (base * p + pattern.charCodeAt(i)) % prime;
    t = (base * t + text.charCodeAt(i)) % prime;
  }
  const matches = [];
  for (let i = 0; i <= n - m; i++) {
    if (p === t) {
      let ok = true;
      for (let j = 0; j < m; j++) 
        if (text[i + j] !== pattern[j]) { ok = false; break; }
      if (ok) matches.push(i);
    }
    if (i < n - m) {
      t = (base * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;
      if (t < 0) t += prime;
    }
  }
  return matches;
}`;

function RabinKarp() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="w-full">
        <Card className="p-6 space-y-6 text-left">
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Rabin-Karp</h1>
            <p className="text-muted-foreground">
              Rabin-Karp is a string matching algorithm that uses a{" "}
              <span className="font-semibold">rolling hash</span> to efficiently
              find all occurrences of a pattern in a text.
            </p>
          </div>

          {/* How it Works */}
          <CardContent className="p-0 space-y-2">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-500">
              <BookOpen className="w-6 h-6 text-blue-400" />
              How it Works
            </h2>
            <p>
              Rabin–Karp computes a hash of the pattern and compares it with the
              hash of substrings of the text. Instead of re-checking characters
              every time, it uses a{" "}
              <span className="font-semibold">rolling hash</span> to update the
              window hash in constant time.
            </p>
          </CardContent>

          {/* Complexity */}
          <CardContent className="p-0 space-y-2">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-500">
              <Gauge className="w-6 h-6 text-green-400" />
              Complexity
            </h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                <span className="font-semibold">Best Case:</span> O(n + m) –
                very few hash collisions
              </li>
              <li>
                <span className="font-semibold">Average Case:</span> O(n + m) –
                nearly linear with good hashing
              </li>
              <li>
                <span className="font-semibold">Worst Case:</span> O(n × m) –
                too many hash collisions cause full checks
              </li>
            </ul>
          </CardContent>

          {/* Code Block */}
          <CardContent className="p-0 space-y-2">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-red-500">
              <Code className="w-6 h-6 text-red-400" />
              Code
            </h2>
            <SyntaxHighlighter
              language="javascript"
              style={oneDark}
              customStyle={{
                borderRadius: "0.75rem",
                padding: "1rem",
                fontSize: "0.9rem",
                background: "#1e1e1e",
              }}
              showLineNumbers
            >
              {rkCode}
            </SyntaxHighlighter>
          </CardContent>

          {/* Diagram */}
          <CardContent className="p-0 space-y-2">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-500">
              <ImageIcon className="w-6 h-6 text-pink-400" />
              Diagram
            </h2>
            <div className="w-full flex justify-center mt-2">
              <img
                src="/rabinkarp_img.webp"
                alt="Rabin-Karp illustration"
                className="max-w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </CardContent>

          {/* Real-world Examples */}
          <CardContent className="p-0 space-y-2">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-purple-500">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
              Real-world Examples
            </h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Plagiarism detection across large datasets</li>
              <li>Searching multiple keywords in documents</li>
              <li>DNA/protein sequence matching</li>
              <li>Log scanning for repeated error patterns</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default RabinKarp;
