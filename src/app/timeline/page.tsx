export default function Timeline() {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="border-b pb-8">
          <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">Timeline</h1>
          <p className="mt-4 text-xl text-neutral-600 font-light">
            A journey from early curiosity to building at the intersection of hardware, systems, and spirit.
          </p>
        </header>

        {/* Quote */}
        <div className="py-6 border-l-4 border-neutral-200 pl-6">
          <blockquote className="text-lg italic text-neutral-700 leading-relaxed">
            "The journey of a thousand miles begins with one step."
          </blockquote>
          <cite className="block mt-2 text-sm text-neutral-500">— Lao Tzu</cite>
        </div>

        {/* Futuristic Visual Timeline */}
        <div className="py-16">
          <div className="relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-1 h-20 bg-gradient-to-b from-transparent via-blue-200 to-transparent animate-pulse"></div>
              <div className="absolute top-0 right-1/3 w-1 h-16 bg-gradient-to-b from-transparent via-purple-200 to-transparent animate-pulse delay-1000"></div>
              <div className="absolute top-0 left-2/3 w-1 h-24 bg-gradient-to-b from-transparent via-green-200 to-transparent animate-pulse delay-500"></div>
            </div>

            {/* Main timeline line with gradient */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neutral-400 via-neutral-300 via-neutral-400 to-transparent"></div>
            
            {/* Timeline items with creative design */}
            <div className="relative grid grid-cols-5 gap-8">
              {/* 2012 - Maker Faire */}
              <div className="flex flex-col items-center group">
                <div className="relative mb-8">
                  {/* Outer ring */}
                  <div className="absolute inset-0 w-8 h-8 border border-blue-200 rounded-full animate-spin-slow"></div>
                  {/* Inner circle */}
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-full transition-all duration-500 group-hover:border-blue-500 group-hover:scale-125 group-hover:shadow-lg"></div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-6 h-6 bg-blue-200 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-sm font-medium tracking-wider text-blue-800">MAKER FAIRE</div>
                  <div className="text-xs text-neutral-500 font-light">2012</div>
                  <div className="w-1 h-4 bg-gradient-to-b from-blue-200 to-transparent mx-auto"></div>
                </div>
              </div>
              
              {/* 2016-2018 - Lockheed */}
              <div className="flex flex-col items-center group">
                <div className="relative mb-8">
                  <div className="absolute inset-0 w-8 h-8 border border-purple-200 rounded-full animate-spin-slow-reverse"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-full transition-all duration-500 group-hover:border-purple-500 group-hover:scale-125 group-hover:shadow-lg"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-purple-200 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-sm font-medium tracking-wider text-purple-800">LOCKHEED</div>
                  <div className="text-xs text-neutral-500 font-light">2016-2018</div>
                  <div className="w-1 h-4 bg-gradient-to-b from-purple-200 to-transparent mx-auto"></div>
                </div>
              </div>
              
              {/* 2018-2022 - Berkeley */}
              <div className="flex flex-col items-center group">
                <div className="relative mb-8">
                  <div className="absolute inset-0 w-8 h-8 border border-green-200 rounded-full animate-spin-slow"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-full transition-all duration-500 group-hover:border-green-500 group-hover:scale-125 group-hover:shadow-lg"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-green-200 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-sm font-medium tracking-wider text-green-800">BERKELEY</div>
                  <div className="text-xs text-neutral-500 font-light">2018-2022</div>
                  <div className="w-1 h-4 bg-gradient-to-b from-green-200 to-transparent mx-auto"></div>
                </div>
              </div>
              
              {/* 2022-2023 - Tesla */}
              <div className="flex flex-col items-center group">
                <div className="relative mb-8">
                  <div className="absolute inset-0 w-8 h-8 border border-red-200 rounded-full animate-spin-slow-reverse"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-full transition-all duration-500 group-hover:border-red-500 group-hover:scale-125 group-hover:shadow-lg"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-red-200 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-sm font-medium tracking-wider text-red-800">TESLA</div>
                  <div className="text-xs text-neutral-500 font-light">2022-2023</div>
                  <div className="w-1 h-4 bg-gradient-to-b from-red-200 to-transparent mx-auto"></div>
                </div>
              </div>
              
              {/* Today - Microsoft */}
              <div className="flex flex-col items-center group">
                <div className="relative mb-8">
                  <div className="absolute inset-0 w-8 h-8 border border-black rounded-full animate-spin-slow"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-black to-neutral-800 border-2 border-black rounded-full transition-all duration-500 group-hover:scale-125 group-hover:shadow-xl"></div>
                  <div className="absolute inset-0 w-6 h-6 bg-neutral-400 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-sm font-medium tracking-wider text-black">TODAY</div>
                  <div className="text-xs text-neutral-500 font-light">MICROSOFT</div>
                  <div className="w-1 h-4 bg-gradient-to-b from-neutral-400 to-transparent mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-light tracking-wide text-neutral-800">Early Curiosity</h3>
                <p className="text-lg leading-relaxed text-neutral-700 font-light">
                  It started at a Maker Faire when I was 12. Something clicked — I realized I could understand how things work, and more importantly, I could make them work. This curiosity became the foundation for everything that followed.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-light tracking-wide text-neutral-800">Building Foundations</h3>
                <p className="text-lg leading-relaxed text-neutral-700 font-light">
                  In high school, I founded a robotics club that grew to 30+ members and won a Lockheed Martin hovercraft hackathon, leading to three summer internships. At UC Berkeley, I studied EECS and built a full TCP stack in Python.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-light tracking-wide text-neutral-800">Tesla Experience</h3>
                <p className="text-lg leading-relaxed text-neutral-700 font-light">
                  At Tesla, I managed wireless entry systems for the Model Y, gaining deep insight into high-stakes manufacturing. But I also witnessed the dark side of speed — innovation clashing with worker well-being.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-light tracking-wide text-neutral-800">Present & Future</h3>
                <p className="text-lg leading-relaxed text-neutral-700 font-light">
                  I returned to Berkeley for my final year, studying Engineering, Environment & Society. Now at Microsoft, I'm working on Cloud Operations & Innovation, building AI-native tools and systems that apply everything I've learned.
                </p>
              </div>
            </div>
          </section>
        </div>

        <footer className="border-t pt-8 text-sm text-neutral-500">
          <a href="/" className="hover:text-black transition-colors duration-200">← Back home</a>
        </footer>
      </div>
    </main>
  );
} 