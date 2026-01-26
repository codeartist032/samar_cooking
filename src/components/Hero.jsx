const Hero = () => {
    return (
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3E2723]/90 to-[#3E2723]/70 z-10"></div>
        
        {/* Background Image (Placeholder until provided) */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center z-0"></div>
  
        <div className="relative z-20 container-custom flex flex-col items-center gap-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight font-[Amiri]">
            مأكولات شرقية بطعم البيت... <br />
            <span className="text-[var(--color-orange)]">كأنك ببيت أهلك</span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-[var(--color-beige-200)] max-w-2xl font-[Tajawal]">
            من مطبخ سمر نقدّم أشهى الأكلات الشرقية بمكونات طازجة، طبخ يومي، وطعم أصيل
          </p>
  
          <div className="mt-8">
            <a href="#order" className="bg-[var(--color-orange)] text-[var(--color-text-dark)] text-xl px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(221,161,94,0.5)]">
               اطلب الآن 📝
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  