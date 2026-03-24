import Link from 'next/link';

export default function FloatingCall() {
    return (
        <Link
            href="tel:+36501267123"
            aria-label="Hívás"
            className="fixed bottom-[18px] right-[18px] bg-[var(--green)] text-white rounded-full flex items-center justify-center text-2xl p-3 no-underline z-[9999] animate-pulse"
        >
            <span role="img" aria-label="phone">📞</span>
        </Link>
    );
}
