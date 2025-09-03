import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card.jsx";
import {
  BookOpen,
  Lightbulb,
  Zap,
  ListChecks,
  Rocket,
  Microscope,
  Search,
} from "lucide-react";

function Index() {
  return (
    <div className="w-100vw min-h-screen p-8">
      <div className="w-full space-y-12 mt-16">
        {/* Card */}
        <Card className="backdrop-blur-lg shadow-2xl rounded-3xl border border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-3 text-left">
              <BookOpen className="w-7 h-7 text-purple-400" />
              What is a String Matching Algorithm?
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-8 text-gray-300 leading-relaxed text-lg text-left">
            {/* Definition */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-purple-400">
                <Lightbulb className="w-6 h-6" />
                Definition
              </h2>
              <p>
                A{" "}
                <span className="font-bold text-white">
                  string matching algorithm
                </span>
                is a method used to find the position(s) of a{" "}
                <span className="font-semibold text-purple-300">
                  substring (pattern)
                </span>
                within a larger{" "}
                <span className="font-semibold text-purple-300">
                  string (text)
                </span>
                . Think of it as a computational{" "}
                <span className="italic">Ctrl+F</span>, optimized for speed in
                massive datasets.
              </p>
            </section>

            {/* Explanation */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-pink-400">
                <ListChecks className="w-6 h-6" />
                How it Works
              </h2>
              <p>
                Instead of brute force checking character by character (which is{" "}
                <span className="text-red-400">O(n·m)</span>), efficient
                algorithms skip redundant checks using{" "}
                <span className="font-semibold text-pink-300">
                  hashing, failure functions, or prefix arrays
                </span>
                .
              </p>
              <p className="mt-2">
                Example: Text →{" "}
                <code className="bg-black/40 px-2 py-1 rounded">
                  "ababcabcabababd"
                </code>
                Pattern →{" "}
                <code className="bg-black/40 px-2 py-1 rounded">"ababd"</code>
                Result → Match found at index{" "}
                <span className="text-green-400 font-bold">10</span>.
              </p>
            </section>

            {/* Popular Algorithms */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-400">
                <Zap className="w-6 h-6" />
                Popular Algorithms
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>Naive Search → Brute force</li>
                <li>KMP → Uses failure (LPS) function</li>
                <li>Rabin–Karp → Hashing (rolling hash)</li>
                <li>Z-Algorithm → Precomputed Z-array</li>
                <li>Boyer–Moore → Smart skipping heuristics</li>
              </ul>
            </section>

            {/* Applications */}
            <section>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-400">
                <Rocket className="w-6 h-6" />
                Real-World Applications
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <Search className="inline w-4 h-4 text-green-300" /> Search
                  engines (keyword detection)
                </li>
                <li>
                  <BookOpen className="inline w-4 h-4 text-green-300" />{" "}
                  Plagiarism detection
                </li>
                <li>
                  <Microscope className="inline w-4 h-4 text-green-300" />{" "}
                  DNA/protein sequence matching
                </li>
                <li>📝 Text editors (Find/Replace)</li>
                <li>🛡 Spam filters & log analyzers</li>
              </ul>
            </section>

            {/* Illustration */}
            {/* <div className="flex justify-start">
              <img
                src="/home_img.jpg"
                alt="String Matching Illustration"
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 max-w-2xl h-auto"
              />
            </div> */}

            {/* Closing */}
            {/* <p className="text-lg mt-4">
              Use the navbar to explore{" "}
              <span className="font-semibold text-purple-400">KMP</span>,{" "}
              <span className="font-semibold text-pink-400">Rabin-Karp</span>,{" "}
              and{" "}
              <span className="font-semibold text-red-400">Z-Algorithm</span> —
              each with explanations, annotated code, and real-world examples.
            </p> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Index;
