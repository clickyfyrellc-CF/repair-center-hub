import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '@/components/global/container';
import { whatsappLink } from '@/lib/contact';

const About = () => {
  return (
    // This used to be a solid block of the brand colour. With the closing
    // banner already in that colour, two heavy slabs on one page was a lot;
    // white here lets the banner land as the single strong note.
    <section id='about' className='bg-white py-16 md:py-20'>
      <Container>
        <div className='grid items-center gap-10 md:grid-cols-2 md:gap-14'>
          <div className='text-center md:text-left'>
            <span className='t-eyebrow text-btn-deep'>About us</span>
            <h2 className='t-h3 text-heading mt-3'>
              Trusted Appliance Repair Experts Serving the UAE
            </h2>
            <p className='t-body text-body mt-4'>
              We repair home appliances across the UAE. Instead of one crowded
              website, we keep a separate service center for each brand we work
              on, so you land on the pages that actually match your appliance.
            </p>
            <p className='t-body text-body mt-4'>
              The technicians, the pricing, and the warranty are the same
              wherever you start. This page exists so you never have to guess
              which site to open.
            </p>

            <div className='mt-8 flex justify-center md:justify-start'>
              <Link
                href={whatsappLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2.5 rounded-full bg-btn px-7 py-4 text-base font-semibold text-btn-ink shadow-lg shadow-black/10 transition hover:opacity-90'
              >
                <FaWhatsapp className='h-5 w-5' />
                Message us
              </Link>
            </div>
          </div>

          <div className='relative min-h-80 overflow-hidden rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.14)] md:min-h-96'>
            <Image
              src='/images/technicians.jpg'
              alt='Technician working on a home appliance'
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent' />
            <div className='absolute inset-x-0 bottom-0 z-10 p-6 md:p-7'>
              <h3 className='t-h5 text-white'>The same standard everywhere</h3>
              <p className='t-body-sm mt-2 text-white/85'>
                Whichever site you start from, the same technicians handle the
                job, at the same price, with the same warranty.
              </p>
              <div className='mt-4 flex flex-wrap gap-2'>
                {['Same-day service', 'Upfront quotes'].map((tag) => (
                  <span
                    key={tag}
                    className='rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
