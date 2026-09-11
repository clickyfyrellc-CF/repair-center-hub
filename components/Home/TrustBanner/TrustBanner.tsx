import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { Phone } from 'lucide-react';
import Container from '@/components/global/container';
import { phoneLink, whatsappLink } from '@/lib/contact';

const TrustBanner = () => {
  return (
    // Was a thin strip with the heading, a line of copy and a button crammed
    // onto one row. It is the closing call to action, so it gets real height
    // and a clear order: statement, then the two ways to reach us.
    <section className='bg-btn-surface py-14 md:py-16'>
      <Container className='flex flex-col gap-8 text-left md:flex-row md:items-center md:justify-between md:gap-12'>
        <div className='max-w-xl'>
          <h2 className='t-h3 text-btn-surface-ink'>Service you can trust</h2>
          <p className='t-body mt-3 text-btn-surface-ink/90'>
            Tell us what stopped working and we will take it from there. You get
            a clear price before any work starts.
          </p>
        </div>

        <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4'>
          <Link
            href={whatsappLink}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 text-base font-semibold text-heading shadow-lg shadow-black/10 transition hover:bg-slate-100'
          >
            <FaWhatsapp className='h-5 w-5 text-btn-deep' />
            Start on WhatsApp
          </Link>
          <a
            href={phoneLink}
            className='inline-flex items-center justify-center gap-2.5 rounded-full border border-btn-surface-ink/35 px-7 py-4 text-base font-semibold text-btn-surface-ink transition hover:bg-btn-surface-ink/10'
          >
            <Phone className='h-5 w-5' />
            Call us
          </a>
        </div>
      </Container>
    </section>
  );
};

export default TrustBanner;
