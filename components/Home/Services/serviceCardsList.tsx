import { services } from '@/lib/services';
import ServiceCard from './serviceCard';

const ServiceCardsList = () => {
  return (
    <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
};

export default ServiceCardsList;
