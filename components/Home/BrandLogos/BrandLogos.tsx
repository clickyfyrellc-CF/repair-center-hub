import Image from 'next/image';
import Container from '@/components/global/container';

const BrandLogos = () => {
  const brands = [
    { id: 1, name: 'Logo 1', src: '/logo/logo 1.jpg' },
    { id: 2, name: 'Logo 2', src: '/logo/logo 2.jpg' },
    { id: 3, name: 'Logo 3', src: '/logo/logo 3.jpg' },
    { id: 4, name: 'Logo 4', src: '/logo/logo 4.jpg' },
    { id: 5, name: 'Logo 5', src: '/logo/logo 5.jpg' },
    { id: 6, name: 'Logo 6', src: '/logo/logo 6.jpg' },
    { id: 7, name: 'Logo 7', src: '/logo/logo 7.jpg' },
    { id: 8, name: 'Logo 8', src: '/logo/logo 8.jpg' },
    { id: 9, name: 'Logo 9', src: '/logo/logo 9.webp' },
    { id: 10, name: 'Logo 10', src: '/logo/logo 10.png' },
  ];

  return (
    <section id='brands' className='bg-white py-20'>
      <Container>
        <div className='flex items-center justify-center flex-col text-center mb-16'>
          <div className='inline-block border-2 border-gray-300 rounded-lg px-8 py-4 mb-8'>
            <h2 className='text-2xl font-bold md:text-4xl text-gray-800'>
              OUR FAMILIAR BRANDS
            </h2>
          </div>
        </div>
        
        <div className='flex items-center justify-center flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-14'>
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              className='flex items-center justify-center w-24 h-16 sm:w-28 sm:h-20 md:w-36 md:h-24 lg:w-40 lg:h-28 flex-shrink-0'
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={160}
                height={120}
                className='object-contain w-full h-full'
                priority={false}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BrandLogos;
