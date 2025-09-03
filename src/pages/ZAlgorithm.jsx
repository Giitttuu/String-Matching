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

const zCode = `function zAlgorithmSearch(text, pattern) {
  const s = pattern + '$' + text;
  const z = new Array(s.length).fill(0);
  let l = 0, r = 0;
  for (let i = 1; i < s.length; i++) {
    if (i <= r) z[i] = Math.min(r - i + 1, z[i - l]);
    while (i + z[i] < s.length && s[z[i]] === s[i + z[i]]) z[i]++;
    if (i + z[i] - 1 > r) { l = i; r = i + z[i] - 1; }
  }
  const m = pattern.length;
  const matches = [];
  for (let i = m + 1; i < s.length; i++) 
    if (z[i] === m) matches.push(i - m - 1);
  return matches;
}`;

function ZAlgorithm() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="w-full">
        <Card className="p-6 space-y-6 text-left">
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Z-Algorithm</h1>
            <p className="text-muted-foreground">
              Z-Algorithm builds a{" "}
              <span className="font-semibold">Z-array</span> to quickly detect
              matches between the prefix and substrings of text.
            </p>
          </div>

          {/* How it Works */}
          <CardContent className="p-0 space-y-2">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-500">
              <BookOpen className="w-6 h-6 text-blue-400" />
              How it Works
            </h2>
            <p>
              It computes the <span className="font-semibold">Z-array</span>,
              where each entry represents the longest substring starting at that
              position that matches the prefix. This enables efficient substring
              search.
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
              {zCode}
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
                src="/z_img.webp"
                alt="Z-Algorithm illustration"
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
              <li>Fast substring search in text editors</li>
              <li>Genome sequence analysis</li>
              <li>Detecting repeats and prefix structures in strings</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ZAlgorithm;
