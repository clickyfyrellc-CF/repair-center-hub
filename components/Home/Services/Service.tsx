import Container from '@/components/global/container';
import ServiceCardsList from './serviceCardsList';

const Service = () => {
  return (
    <section id='services' className='py-14'>
      <Container>
        <div className='flex items-center justify-center flex-col text-center'>
          <h2 className='text-2xl font-bold md:text-4xl'>
            Appliance repair services
          </h2>
          <p className='text-muted-foreground md:mt-2 md:max-w-3xl'>
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
