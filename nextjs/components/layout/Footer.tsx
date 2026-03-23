export default function Footer() {
    return (
        <footer
            style={{ backgroundColor: 'var(--header)' }}
            className="text-white text-center p-8 mt-5 leading-relaxed break-words"
        >
            <div className="max-w-4xl mx-auto">
                <p className="text-lg font-medium tracking-wide">
                    © {new Date().getFullYear()} <span className="font-bold uppercase">Minden ami öntözés</span>
                </p>

                <p className="text-sm text-white/70">
                    Profi öntözőrendszerek tervezése és kivitelezése.
                </p>

                <div className="flex justify-center items-center gap-4 pt-4 text-xs uppercase tracking-widest text-white/60">
                    <a href="/kapcsolat" className="hover:text-white transition-colors duration-300">
                        Kapcsolat
                    </a>
                </div>
            </div>
        </footer>
    );
}
