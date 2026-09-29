'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/products', 'Our Products'],
  ['/nature-care', 'Nature Care'],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link href="/" className="brand" aria-label="Raja Organic Farms home" onClick={() => setOpen(false)}>
          <Image src="/images/raja-logo.svg" alt="Raja Organic Farms" width={170} height={38} priority />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return <Link key={href} href={href} className={active ? 'active' : ''}>{label}</Link>;
          })}
        </nav>

        <Link href="/contact" className="connect-btn">
          Connect with Us <span aria-hidden="true">→</span>
        </Link>

        <button
          className={`mobile-menu${open ? ' is-open' : ''}`}
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-panel${open ? ' is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link href="/contact" className="mobile-connect" onClick={() => setOpen(false)}>Connect with Us →</Link>
        </nav>
      </div>
    </header>
  );
}
