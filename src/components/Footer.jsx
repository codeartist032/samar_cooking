const Footer = () => {
    return (
      <footer className="bg-[#2D1B15] text-[var(--color-beige-200)] py-12 border-t border-[var(--color-orange)]/20">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-right">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 font-[Amiri]">بيت الأصالة - مطبخ سمر</h3>
            <p className="opacity-80">مأكولات شرقية منزلية تُطبخ بحب ❤️</p>
          </div>
  
          <div className="flex flex-col gap-2">
            <p>⏰ ساعات العمل: استلام الطلبات يومياً </p>
            <p>📍 التوصيل: كافة أنحاء المدينة</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-[var(--color-beige-300)]/50">
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
