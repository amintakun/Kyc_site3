"use client";

import { useState } from "react";

type Service = {
  id: string;
  name: string;
  desc: string;
  image?: string;
  detailTitle: string;
  detailBody: string;
};

const exchangeServices: Service[] = [
  {
    id: "binance",
    name: "احراز هویت بایننس",
    desc: "KYC سریع و مطمئن برای صرافی Binance",
    image: "/download (5).png",
    detailTitle: "بایننس چیست و چرا احراز هویت مهم است؟",
    detailBody:
      "بایننس یکی از بزرگ‌ترین صرافی‌های ارز دیجیتال دنیاست که حجم معاملات بالایی دارد. با احراز هویت، سقف برداشت شما بالا می‌رود، امکان استفاده از فیوچرز و برخی امکانات دیگر باز می‌شود و ریسک مسدود شدن حساب به خاطر آی‌پی و تغییر کشور کمتر می‌شود.",
  },
  {
    id: "kucoin",
    name: "احراز هویت کوکوین",
    desc: "KYC با مدارک ایرانی برای صرافی KuCoin",
    image: "/download (6).png",
    detailTitle: "صرافی KuCoin و مزیت احراز هویت",
    detailBody:
      "کوکوین صرافی محبوبی برای معامله آلت‌کوین‌هاست. بعد از احراز هویت، محدودیت برداشت کمتر می‌شود، امکان استفاده از سرویس‌های بیشتری را دارید و احتمال محدود شدن حساب به خاطر فعالیت مشکوک کمتر می‌شود.",
  },
  {
    id: "mexc",
    name: "احراز هویت مکسی",
    desc: "KYC فوری برای صرافی MEXC",
    image: "/download (7).png",
    detailTitle: "چرا احراز هویت در MEXC انجام دهیم؟",
    detailBody:
      "MEXC به‌خاطر تعداد زیاد کوین‌ها و فی کم معروف است. با انجام KYC می‌توانید راحت‌تر واریز و برداشت انجام دهید، سقف برداشت افزایش پیدا می‌کند و در صورت بروز مشکل، امکان پیگیری حساب بهتر است.",
  },
  {
    id: "gate",
    name: "احراز هویت گیت",
    desc: "احراز سطح ۱ و ۲ صرافی Gate.io",
    image: "/download (8).png",
    detailTitle: "Gate.io و اهمیت KYC",
    detailBody:
      "Gate.io صرافی قدیمی و شناخته‌شده‌ای است که برای دسترسی کامل به امکانات آن، احراز هویت الزامی است. انجام KYC امنیت حساب را بالا می‌برد و سقف برداشت و استفاده از بازارهای مختلف را آزاد می‌کند.",
  },
  {
    id: "okx",
    name: "احراز هویت OKX",
    desc: "KYC برای صرافی OKX با محدودیت‌های به‌روز",
    image: "/download (10).png",
    detailTitle: "مزایای احراز هویت در OKX",
    detailBody:
      "OKX یکی از صرافی‌های مطرح برای فیوچرز و آپشن است. با انجام احراز هویت، محدودیت برداشت کاهش می‌یابد، دسترسی شما به ابزارهای معاملاتی کامل‌تر می‌شود و ریسک بلاک شدن حساب کمتر خواهد بود.",
  },
];

const freelanceServices: Service[] = [
  {
    id: "fiverr",
    name: "احراز حساب Fiverr",
    desc: "تأیید هویت فریلنسری در Fiverr برای واریز امن درآمد",
    image: "/download (9).png",
    detailTitle: "Fiverr چیست و چرا تأیید هویت مهم است؟",
    detailBody:
      "Fiverr یکی از بزرگ‌ترین سایت‌های فریلنسری دنیاست. با انجام احراز هویت، حساب شما معتبرتر می‌شود، ریسک مسدود شدن موجودی کاهش می‌یابد و راحت‌تر می‌توانید پرداخت‌ها را دریافت کنید.",
  },
  {
    id: "upwork",
    name: "احراز حساب Upwork",
    desc: "تأیید هویت حساب Upwork و رفع محدودیت‌های برداشت",
    image: "/download (11).png",
    detailTitle: "اهمیت KYC در Upwork",
    detailBody:
      "Upwork یک پلتفرم حرفه‌ای برای دورکاری است. بدون احراز هویت، امکان برداشت و استفاده کامل از امکانات سایت محدود می‌شود. با تأیید هویت، حساب شما رسمی‌تر می‌شود و کارفرماها اعتماد بیشتری می‌کنند.",
  },
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* هدر */}
      <header className="sticky top-0 z-20 border-b border-yellow-400/60 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-yellow-400 flex items-center justify-center text-black font-extrabold text-xl">
              K
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-yellow-300">
                KYC Services
              </span>
              <span className="text-[12px] text-gray-300">
                احراز هویت صرافی‌ها و سایت‌های فریلنسری
              </span>
            </div>
          </div>
          <a
            href="https://t.me/Kyc_servicex"
            className="text-sm bg-yellow-400 text-black px-4 py-1.5 rounded-full font-semibold hover:bg-yellow-300"
          >
            گفتگو در تلگرام
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        {/* توضیح کلی */}
        <section>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
            انتخاب صرافی یا سایت برای احراز هویت
          </h1>
          <p className="text-sm text-gray-600">
            روی هر کارت بزنید تا توضیحات کامل آن سرویس و لینک مستقیم تلگرام برای
            شروع احراز هویت را ببینید.
          </p>
        </section>

        {/* صرافی‌ها */}
        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">
            صرافی‌های ارز دیجیتال
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {exchangeServices.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedService(s)}
                className="text-right border border-gray-200 rounded-2xl bg-white shadow-[0_4px_18px_rgba(0,0,0,0.06)] px-4 py-4 flex flex-col gap-3 active:scale-[0.98] transition-transform"
              >
                {s.image && (
                  <div className="w-full flex justify-center">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="h-24 w-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-[14px] font-semibold text-gray-900 line-clamp-2">
                    {s.name}
                  </p>
                  <p className="mt-1 text-[12px] text-gray-600 line-clamp-3">
                    {s.desc}
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-[12px] text-yellow-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span>مشاهده توضیحات و شروع احراز</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* فریلنسری‌ها */}
        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">
            سایت‌های فریلنسری و درآمد دلاری
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {freelanceServices.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedService(s)}
                className="text-right border border-gray-200 rounded-2xl bg-white shadow-[0_4px_18px_rgba(0,0,0,0.06)] px-4 py-4 flex flex-col gap-3 active:scale-[0.98] transition-transform"
              >
                {s.image && (
                  <div className="w-full flex justify-center">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="h-24 w-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-[14px] font-semibold text-gray-900 line-clamp-2">
                    {s.name}
                  </p>
                  <p className="mt-1 text-[12px] text-gray-600 line-clamp-3">
                    {s.desc}
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-[12px] text-yellow-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span>مشاهده توضیحات و شروع احراز</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* مودال توضیحات سرویس */}
      {selectedService && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4">
          <div className="max-w-md w-full rounded-2xl bg-white p-5 space-y-4 text-right">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-extrabold text-gray-900">
                {selectedService.detailTitle}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="text-gray-500 text-xl leading-none px-2"
              >
                ×
              </button>
            </div>

            {selectedService.image && (
              <div className="w-full flex justify-center mb-1">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="h-20 w-auto object-contain rounded-md"
                />
              </div>
            )}

            <p className="text-[13px] text-gray-700 leading-relaxed">
              {selectedService.detailBody}
            </p>

            <div className="border-t border-gray-200 pt-3 space-y-2">
              <p className="text-[12px] text-gray-600">
                برای شروع احراز هویت همین سرویس، روی دکمه زیر بزنید تا مستقیم وارد
                گفتگو در تلگرام شوید.
              </p>
              <a
                href={`https://t.me/Kyc_servicex?start=${selectedService.id}-kyc`}
                className="block w-full text-center text-sm bg-black text-yellow-300 px-4 py-2 rounded-full font-semibold"
              >
                شروع احراز در تلگرام @Kyc_servicex
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

