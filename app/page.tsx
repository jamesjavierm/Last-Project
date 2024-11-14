import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.shape} /> {/* Triangle shape */}
      <div className={styles.blueBox}>
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className={styles.textContainer}>
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link href="/login" className={styles.link}>
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        {/* Hero images for responsive design: desktop and mobile */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Desktop Image: Only shows on medium to larger screens */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            priority // Helps load this image immediately
          />

          {/* Mobile Image: Shows only on smaller screens */}
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
            priority
          />
        </div>
      </div>
    </main>
  );
}
