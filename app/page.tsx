const exchangeServices = [
  {
    id: "binance",
    name: "احراز هویت بایننس",
    desc: "KYC سریع و مطمئن برای صرافی Binance",
  },
  {
    id: "kucoin",
    name: "احراز هویت کوکوین",
    desc: "KYC با مدارک ایرانی برای صرافی KuCoin",
  },
  {
    id: "gate",
    name: "احراز هویت گیت",
    desc: "احراز سطح ۱ و ۲ صرافی Gate.io",
  },
  {
    id: "mexc",
    name: "احراز هویت مکسی",
    desc: "KYC فوری برای صرافی MEXC",
  },
];

const freelanceServices = [
  {
    id: "fiverr",
    name: "احراز حساب فریلنسری",
    desc: "تأیید هویت حساب‌های Fiverr و سایت‌های مشابه",
  },
  {
    id: "other",
    name: "سایر سایت‌ها",
    desc: "احراز هویت سایت‌ها و سرویس‌های دیگر به صورت اختصاصی",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* هدر */}
      <header className="sticky top-0 z-20 border-b border-yellow-400/60 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-yellow-400 flex items-center justify-center text-black font-extrabold text-lg">
              K
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-yellow-300">
                KYC Services
              </span>
              <span className="text-[11px] text-gray-300">
                احراز هویت صرافی‌ها و سایت‌ها
              </span>
            </div>
          </div>
          <a
            href="https://t.me/YourUsername"
            className="text-xs bg-yellow-400 text-black px-3 py-1.5 rounded-full font-semibold hover:bg-yellow-300"
          >
            گفتگو در تلگرام
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-5 space-y-8">
        {/* توضیح کلی */}
        <section>
          <h1 className="text-xl font-extrabold text-gray-900 mb-1">
            انتخاب صرافی یا سایت برای احراز هویت
          </h1>
          <p className="text-xs text-gray-600">
            از بین دسته‌های زیر، سرویس مورد نیازتان را انتخاب کنید. با لمس هر
            کارت، گفتگو در تلگرام برای همان سرویس شروع می‌شود.
          </p>
        </section>

        {/* دسته صرافی‌ها */}
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-2">
            صرافی‌ها (KYC Exchange)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {exchangeServices.map((s) => (
              <a
                key={s.id}
                href={`https://t.me/YourUsername?start=${s.id}-kyc`}
                className="border border-gray-200 rounded-xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.04)] px-3 py-3 flex flex-col justify-between active:scale-[0.98] transition-transform"
              >
                <p className="text-[11px] font-semibold text-gray-900 line-clamp-2">
                  {s.name}
                </p>
                <p className="mt-1 text-[10px] text-gray-600 line-clamp-3">
                  {s.desc}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-yellow-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span>شروع احراز در تلگرام</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* دسته فریلنسری و سایر سایت‌ها */}
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-2">
            سایت‌های فریلنسری و سایر سرویس‌ها
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {freelanceServices.map((s) => (
              <a
                key={s.id}
                href={`https://t.me/YourUsername?start=${s.id}-kyc`}
                className="border border-gray-200 rounded-xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.04)] px-3 py-3 flex flex-col justify-between active:scale-[0.98] transition-transform"
              >
                <p className="text-[11px] font-semibold text-gray-900 line-clamp-2">
                  {s.name}
                </p>
                <p className="mt-1 text-[10px] text-gray-600 line-clamp-3">
                  {s.desc}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-yellow-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span>شروع احراز در تلگرام</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* بخش ثبت نظر */}
        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 space-y-2">
          <h2 className="text-sm font-bold text-gray-900">
            ثبت نظر و امتیاز درباره خدمات
          </h2>
          <p className="text-[11px] text-gray-700">
            اگر از خدمات احراز هویت استفاده کرده‌اید، لطفاً نظر و پیشنهاد خود را
            بفرستید تا کیفیت کار بهتر شود.
          </p>
          <a
            href="https://t.me/YourUsername"
            className="inline-block text-xs bg-black text-yellow-300 px-3 py-1.5 rounded-full font-semibold"
          >
            ارسال نظر در تلگرام
          </a>
        </section>
      </main>
    </div>
  );
}
