import Link from "next/link";

export default function IoTSmartFan() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <Link href="/projects" className="text-sm text-neutral-500 hover:text-black transition-colors">
            ← Back to outputs
          </Link>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mt-4">
            IoT Smart Fan
          </h1>
          <p className="mt-2 text-lg text-neutral-700">
            Personal Project
          </p>
        </header>

        <section className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Built a smart fan using an ESP32, an 8x8 thermal camera, and an ambient temperature sensor. 
              The system uses MQTT to communicate with a central HVAC controller and features basic feedback control.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Hardware Components
            </h2>
            <ul className="space-y-2 font-mono text-sm leading-relaxed">
              <li>• ESP32 microcontroller for wireless connectivity and control</li>
              <li>• 8x8 thermal camera for heat mapping and detection</li>
              <li>• Ambient temperature sensor for environmental monitoring</li>
              <li>• DC motor control for fan speed regulation</li>
              <li>• Power management and voltage regulation</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Software Features
            </h2>
            <ul className="space-y-2 font-mono text-sm leading-relaxed">
              <li>• MQTT protocol for IoT communication</li>
              <li>• Real-time thermal imaging and analysis</li>
              <li>• PID control loop for temperature-based fan speed</li>
              <li>• WiFi connectivity and remote monitoring</li>
              <li>• Data logging and analytics</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Technologies & Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                IoT
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                ESP32
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                MQTT
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                Embedded Systems
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                C++
              </span>
              <span className="bg-neutral-100 text-neutral-700 font-mono text-sm px-2 py-1 rounded">
                Control Systems
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light tracking-tight text-black border-b pb-2">
              Learning Outcomes
            </h2>
            <p className="font-mono text-sm leading-relaxed">
              This project demonstrated end-to-end IoT system development, from hardware integration 
              to software implementation. Successfully created a functional smart device that could 
              autonomously respond to environmental conditions and integrate with larger HVAC systems.
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