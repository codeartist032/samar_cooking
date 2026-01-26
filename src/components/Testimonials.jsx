const testimonials = [
    {
      name: "أم أحمد",
      text: "الأكل طيب ونضيف وطعمه مثل البيت تماماً، الله يعطيكي العافية",
      stars: 5,
    },
    {
      name: "محمد علي",
      text: "التزام بالوقت وكميات ممتازة، ضيوفي انبسطوا كثير",
      stars: 5,
    },
    {
       name: "سارة كمال",
       text: "ورق العنب خيااال! حامض وذايب، أنصح فيه بشدة",
       stars: 5
    }
  ];
  
  const Testimonials = () => {
    return (
      <section className="py-16 bg-[var(--color-bg-light)]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-[Amiri] text-[var(--color-primary)]">آراء زبائننا</h2>
          </div>
  
          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md max-w-sm w-full border border-[var(--color-beige-300)]/30">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(review.stars)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-[var(--color-secondary)] mb-4 italic">"{review.text}"</p>
                <h4 className="font-bold text-[var(--color-primary)]">- {review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  
