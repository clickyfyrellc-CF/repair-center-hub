import Image from 'next/image';
import Container from '@/components/global/container';

// The source files are named logo 1..10; these are the brands they show, in
// that order. Real names give the images useful alt text.
const brands = [
  { name: 'Daewoo', src: '/logo/logo 1.jpg' },
  { name: 'Indesit', src: '/logo/logo 2.jpg' },
  { name: 'Bosch', src: '/logo/logo 3.jpg' },
  { name: 'Siemens', src: '/logo/logo 4.jpg' },
  { name: 'Whirlpool', src: '/logo/logo 5.jpg' },
  { name: 'Candy', src: '/logo/logo 6.jpg' },
  { name: 'LG', src: '/logo/logo 7.jpg' },
  { name: 'Bompani', src: '/logo/logo 8.jpg' },
  { name: 'Beko', src: '/logo/logo 9.webp' },
  { name: 'Electrolux', src: '/logo/logo 10.png' },
];

const BrandLogos = () => {
  return (
    <section id='brands' className='bg-white py-16 md:py-20'>
      <Container>
        <div className='mx-auto max-w-2xl text-center'>
          <span className='t-eyebrow text-btn-deep'>Brands we service</span>
          <h2 className='t-h2 text-heading mt-3'>Appliances we repair</h2>
          <p className='t-body text-body mt-4'>
            Ten of the brands our technicians work on every week. If yours is
            not here, message us and we will tell you straight away whether we
            cover it.
          </p>
        </div>

        {/* A fixed 5-across grid instead of a wrap, so the rows stay even. The
            logo files carry their own white and grey backgrounds at different
            sizes, so each one sits in a tile of the same size and is muted
            until hover; that stops the mismatched artwork reading as stray
            boxes on the page. */}
        <ul className='mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-14 md:grid-cols-5 md:gap-4'>
          {brands.map((brand) => (
            <li
              key={brand.name}
              className='group flex h-24 items-center justify-center rounded-xl border border-wash bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.08)] md:h-28'
            >
              <Image
                src={brand.src}
                alt={`${brand.name} appliance repair`}
                width={160}
                height={120}
                className='h-full w-full object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0'
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default BrandLogos;
