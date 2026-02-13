import { useState } from "react";

const OrderForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [orderMessage, setOrderMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // مهم جداً: يمنع الانتقال لصفحة جديدة
    setLoading(true);
    setError(false);
    setSubmitted(false);

    const form = e.target;
    const formData = new FormData(form);

    // تحضير رابط واتساب
    const name = formData.get("name");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const dish = formData.get("dish");
    const quantity = formData.get("quantity");
    const date = formData.get("date");
    const time = formData.get("time");
    const notes = formData.get("notes");

    const message =
      `*طلب جديد من الموقع!* 🍽️\n\n` +
      `👤 *الاسم:* ${name}\n` +
      `📱 *رقم الهاتف:* ${phone}\n` +
      `📍 *العنوان:* ${address}\n` +
      `🍲 *الطبق:* ${dish}\n` +
      `🔢 *الكمية:* ${quantity}\n` +
      `📅 *التاريخ:* ${date}\n` +
      `⏰ *الوقت:* ${time}\n` +
      `📝 *ملاحظات:* ${notes || "لا يوجد"}`;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "no-cors", // ضروري مع Google Apps Script
      });

      // ملاحظة: مع no-cors مش هنقدر نقرأ الـ response، بس الإرسال هيحصل
      setSubmitted(true);
      setLoading(false);
      setOrderMessage(message); // حفظ الرسالة لاستخدامها في الأزرار
      form.reset(); // يمسح النموذج بعد الإرسال

      // فتح واتساب للرقمين
      const phone1 = "963958455194";
      // const phone2 = "963965446090";
      const encodedMessage = encodeURIComponent(message);
      
      const url1 = `https://wa.me/${phone1}?text=${encodedMessage}`;
      // const url2 = `https://wa.me/${phone2}?text=${encodedMessage}`;

      // محاولة فتح الرابطين
      window.open(url1, '_blank');
      setTimeout(() => window.open(url2, '_blank'), 500);

      // إخفاء الرسالة بعد 30 ثانية (وقت كافي للضغط على زر واتساب يدوياً إذا لم يفتح)
      setTimeout(() => setSubmitted(false), 30000);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <section
      id="order"
      className="section-padding bg-[var(--color-primary)] relative"
    >
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] z-0 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto bg-[var(--color-beige-100)] rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-4 font-[Amiri]">
              اطلب الآن
            </h2>
            <p className="text-[var(--color-secondary)]">
              املأ النموذج وسيتم التواصل معك للتأكيد 🌸
            </p>
          </div>

          <form
            action="https://script.google.com/macros/s/AKfycbxMNSe9tI4lMVzmeoCnTx732EDtxlgTTsCOtkxzW_3S57UgTJ6f4Z2yyAQABhl465IR/exec"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-[var(--color-primary)] font-bold mb-2">
                الاسم الكامل *
              </label>
              <input
                required
                type="text"
                name="name"
                className="w-full bg-white px-4 py-3 rounded-xl border border-[var(--color-beige-300)] focus:outline-none focus:border-[var(--color-orange)] focus:ring-1 focus:ring-[var(--color-orange)] transition-colors"
                placeholder="الاسم ثلاثي"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[var(--color-primary)] font-bold mb-2">
                  رقم الهاتف *
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  className="w-full bg-white px-4 py-3 rounded-xl border border-[var(--color-beige-300)] focus:outline-none focus:border-[var(--color-orange)] focus:ring-1 focus:ring-[var(--color-orange)] transition-colors"
                  placeholder="05xxxxxxxx"
                />
              </div>
              <div>
                <label className="block text-[var(--color-primary)] font-bold mb-2">
                  المنطقة / العنوان *
                </label>
                <input
                  required
                  type="text"
                  name="address"
                  className="w-full bg-white px-4 py-3 rounded-xl border border-[var(--color-beige-300)] focus:outline-none focus:border-[var(--color-orange)] focus:ring-1 focus:ring-[var(--color-orange)] transition-colors"
                  placeholder="الحي، اسم الشارع..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[var(--color-primary)] font-bold mb-2">
                  اسم الطبق *
                </label>
                <select
                  required
                  name="dish"
                  className="w-full bg-white px-4 py-3 rounded-xl border border-[var(--color-beige-300)] focus:outline-none focus:border-[var(--color-orange)]"
                >
                  <option value="">اختر الطبق</option>
                  <option value="محاشي">محاشي</option>
                  <option value="مقلوبة">مقلوبة</option>
                  <option value="كبسة">كبسة</option>
                  <option value="يخنات">يخنات شرقية</option>
                  <option value="ورق عنب">ورق عنب</option>
                  <option value="معجنات">معجنات</option>
                  <option value="آخر">طلب آخر (اذكره بالملاحظات)</option>
                </select>
              </div>
              <div>
                <label className="block text-[var(--color-primary)] font-bold mb-2">
                  الكمية / عدد الأشخاص *
                </label>
                <input
                  required
                  type="number"
                  name="quantity"
                  className="w-full bg-white px-4 py-3 rounded-xl border border-[var(--color-beige-300)] focus:outline-none focus:border-[var(--color-orange)]"
                  placeholder="مثال: 5"
                  min="1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[var(--color-primary)] font-bold mb-2">
                  تاريخ التوصيل *
                </label>
                <input
                  required
                  type="date"
                  name="date"
                  className="w-full bg-white px-4 py-3 rounded-xl border border-[var(--color-beige-300)] focus:outline-none focus:border-[var(--color-orange)]"
                />
              </div>
              <div>
                <label className="block text-[var(--color-primary)] font-bold mb-2">
                  وقت التوصيل *
                </label>
                <input
                  required
                  type="time"
                  name="time"
                  className="w-full bg-white px-4 py-3 rounded-xl border border-[var(--color-beige-300)] focus:outline-none focus:border-[var(--color-orange)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[var(--color-primary)] font-bold mb-2">
                ملاحظات (اختياري)
              </label>
              <textarea
                name="notes"
                rows="3"
                className="w-full bg-white px-4 py-3 rounded-xl border border-[var(--color-beige-300)] focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                placeholder="بدون مكسرات، زيادة صوص..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--color-primary)] text-white text-xl py-4 rounded-xl font-bold shadow-lg hover:bg-[#2D1B15] hover:scale-[1.01] transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "جاري الإرسال..." : "✅ إرسال الطلب"}
            </button>

            {/* رسائل الحالة */}
            {submitted && (
              <div className="p-5 bg-green-100 text-green-800 text-center rounded-xl border border-green-300 animate-fadeIn flex flex-col gap-4 items-center">
                <div>
                  <strong>تم إرسال طلبك بنجاح! 🎉</strong>
                  <br />
                  شكراً لثقتك، سيتم فتح واتساب لإرسال التفاصيل.
                  <br />
                  إذا لم يفتح التطبيق تلقائياً، يرجى الضغط أدناه:
                  <div className="flex flex-col gap-2 mt-4 text-white font-bold w-full">
                    <a 
                      href={`https://wa.me/963958455194?text=${encodeURIComponent(orderMessage)}`}
                      target="_blank"
                      rel="noreferrer" 
                      className="bg-[#25D366] py-2 px-4 rounded-lg hover:bg-[#128C7E] transition-colors"
                    >
                       إرسال للرقم الأول (958) 📲
                    </a>
                    {/* <a 
                      href={`https://wa.me/963965446090?text=${encodeURIComponent(orderMessage)}`}
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-[#25D366] py-2 px-4 rounded-lg hover:bg-[#128C7E] transition-colors"
                    >
                       إرسال للرقم الثاني (965) 📲
                    </a> */}
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="p-5 bg-red-100 text-red-800 text-center rounded-xl border border-red-300">
                حدث خطأ في الإرسال، جربي تاني أو راسلينا على واتساب مباشرة 🙂
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
