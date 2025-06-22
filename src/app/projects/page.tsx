import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Next-Gen Wireless Hardware",
      role: "Engineering Program Management Intern, Tesla",
      description:
        "Led a cross-functional team of 15 to design, manufacture, and certify a new wireless hardware system. Managed DFM, prototype builds, and supplier coordination across three continents, and helped implement a significant cost-reduction.",
      tags: ["Program Management", "DFM", "Hardware Integration", "Supplier Management"],
    },
    {
      title: "3-Stage RISC-V CPU",
      role: "Personal Project",
      description:
        "Designed and implemented a 3-stage pipelined RISC-V CPU with a 4KB cache in Verilog. Handled the complete VLSI flow from simulation and synthesis to place-and-route using industry-standard Cadence and Synopsys tools.",
      tags: ["Verilog", "RISC-V", "VLSI", "ASIC Design", "Computer Architecture"],
    },
    {
      title: "Satellite Guidance System",
      role: "Software Engineering Intern, Lockheed Martin",
      description:
        "Developed and tested momentum management software for a new generation of commercial satellites. Worked with MATLAB, Simulink, and C++ on the core guidance, navigation, and controls (GNC) system.",
      tags: ["C++", "MATLAB", "Simulink", "Aerospace", "GNC"],
    },
    {
      title: "IoT Smart Fan",
      role: "Personal Project",
      description:
        "Built a smart fan using an ESP32, an 8x8 thermal camera, and an ambient temperature sensor. The system uses MQTT to communicate with a central HVAC controller and features basic feedback control.",
      tags: ["IoT", "ESP32", "MQTT", "Embedded Systems", "C++"],
    },
    {
      title: "CS61Classify",
      role: "Course Project, UC Berkeley",
      description:
        "Wrote a program in RISC-V assembly to classify handwritten digits using a pre-trained neural network. A deep dive into how software runs on the metal.",
      tags: ["Assembly", "RISC-V", "Neural Networks", "Low-Level Programming"],
    },
    {
      title: "Social Startup",
      role: "Co-founder, CTO",
      description:
        "Led a team of 5 to develop an MVP for a social app. We gained over 300 validated customers, conducted 200+ customer interviews, and pitched to VCs as part of the European Innovation Academy.",
      tags: ["Entrepreneurship", "Product Management", "Customer Research"],
    },
    {
      title: "NASA Hunch Trash Ejection System",
      role: "Team Lead, CAD Specialist",
      description:
        "Led a team of four to design and prototype a trash ejection system for future Mars missions. Our team was selected as one of four national finalists for our project.",
      tags: ["CAD", "Mechanical Design", "Prototyping", "Team Leadership"],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-5xl md:text-7xl font-light leading-tight">
            Projects
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            A selection of work from across the stack.
          </p>
        </header>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-3xl font-medium tracking-tight">
                {project.title}
              </h2>
              <p className="text-neutral-700 font-sans italic">
                {project.role}
              </p>
              <p className="text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <Link href="/" className="hover:underline">
            ← Back home
          </Link>
        </footer>
      </div>
    </main>
  );
} 