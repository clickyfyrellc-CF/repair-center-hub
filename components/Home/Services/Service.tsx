import Container from '@/components/global/container';
import ServiceCardsList from './serviceCardsList';

const Service = () => {
  return (
    <section id='services' className='bg-wash py-16 md:py-20'>
      <Container>
        <div className='mx-auto max-w-2xl text-center'>
          <span className='t-eyebrow text-btn-deep'>What we fix</span>
          <h2 className='t-h2 text-heading mt-3'>Appliance repair services</h2>
          <p className='t-body text-body mt-4'>
            We repair every major home appliance. Tell us what stopped working
            and we will send a technician who has fixed it before.
          </p>
        </div>
        <ServiceCardsList />
      </Container>
    </section>
  );
};

export default Service;
