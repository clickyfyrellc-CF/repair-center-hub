import Link from 'next/link';
import { IoCallSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { phoneLink, whatsappLink } from '@/lib/contact';

const FloatingButtons = () => {
  return (
    <>
      <div className='fixed left-3 md:left-4 bottom-4 -translate-y-1/2 z-50 flex items-center gap-2'>
        <Link
          href={phoneLink}
          aria-label='Call us now'
          className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#15803D] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200'
        >
          <IoCallSharp className='w-5 h-5 md:w-6 md:h-6' />
        </Link>
        <span className='hidden md:inline-block bg-foreground text-background text-xs font-semibold px-2.5 py-1.5 rounded-sm shadow'>
          Call Us Now!
        </span>
      </div>

      <Link
        href={whatsappLink}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Message us on WhatsApp'
        className='fixed right-3 md:right-4 bottom-4 -translate-y-1/2 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200'
      >
        <FaWhatsapp className='w-6 h-6 md:w-7 md:h-7' />
      </Link>
    </>
  );
};

export default FloatingButtons;
