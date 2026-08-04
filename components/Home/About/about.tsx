import Image from 'next/image';
import Container from '@/components/global/container';
import WhatsappButton from '@/components/global/whatsappButton';

const About = () => {
  return (
    <section id='about' className='py-16 bg-btn text-secondary'>
      <Container>
        <div className='grid md:grid-cols-2 gap-8 items-stretch'>
          <div className='flex flex-col justify-center'>
            <span className='text-xs font-bold tracking-widest uppercase mb-2'>
              About us
            </span>
            <h2 className='text-3xl font-semibold mb-4 leading-snug'>
              One team behind every service center
            </h2>
            <p className='text-muted text-sm leading-relaxed mb-3'>
              We repair home appliances across the UAE. Instead of one crowded
              website, we keep a separate service center for each brand we work
              on, so you land on the pages that actually match your appliance.
            </p>
            <p className='text-muted text-sm leading-relaxed mb-6'>
              The technicians, the pricing, and the warranty are the same
              wherever you start. This page exists so you never have to guess
              which site to open.
            </p>
            <div className='flex gap-3'>
              <WhatsappButton variant='outline' label='Message us' />
            </div>
          </div>

          <div className='relative rounded-xl overflow-hidden min-h-72'>
            <Image
              src='/images/technicians.jpg'
              alt='Technician working on a home appliance'
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />
            <div className='absolute bottom-0 left-0 right-0 p-6 z-10'>
              <h3 className='text-white text-xl font-semibold mb-2 leading-snug'>
                The same standard everywhere
              </h3>
              <p className='text-white/85 text-sm leading-relaxed mb-3'>
                Whichever site you start from, the same technicians handle the
                job, at the same price, with the same warranty.
              </p>
              <div className='flex gap-2 flex-wrap'>
                {['Same-day service', 'Upfront quotes'].map((tag) => (
                  <span
                    key={tag}
                    className='bg-white/15 border border-white/25 text-white text-xs px-3 py-1 rounded-full'
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
