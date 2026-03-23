import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex min-h-[50px] flex-nowrap items-center gap-4 bg-[var(--header)] px-[14px] py-[10px] text-left text-white">
            <div className="shrink-0">
                <Image
                    src="/logo.png"
                    alt="Czinke Attila Logo"
                    width={50}
                    height={50}
                    priority
                    className="h-auto w-auto"
                />
            </div>

            <div className="flex flex-col">
                <h1 className="text-lg font-bold leading-tight">
                    Czinke Attila e.v. / <span className="whitespace-nowrap">Ifj.: Czinke Attila e.v.</span>
                </h1>
                <p className="text-sm opacity-90 leading-snug">
                    Öntözőrendszer kivitelezés - Kertépítés - Zöldfal karbantartás - Mezőgazdasági cső hegesztés
                </p>
            </div>
        </header>
    );
}
