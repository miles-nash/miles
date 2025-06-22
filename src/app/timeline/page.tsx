export default function Timeline() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">Timeline</h1>
          <p className="mt-2 text-lg text-neutral-700">
            A journey from early curiosity to building at the intersection of hardware, systems, and spirit.
          </p>
        </header>

        {/* Visual Timeline */}
        <div className="py-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-neutral-300"></div>
            
            {/* Timeline items */}
            <div className="relative flex justify-between items-start">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="text-center">
                  <div className="text-sm font-medium">Maker Faire</div>
                  <div className="text-xs text-neutral-500">2012</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="text-center">
                  <div className="text-sm font-medium">Lockheed</div>
                  <div className="text-xs text-neutral-500">2016-2018</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="text-center">
                  <div className="text-sm font-medium">Berkeley</div>
                  <div className="text-xs text-neutral-500">2018-2022</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="text-center">
                  <div className="text-sm font-medium">Tesla</div>
                  <div className="text-xs text-neutral-500">2022-2023</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="text-center">
                  <div className="text-sm font-medium">Today</div>
                  <div className="text-xs text-neutral-500">Microsoft</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <section className="space-y-6">
            <p className="text-lg leading-relaxed">
              It started at a Maker Faire when I was 12. Something clicked — I realized I could understand how things work, and more importantly, I could make them work. This curiosity became the foundation for everything that followed.
            </p>
            
            <p className="text-base leading-relaxed">
              In high school, I founded a robotics club that grew to 30+ members and won a Lockheed Martin hovercraft hackathon, leading to three summer internships. At UC Berkeley, I studied EECS and built a full TCP stack in Python, exploring the intersection of technical execution and humanistic thinking.
            </p>

            <p className="text-base leading-relaxed">
              At Tesla, I managed wireless entry systems for the Model Y, gaining deep insight into high-stakes manufacturing. But I also witnessed the dark side of speed — innovation clashing with worker well-being. This experience fundamentally changed how I think about technology's role in society.
            </p>

            <p className="text-base leading-relaxed">
              I returned to Berkeley for my final year, studying Engineering, Environment & Society to understand tech's human implications. Now at Microsoft, I'm working on Cloud Operations & Innovation, building AI-native tools and systems that apply everything I've learned about systems thinking and ethical technology.
            </p>
          </section>
        </div>

        <footer className="border-t pt-6 text-sm text-neutral-500">
          <a href="/" className="hover:underline">← Back home</a>
        </footer>
      </div>
    </main>
  );
} 