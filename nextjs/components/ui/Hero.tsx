import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative bg-slate-50 py-16 px-6 text-center md:py-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Minden ami öntözés és kert karbantartás
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                    Öntözőrendszer, zöldfal és mezőgazdasági cső hegesztés országos kiszállással.
                    Kertkarbantartás Nyíregyházán és környékén.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <Link
                        href="tel:+36501267123"
                        className="px-8 py-4 bg-[var(--green)] text-white font-bold rounded-lg shadow-lg hover:brightness-110 transition-all text-lg"
                    >
                        Hívás most
                    </Link>
                    <Link
                        href="#idopont"
                        className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg shadow-md border border-slate-200 hover:bg-slate-50 transition-all text-lg"
                    >
                        Időpontfoglalás
                    </Link>
                </div>

                <div className="border-t border-slate-200 pt-10">
                    <div className="space-y-4 mb-8 text-slate-700">
                        <p className="font-semibold">
                            Öntözőrendszer telepítés, javítás, karbantartás és téliesítés országos kiszállással.
                        </p>
                        <p className="font-semibold">
                            Kertkarbantartás Nyíregyházán és környékén – fűnyírás, metszés, kaszálás, kertgondozás, kertépítés.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {["25 év tapasztalat", "Országos kiszállás", "Nyíregyháza és környéke", "Gyors kapcsolatfelvétel"].map((text) => (
                            <span
                                key={text}
                                className="px-4 py-2 bg-white text-sm font-medium text-slate-600 rounded-full border border-slate-200 shadow-sm"
                            >
                {text}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
