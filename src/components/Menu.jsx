const menuItems = [
    { name: "محاشي", emoji: "🍚", desc: "كوسا، باذنجان، وورق عنب" },
    { name: "مقلوبة", emoji: "🍗", desc: "باذنجان أو زهرة مع دجاج/لحم" },
    { name: "كبسة", emoji: "🍖", desc: "أرز طويل الحبة مع توابل خاصة" },
    { name: "يخنات شرقية", emoji: "🥘", desc: "بامية، فاصوليا، ملوخية" },
    { name: "ورق عنب", emoji: "🥗", desc: "بدبس الرمان الحامض" },
    { name: "معجنات شرقية", emoji: "🍞", desc: "سبانخ، جبنة، ولحمة" },
    { name: "حلويات شرقية", emoji: "🍰", desc: "حسب الطلب" },
  ];
  
  const Menu = () => {
    return (
      <section id="menu" className="section-padding bg-[var(--color-primary)] text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-[Amiri]">أطباقنا المميزة</h2>
            <p className="text-[var(--color-beige-200)] text-lg">ⓘ المنيو يتغير يومياً حسب الطلب</p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-[var(--color-secondary)]/50 border border-[var(--color-beige-300)]/10 p-6 rounded-2xl hover:bg-[var(--color-secondary)] transition-all duration-300 hover:scale-[1.02] group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                <h3 className="text-2xl font-bold mb-2 font-[Amiri] text-[var(--color-orange)]">{item.name}</h3>
                <p className="text-[var(--color-beige-300)]">{item.desc}</p>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-12">
            <a href="#order" className="inline-block border-2 border-[var(--color-orange)] text-[var(--color-orange)] px-8 py-3 rounded-full font-bold hover:bg-[var(--color-orange)] hover:text-[var(--color-primary)] transition-all duration-300">
              تصفح القائمة الكاملة
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Menu;
  
