const steps = [
    { num: "1", title: "تختار الطلب", desc: "املأ الفورم بطلبك المفضل" },
    { num: "2", title: "مراجعة الطلب", desc: "نتأكد من التفاصيل والوقت" },
    { num: "3", title: "تجهيز الأكل", desc: "نطبخ طازج في الوقت المحدد" },
    { num: "4", title: "توصيل جاهز", desc: "يوصلك الأكل سخن وشهي" },
  ];
  
  const HowItWorks = () => {
    return (
      <section id="how-it-works" className="section-padding bg-[var(--color-beige-200)] text-[var(--color-primary)]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-[Amiri]">كيف نعمل؟</h2>
            <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          </div>
  
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-[28%] left-10 right-10 h-1 bg-[var(--color-primary)]/20 -z-0"></div>
  
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative z-10 w-full md:w-1/4 group">
                <div className="w-16 h-16 bg-[var(--color-primary)] text-[var(--color-orange)] rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-[var(--color-beige-200)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2 font-[Amiri]">{step.title}</h3>
                <p className="text-[var(--color-secondary)]/80 text-center">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  
