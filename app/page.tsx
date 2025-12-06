const exchangeServices = [
  {
    id: "binance",
    name: "احراز هویت بایننس",
    desc: "KYC سریع و مطمئن برای صرافی Binance",
    image: "/download (5).png",
  },
  {
    id: "kucoin",
    name: "احراز هویت کوکوین",
    desc: "KYC با مدارک ایرانی برای صرافی KuCoin",
    image: "/download (6).png",
  },
  {
    id: "mexc",
    name: "احراز هویت مکسی",
    desc: "KYC فوری برای صرافی MEXC",
    image: "/download (7).png",
  },
  {
    id: "gate",
    name: "احراز هویت گیت",
    desc: "احراز سطح ۱ و ۲ صرافی Gate.io",
    image: "/download (8).png",
  },
  {
    id: "okx",
    name: "احراز هویت OKX",
    desc: "KYC برای صرافی OKX با محدودیت‌های به‌روز",
    image: "/download (10).png",
  },
];

const freelanceServices = [
  {
    id: "fiverr",
    name: "احراز حساب Fiverr",
    desc: "تأیید هویت فریلنسری در Fiverr برای واریز امن درآمد",
    image: "/download (9).png",
  },
  {
    id: "upwork",
    name: "احراز حساب Upwork",
    desc: "تأیید هویت حساب Upwork و رفع محدودیت‌های برداشت",
    image: "/download (11).png",
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
                احراز هویت صرافی‌ها و سایت‌های فریلنسری
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
            یکی از کارت‌های زیر را انتخاب کنید تا برای همان سرویس مستقیماً در
            تلگرام گفتگو را شروع کنید.
          </p>
        </section>

        {/* صرافی‌ها */}
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-2">
            صرافی‌های ارز دیجیتال
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {exchangeServices.map((s) => (
              <a
                key={s.id}
                href={`https://t.me/YourUsername?start=${s.id}-kyc`}
                className="border border-gray-200 rounded-xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.04)] px-3 py-3 flex flex-col gap-2 active:scale-[0.98] transition-transform"
              >
                {s.image && (
                  <div className="w-full flex justify-center">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="h-16 w-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-between">
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
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* فریلنسری‌ها */}
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-2">
            سایت‌های فریلنسری و درآمد دلاری
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {freelanceServices.map((s) => (
              <a
                key={s.id}
                href={`https://t.me/YourUsername?start=${s.id}-kyc`}
                className="border border-gray-200 rounded-xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.04)] px-3 py-3 flex flex-col gap-2 active:scale-[0.98] transition-transform"
              >
                {s.image && (
                  <div className="w-full flex justify-center">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="h-16 w-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-between">
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
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ثبت نظر */}
        <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 space-y-2">
          <h2 className="text-sm font-bold text-gray-900">
            ثبت نظر و امتیاز درباره خدمات
          </h2>
          <p className="text-[11px] text-gray-700">
            بعد از انجام احراز، لطفاً تجربه‌تان را بفرستید تا کیفیت خدمات بهتر
            شود.
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
