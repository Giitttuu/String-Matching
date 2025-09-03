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

const kmpCode = `function kmpSearch(text, pattern) {
  if (!pattern) return [];
  const failure = new Array(pattern.length).fill(0);
  let j = 0;
  for (let i = 1; i < pattern.length; i++) {
    while (j > 0 && pattern[i] !== pattern[j]) j = failure[j - 1];
    if (pattern[i] === pattern[j]) j++;
    failure[i] = j;
  }
  const matches = [];
  j = 0;
  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) j = failure[j - 1];
    if (text[i] === pattern[j]) j++;
    if (j === pattern.length) {
      matches.push(i - j + 1);
      j = failure[j - 1];
    }
  }
  return matches;
}`;

function Kmp() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="w-full">
        <Card className="p-6 space-y-6 text-left">
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">KMP (Knuth–Morris–Pratt)</h1>
            <p className="text-muted-foreground">
              KMP is a string searching algorithm that skips redundant
              comparisons using a{" "}
              <span className="font-semibold">failure function</span>.
            </p>
          </div>

          {/* How it Works */}
          <CardContent className="p-0 space-y-2">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-500">
              <BookOpen className="w-6 h-6 text-blue-400" />
              How it Works
            </h2>
            <p>
              Instead of re-checking already matched characters after a
              mismatch, KMP uses a{" "}
              <span className="font-semibold">
                precomputed LPS (Longest Prefix Suffix) array
              </span>
              to decide where to continue. This makes it efficient for large
              texts.
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
                <span className="font-semibold">Best Case:</span> O(n + m)
              </li>
              <li>
                <span className="font-semibold">Average Case:</span> O(n + m)
              </li>
              <li>
                <span className="font-semibold">Worst Case:</span> O(n + m)
              </li>
            </ul>
          </CardContent>

          {/* Code */}
          <CardContent className="p-0">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-red-500">
              <Code className="w-6 h-6 text-red-400" />
              Code
            </h2>
            <SyntaxHighlighter
              language="javascript"
              style={oneDark}
              showLineNumbers
              customStyle={{
                borderRadius: "0.75rem",
                padding: "1rem",
                fontSize: "0.9rem",
                background: "#1e1e1e",
              }}
            >
              {kmpCode}
            </SyntaxHighlighter>
          </CardContent>

          {/* Diagram */}
          <CardContent className="p-0">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-500">
              <ImageIcon className="w-6 h-6 text-pink-400" />
              Diagram
            </h2>
            <div className="w-full flex justify-center mt-2">
              <img
                src="/kmp_img.webp"
                alt="KMP illustration"
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
              <li>Finding keywords in large documents/logs</li>
              <li>DNA/protein sequence matching</li>
              <li>IDE find/replace functionality</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Kmp;
