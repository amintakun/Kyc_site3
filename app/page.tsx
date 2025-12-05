const services = [
  {
    id: "binance",
    name: "احراز هویت بایننس",
    desc: "KYC سریع و مطمئن برای صرافی Binance",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.svg",
  },
  {
    id: "kucoin",
    name: "احراز هویت کوکوین",
    desc: "KYC با مدارک ایرانی برای صرافی KuCoin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/KUCOIN.svg",
  },
  {
    id: "gate",
    name: "احراز هویت گیت",
    desc: "احراز سطح ۱ و ۲ صرافی Gate.io",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Gateio_logo.svg",
  },
  {
    id: "mexc",
    name: "احراز هویت مکسی",
    desc: "KYC فوری برای صرافی MEXC",
    image:
      "https://seeklogo.com/images/M/mexc-global-logo-7B0C45F5F4-seeklogo.com.png",
  },
  {
    id: "fiverr",
    name: "احراز حساب فریلنسری",
    desc: "تأیید هویت حساب‌های Fiverr و سایت‌های مشابه",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Fiverr_Logo.svg",
  },
  {
    id: "other",
    name: "سایر سایت‌ها",
    desc: "احراز هویت سایت‌ها و سرویس‌های دیگر",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* هدر مشکی با تم بایننس */}
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

      {/* متن بالای کارت‌ها */}
      <main className="max-w-5xl mx-auto px-4 py-5">
        <section className="mb-4">
          <h1 className="text-xl font-extrabold text-gray-900 mb-1">
            انتخاب صرافی یا سایت برای احراز هویت
          </h1>
          <p className="text-xs text-gray-600">
            روی هر کارت بزنید تا با همان سرویس مستقیماً در تلگرام برای احراز
            هویت گفتگو را شروع کنید.
          </p>
        </section>

        {/* گرید کارت‌ها مثل گیفت‌کارت */}
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-3 pb-8">
          {services.map((s) => (
            <a
              key={s.id}
              href={`https://t.me/YourUsername?start=${s.id}-kyc`}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-[0_4px_14px_rgba(0,0,0,0.04)] active:scale-[0.98] transition-transform"
            >
              {/* بالا: لوگو */}
              <div className="h-20 w-full bg-gray-100 flex items-center justify-center">
                <img
                  src={s.image}
                  alt={s.name}
                  className="max-h-14 max-w-[80%] object-contain"
                  loading="lazy"
                />
              </div>

              {/* پایین: متن کارت */}
              <div className="px-2.5 py-2">
                <p className="text-[11px] font-semibold text-gray-900 line-clamp-2">
                  {s.name}
                </p>
                <p className="mt-1 text-[10px] text-gray-600 line-clamp-2">
                  {s.desc}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-yellow-700">
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
            نیاز به مشاوره قبل از احراز دارید؟
          </h2>
          <p className="text-[11px] text-gray-700 mb-2">
            اگر مطمئن نیستید کدام صرافی یا سایت برای شما مناسب است، در تلگرام
            پیام بدهید تا راهنمایی‌تان کنیم.
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
