import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '@/lib/contact';
import Stats from './stats';

const TextContent = () => {
  return (
    <div className='flex flex-col justify-center text-left md:py-4'>
      <span className='t-eyebrow text-btn-deep'>Why us</span>
      <h2 className='t-h3 text-heading mt-3'>Why work with us</h2>
      <p className='t-body text-body mt-4'>
        When an appliance breaks down you need someone who shows up, diagnoses
        it honestly, and fixes it the first time. That is the whole job.
      </p>

      <Stats />

      <div className='mt-8 flex'>
        <Link
          href={whatsappLink}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center gap-2.5 rounded-full bg-btn px-7 py-4 text-base font-semibold text-btn-ink shadow-lg shadow-black/10 transition hover:opacity-90'
        >
          <FaWhatsapp className='h-5 w-5' />
          Message us on WhatsApp
        </Link>
      </div>
    </div>
  );
};

export default TextContent;
