import Link from "next/link";

export default function CS61Classify() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <Link href="/projects" className="text-sm text-neutral-500 hover:text-black transition-colors">
            ← Back to outputs
          </Link>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mt-4">
            CS61Classify
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            Course Project, UC Berkeley
          </p>
        </header>

        <section className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Wrote a program in RISC-V assembly to classify handwritten digits using a pre-trained neural network. 
              A deep dive into how software runs on the metal.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Project Overview
            </h2>
            <ul className="space-y-2 font-mono text-sm leading-relaxed">
              <li>• Implemented neural network inference in pure RISC-V assembly</li>
              <li>• Handwritten digit classification using MNIST dataset</li>
              <li>• Pre-trained neural network weights and architecture</li>
              <li>• Matrix operations and activation functions in assembly</li>
              <li>• Memory management and optimization techniques</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Technical Implementation
            </h2>
            <ul className="space-y-2 font-mono text-sm leading-relaxed">
              <li>• RISC-V assembly language programming</li>
              <li>• Neural network forward pass implementation</li>
              <li>• Matrix multiplication and vector operations</li>
              <li>• Activation functions (ReLU, softmax)</li>
              <li>• Memory layout and data structure optimization</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Technologies & Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                Assembly
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                RISC-V
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                Neural Networks
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                Low-Level Programming
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                Computer Architecture
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                Machine Learning
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Learning Outcomes
            </h2>
            <p className="font-mono text-sm leading-relaxed">
              This project provided deep understanding of how high-level machine learning algorithms 
              translate to low-level assembly code. Successfully implemented a functional neural network 
              classifier entirely in assembly, demonstrating mastery of both computer architecture 
              principles and machine learning fundamentals.
            </p>
          </div>
        </section>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <Link href="/projects" className="hover:underline">
            ← Back to outputs
          </Link>
        </footer>
      </div>
    </main>
  );
} 