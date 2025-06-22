import React from 'react';

const NowPage = () => {
  return (
    <main className="min-h-screen bg-white text-black font-serif p-6 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="border-b pb-6">
          <h1 className="text-4xl md:text-6xl font-light leading-tight">
            /now
          </h1>
        </header>
        <section className="space-y-4">
          <p className="text-base leading-relaxed">
            This is the /now page. Content will be added here later.
          </p>
        </section>
      </div>
    </main>
  );
};

export default NowPage; 