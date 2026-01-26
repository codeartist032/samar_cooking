const About = () => {
    return (
      <section id="about" className="section-padding bg-[var(--color-beige-100)] text-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-6 font-[Amiri]">
              من نحن - بيت الأصالة
            </h2>
            <div className="w-24 h-1 bg-[var(--color-orange)] mx-auto mb-8 rounded-full"></div>
            
            <p className="text-lg sm:text-xl text-[var(--color-secondary)] leading-relaxed font-[Tajawal]">
              مشروع طبخ منزلي متخصص بالمأكولات الشرقية. 
              نلتزم بالطعم الأصيل، النظافة، والكمية المشبعة. 
              <br className="my-4"/>
              <strong>كل وجبة تنطبخ بحب وكأنها لأهل البيت ❤️</strong>
            </p>
          </div>
        </div>
        
        {/* Decorative elements - faint islamic pattern could go here */}
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[var(--color-orange)] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--color-primary)] rounded-full opacity-5 blur-3xl"></div>
      </section>
    );
  };
  
  export default About;
  
