import Image from 'next/image';
import Container from '../../global/container';
import WhatsappButton from '../../global/whatsappButton';
import Tags from './tags';

const Hero = () => {
  return (
    <section className='bg-secondary'>
      <Container className='grid md:grid-cols-2 gap-x-12 gap-y-8 items-center py-12 md:py-20'>
        <div className='flex flex-col text-center md:text-left'>
          <span className='self-center md:self-start bg-btn text-secondary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm'>
            Appliance repair network - UAE
          </span>
          <h1 className='text-3xl md:text-5xl font-bold mt-3'>
            Professional Home Appliance Repair Services Across the UAE
          </h1>
          <p className='mt-4 text-muted-foreground text-sm md:text-base'>
            We run a dedicated service center for each brand we repair. Pick the
            one that matches your appliance, or message us and we will point you
            to the right team.
          </p>
          <div className='mt-6 flex justify-center md:justify-start'>
            <WhatsappButton label='Message us on WhatsApp' />
          </div>
          <Tags />
        </div>

        <div className='relative w-full aspect-[4/3] rounded-xl overflow-hidden'>
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
