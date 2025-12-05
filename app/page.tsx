const services = [
  {
    id: "binance",
    name: "احراز هویت بایننس",
    desc: "KYC سریع و مطمئن برای صرافی بایننس",
    color: "from-yellow-400 to-amber-500",
  },
  {
    id: "kucoin",
    name: "احراز هویت کوکوین",
    desc: "KYC با مدارک ایرانی برای کوکوین",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: "gate",
    name: "احراز هویت گیت",
    desc: "احراز سطح ۱ و ۲ صرافی Gate",
    color: "from-sky-400 to-blue-500",
  },
  {
    id: "mexc",
    name: "احراز هویت مکسی",
    desc: "KYC فوری مکسی با پشتیبانی",
    color: "from-lime-400 to-green-500",
  },
  {
    id: "fiverr",
    name: "احراز حساب فریلنسری",
    desc: "تأیید هویت سایت‌های فریلنسری مثل Fiverr",
    color: "from-fuchsia-400 to-purple-500",
  },
  {
    id: "other",
    name: "سایر سایت‌ها",
    desc: "احراز هویت سایت‌ها و سرویس‌های دیگر",
    color: "from-gray-400 to-gray-600",
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
                احراز هویت صرافی ها و سایت ها
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

      {/* عنوان و توضیح */}
      <main className="max-w-5xl mx-auto px-4 py-5">
        <section className="mb-4">
          <h1 className="text-xl font-extrabold text-gray-900 mb-1">
            انتخاب سرویس برای احراز هویت
          </h1>
          <p className="text-xs text-gray-600">
            یکی از صرافی‌ها یا سایت‌های زیر را انتخاب کنید تا جزئیات KYC و لینک
            چت تلگرام برای همان سرویس نمایش داده شود.
          </p>
        </section>

        {/* گرید کارت‌ها شبیه گیفت کارت */}
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-3 pb-8">
          {services.map((s) => (
            <a
              key={s.id}
              href={`https://t.me/YourUsername?start=${s.id}-kyc`}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-[0_4px_14px_rgba(0,0,0,0.04)] active:scale-[0.98] transition-transform"
            >
              {/* نوار رنگی بالای کارت (جای عکس) */}
              <div
                className={`h-16 w-full bg-gradient-to-r ${s.color} flex items-center justify-center`}
              >
                <span className="text-xs font-bold text-white drop-shadow">
                  {s.name}
                </span>
              </div>

              {/* متن پایین کارت */}
              <div className="px-2.5 py-2">
                <p className="text-[11px] font-semibold text-gray-900 line-clamp-2">
                  {s.name}
                </p>
                <p className="mt-1 text-[10px] text-gray-600 line-clamp-2">
                  {s.desc}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-yellow-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span>شروع احراز در تلگرام</span>
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* باکس تماس پایین صفحه */}
        <section className="mb-10 rounded-2xl border border-yellow-400/50 bg-yellow-50 px-4 py-3">
          <h2 className="text-sm font-bold text-gray-900 mb-1">
            نیاز به راهنمایی برای انتخاب دارید؟
          </h2>
          <p className="text-[11px] text-gray-700 mb-2">
            اگر مطمئن نیستید کدام سرویس برای شما مناسب است، در تلگرام پیام
            بدهید تا راهنمایی‌تان کنیم.
          </p>
          <a
            href="https://t.me/YourUsername"
            className="inline-block text-xs bg-black text-yellow-300 px-3 py-1.5 rounded-full font-semibold"
          >
            گفتگوی مستقیم در تلگرام
          </a>
        </section>
      </main>
    </div>
  );
}
