import { services } from '@/lib/services';
import Link from 'next/link';

const brandServices = [
  { title: 'Bosch Appliance Service', href: '/bosch' },
  { title: 'Siemens Appliance Service', href: '/siemens' },
  { title: 'LG Appliance Service', href: '/LG' },
];

const ServiceList = () => {
  return (
    <div className='text-secondary'>
      <h3 className='font-semibold text-lg'>Our Repair Services</h3>
      <ul>
        {services.map((service) => (
          <li className='mt-2' key={service.href}>
            <Link className='text-sm nav-link' href={service.href}>
              {service.title}
            </Link>
          </li>
        ))}
        {brandServices.map((service) => (
          <li className='mt-2' key={service.href}>
            <Link className='text-sm nav-link' href={service.href}>
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
