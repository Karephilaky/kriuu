import Image from 'next/image';
import Link from 'next/link';

const FOOTER_LINKS = [
  {
    href: 'https://chat.whatsapp.com/CizNIkE9F5Y5L66E24KJD6?mode=gi_t',
    label: 'WhatsApp',
  },
  { href: 'https://linkedin.com/company/kriuu', label: 'LinkedIn' },
  { href: 'https://instagram.com/kriuu.ec', label: 'Instagram' },
] as const;

export default function SiteFooter() {
  return (
    <footer className='border-t border-dark/8 bg-cream py-12 md:py-14'>
      <div className='mx-auto max-w-7xl px-5 md:px-8'>
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          <div className='flex items-center gap-2.5'>
            <Image src='/logo.svg' alt='kriuu' width={22} height={22} />
            <p className='text-sm text-dark/50'>
              © 2026 Kriuu. Construido en Latam.
            </p>
          </div>

          <div className='flex flex-wrap items-center gap-x-6 gap-y-2'>
            {FOOTER_LINKS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={
                  href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                className='text-sm text-dark/50 transition-colors hover:text-dark'
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
