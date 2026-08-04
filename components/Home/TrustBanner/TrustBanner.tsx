import Container from '@/components/global/container';
import WhatsappButton from '@/components/global/whatsappButton';

const TrustBanner = () => {
  return (
    <section className='bg-btn py-6'>
      <Container className='flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left'>
        <h2 className='text-xl md:text-2xl font-bold text-secondary'>
          Service you can trust
        </h2>
        <p className='text-sm text-muted md:flex-1'>
          Tell us what stopped working and we will take it from there.
        </p>
        <WhatsappButton variant='outline' label='Start on WhatsApp' />
      </Container>
    </section>
  );
};

export default TrustBanner;
