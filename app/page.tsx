import Link from "next/link";

const services = [
  { id: "binance", name: "بایننس", desc: "احراز هویت سریع و مطمئن", tag: "KYC صرافی" },
  { id: "kucoin", name: "کوکوین", desc: "KYC با مدارک ایرانی", tag: "KYC صرافی" },
  { id: "gate", name: "گیت", desc: "احراز سطح ۱ و ۲", tag: "KYC صرافی" },
  { id: "mexc", name: "مکسی", desc: "KYC فوری", tag: "KYC صرافی" },
  { id: "fiverr", name: "فایور", desc: "احراز حساب فریلنسری", tag: "سایت فریلنسری" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* هدر */}
      <header className="border-b border-yellow-500/40 bg-black/80 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-lg font-bold text-yellow-400">KYC Service</span>
          <nav className="flex gap-4 text-sm">
            <a href="#services" className="hover:text-yellow-400">خدمات ما</a>
            <a href="#contact" className="hover:text-yellow-400">تماس با ما</a>
            <a
              href="https://t.me/YourUsername"
              className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-yellow-300"
            >
              چت در تلگرام
            </a>
          </nav>
        </div>
      </header>

      {/* هیرو */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        <section className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-3">
            احراز هویت KYC صرافی‌ها و سایت‌های فریلنسری
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            خدمات احراز هویت برای بایننس، کوکوین، گیت، مکسی و سایت‌های فریلنسری؛
            برای شروع فقط روی پلتفرم مورد نظر کلیک کنید و در تلگرام با ما در ارتباط باشید.
          </p>
        </section>

        {/* کارت صرافی‌ها */}
        <section id="services" className="grid sm:grid-cols-2 gap-4 mb-12">
          {services.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border border-yellow-500/30 bg-black/60 p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold mb-1 text-yellow-300">{s.name}</h2>
                <span className="inline-block text-[11px] px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-300 mb-2">
                  {s.tag}
                </span>
                <p className="text-gray-300 text-sm mb-4">{s.desc}</p>
              </div>
              <a
                href={`https://t.me/YourUsername?start=${s.id}-kyc`}
                className="mt-auto text-center text-sm font-semibold bg-yellow-400 text-black rounded-full py-1.5 hover:bg-yellow-300"
              >
                شروع احراز در تلگرام
              </a>
            </div>
          ))}
        </section>



        {/* تماس با ما */}
        <section id="contact" className="border-t border-yellow-500/30 pt-6 text-center">
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">تماس سریع</h3>
          <p className="text-gray-300 text-sm mb-3">
            برای مشاوره و پاسخ به سوالات، مستقیماً در تلگرام پیام بدهید.
          </p>
          <a
            href="https://t.me/YourUsername"
            className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-yellow-300"
          >
            پیام در تلگرام
          </a>
        </section>
      </main>
    </div>
  );
}
