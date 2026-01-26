import { useState, useEffect } from 'react';

const AppNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#3E2723] shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <span className="text-2xl font-bold text-white font-[Amiri]">بيت الأصالة | مطبخ سمر</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-white font-medium">
          <button onClick={() => scrollToSection('hero')} className="hover:text-[var(--color-orange)] transition-colors">الرئيسية</button>
          <button onClick={() => scrollToSection('menu')} className="hover:text-[var(--color-orange)] transition-colors">المنيو</button>
          <button onClick={() => scrollToSection('how-it-works')} className="hover:text-[var(--color-orange)] transition-colors">كيف نعمل</button>
          <button onClick={() => scrollToSection('order')} className="bg-[var(--color-orange)] text-[var(--color-text-dark)] px-5 py-2 rounded-full font-bold hover:bg-[#b0804b] transition-colors">
            اطلب الآن 🔥
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#3E2723] text-white flex flex-col items-center py-6 gap-6 shadow-xl">
          <button onClick={() => scrollToSection('hero')} className="text-lg">الرئيسية</button>
          <button onClick={() => scrollToSection('menu')} className="text-lg">المنيو</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-lg">كيف نعمل</button>
          <button onClick={() => scrollToSection('order')} className="bg-[var(--color-orange)] text-[var(--color-text-dark)] px-8 py-2 rounded-full font-bold">
            اطلب الآن
          </button>
        </div>
      )}
    </nav>
  );
};

export default AppNavbar;
