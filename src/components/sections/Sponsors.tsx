export default function Sponsors() {
  return (
    <section id="sponsors" className="scroll-mt-32 container mx-auto px-6 py-10 md:py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white relative inline-block">
          <span className="bg-gradient-to-r from-white via-purple-200 via-cyan-200 to-white bg-clip-text text-transparent">Sponsors</span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-emerald-500 rounded-full opacity-80"></span>
        </h2>
      </div>

      {/* Gold Sponsors */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-yellow-400 mb-6">Gold Sponsors</h3>
        <div className="grid gap-8 md:grid-cols-3 place-items-center max-w-4xl mx-auto">
          <div className="p-6 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl border border-yellow-400/30 backdrop-blur-sm">
            <a href="https://devfolio.co/" target="_blank" rel="noopener noreferrer"> 
            <img 
              src="/Devfolio.svg" 
              alt="DEVFOLIO LOGO" 
              className="w-auto h-32 rounded-lg shadow-lg bg-white p-4" 
            />
            </a>
          </div>
          <div className="p-6 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl border border-yellow-400/30 backdrop-blur-sm">
            <a href="https://www.steamsmithsystems.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/Steam-Smith-Logo-1.png" 
              alt="PERPLEXITY LOGO" 
              className="w-auto h-32 rounded-lg shadow-lg bg-white p-4" 
            />
            </a>
          </div>
          <div className="p-6 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl border border-yellow-400/30 backdrop-blur-sm">
            <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/perplexity.png" 
              alt="PERPLEXITY LOGO" 
              className="w-auto h-32 rounded-lg shadow-lg bg-white p-4" 
            />
            </a>
          </div>
        </div>
      </div>

      {/* Silver Sponsors */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-300 mb-6">Silver Sponsors</h3>
        <div className="grid gap-8 md:grid-cols-2 place-items-center max-w-2xl mx-auto">
          <div className="p-4 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-xl border border-gray-400/30 backdrop-blur-sm">
          <a href="https://ethindia.co/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/ethindia.svg" 
              alt="ETHINDIA LOGO" 
              className="w-auto h-24 rounded-lg shadow-lg bg-white p-4" 
            />
          </a>

          </div>
          <div className="p-4 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-xl border border-gray-400/30 backdrop-blur-sm">
            <a href="https://polygon.technology/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/polygon.jpg" 
              alt="POLYGON LOGO" 
              className="w-auto h-24 rounded-lg shadow-lg" 
            />
            </a>
          </div>
        </div>
      </div>

      {/* Wanna sponsor us section */}
      <div className="text-center mt-16">
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=opensourceprogrammingclub.vitc@gmail.com&su=Sponsorship Inquiry&body=Hello! I'm interested in sponsoring VOID hackathon. Please let me know more about the sponsorship opportunities."
          className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-white/30 group hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">💰</span>
          <div className="text-left">
            <p className="text-white font-semibold">Want to sponsor us?</p>
            <p className="text-white/70 text-sm">Join our mission to empower builders</p>
          </div>
          <span className="text-2xl group-hover:-rotate-12 transition-transform duration-300">✨</span>
        </a>
      </div>
    </section>
  );
}