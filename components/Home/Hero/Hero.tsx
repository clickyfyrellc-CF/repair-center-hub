import Image from 'next/image';
import Link from 'next/link';
import { Phone, Wrench } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '../../global/container';
import { phoneLink, whatsappLink } from '@/lib/contact';
import Tags from './tags';

const Hero = () => {
  return (
    <section className='relative overflow-hidden bg-wash'>
      {/* A soft corner glow in the brand colour, so the section is not a flat
          grey slab behind the headline. */}
      <div
        aria-hidden
        className='pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-wash-deep blur-3xl'
      />

      <Container className='relative grid items-center gap-x-12 gap-y-10 py-14 md:grid-cols-2 md:py-20'>
        <div className='flex flex-col text-left'>
          <span className='inline-flex w-fit items-center gap-2 rounded-full border border-wash bg-white px-4 py-2 t-eyebrow text-btn-deep shadow-sm'>
            <Wrench className='h-3.5 w-3.5' />
            Appliance repair network &middot; UAE
          </span>

          <h1 className='t-h1 text-heading mt-5'>
            Professional Home Appliance Repair Services Across the UAE
          </h1>

          <p className='t-body text-body mt-5'>
            We run a dedicated service center for each brand we repair. Pick the
            one that matches your appliance, or message us and we will point you
            to the right team.
          </p>

          <div className='mt-8 flex flex-col gap-3 md:flex-row md:items-center md:gap-4'>
            <Link
              href={whatsappLink}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-btn px-7 py-4 text-base font-semibold text-btn-ink shadow-lg shadow-black/10 transition hover:opacity-90 sm:w-auto'
            >
              <FaWhatsapp className='h-5 w-5' />
              Message us on WhatsApp
            </Link>
            <a
              href={phoneLink}
              className='inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-wash bg-white px-7 py-4 text-base font-semibold text-heading shadow-sm transition hover:shadow-md sm:w-auto'
            >
              <Phone className='h-5 w-5 text-btn-deep' />
              Call +971 52 731 5207
            </a>
          </div>

          <Tags />
        </div>

        <div className='relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.14)]'>
          <Image
            src='/images/hero.jpg'
            alt='Technician repairing a home appliance'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            className='object-cover'
            priority
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
