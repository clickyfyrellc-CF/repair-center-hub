import type { Metadata } from 'next';
import Script from 'next/script';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import FloatingButtons from '@/components/global/floatingButtons';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Repair Centers | Home Appliance Repair & Maintenance',
  description:
    'Home appliance repair across the UAE. Refrigerators, washing machines, ovens, dishwashers, dryers and cooking ranges, repaired by trained technicians. Message us on WhatsApp.',
  keywords: [
    'home appliance repair',
    'refrigerator repair',
    'washing machine repair',
    'oven repair',
    'dishwasher repair',
    'dryer repair',
  ],
  openGraph: {
    title: 'Repair Centers | Home Appliance Repair',
    description:
      'Home appliance repair across the UAE. Same-day service, upfront quotes, trained technicians.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn('h-full', 'antialiased', openSans.variable, 'font-sans')}
    >
      <body className='min-h-full flex flex-col' suppressHydrationWarning>

        {/* Google Tag Manager */}
        <Script
          id='google-tag-manager'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M24DHPH4');
            `,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-M24DHPH4'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />

      </body>
    </html>
  );
}