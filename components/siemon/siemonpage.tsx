import Image from 'next/image';
import Link from 'next/link';
import {
  AlertCircle,
  CalendarDays,
  ChevronDown,
  Clock3,
  Eye,
  Gauge,
  Info,
  Phone,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { whatsappLink } from '@/lib/contact';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '5000+', label: 'Repairs Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

type ServiceCard = {
  title: string;
  icon: ServiceIconType;
  description: string;
  issues: string[];
  image: string;
};

const serviceCards: ServiceCard[] = [
  {
    title: 'Refrigerators',
    icon: 'refrigerator',
    description:
      'Expert refrigerator repair services for all Siemens models. From cooling issues to ice maker problems, we handle it all.',
    issues: [
      'Not cooling properly',
      'Ice maker not working',
      'Water leakage',
      'Strange noises',
      'Door seal problems',
    ],
    image: '/services/refrigerator.jpg',
  },
  {
    title: 'Washing Machines',
    icon: 'washing',
    description:
      'Professional washing machine repair for Siemens front-load and top-load models with same-day service.',
    issues: [
      "Won't spin or drain",
      'Error codes displayed',
      'Loud vibrations',
      "Door won't lock",
      'Water not filling',
    ],
    image: '/services/washing-machine.jpg',
  },
  {
    title: 'Dishwashers',
    icon: 'dishwasher',
    description:
      'Complete dishwasher repair services including drainage, heating, and cleaning performance issues.',
    issues: [
      'Not draining water',
      'Not cleaning dishes',
      'Not drying properly',
      'Leaking water',
      'Unusual odors',
    ],
    image: '/services/dishwasher.jpg',
  },
  {
    title: 'Ovens',
    icon: 'oven',
    description:
      'Expert oven repair for all Siemens electric and gas ovens including temperature calibration and heating element replacement.',
    issues: [
      'Not heating properly',
      'Temperature inaccuracy',
      "Door won't close",
      'Self-cleaning issues',
      'Control panel errors',
    ],
    image: '/services/oven.jpg',
  },
  {
    title: 'Dryers',
    icon: 'dryer',
    description:
      'Professional dryer repair services for heat pump and condenser models with quality Siemens parts.',
    issues: [
      'Not heating',
      'Taking too long to dry',
      'Overheating',
      'Drum not turning',
      'Excessive noise',
    ],
    image: '/services/dryer.jpg',
  },
  {
    title: 'Coffee Machines',
    icon: 'coffee',
    description:
      'Specialized coffee machine repair and maintenance including descaling, brewing system, and grinder repairs.',
    issues: [
      'Not brewing properly',
      'Weak coffee',
      'Grinder not working',
      'Water leaks',
      'Descaling errors',
    ],
    image: '/services/cooking-range.jpg',
  },
];

const videoCards = [
  {
    category: 'Refrigerator',
    duration: '6:15',
    title: 'Refrigerator Temperature Problems',
    views: '15.2K views',
    image: '/images/technicians.jpg',
  },
  {
    category: 'Washer',
    duration: '5:42',
    title: "Washing Machine Won't Spin",
    views: '11.8K views',
    image: '/images/hero.jpg',
  },
  {
    category: 'Dishwasher',
    duration: '4:28',
    title: 'Dishwasher Cleaning Tips',
    views: '8.9K views',
    image: '/services/dishwasher.jpg',
  },
  {
    category: 'Oven',
    duration: '7:10',
    title: 'Oven Not Heating Properly',
    views: '10.3K views',
    image: '/services/oven.jpg',
  },
];

type ServiceIconType =
  | 'refrigerator'
  | 'washing'
  | 'dishwasher'
  | 'oven'
  | 'dryer'
  | 'coffee';

function ServiceIcon({ type }: { type: ServiceIconType }) {
  const className = 'h-6 w-6';

  switch (type) {
    case 'refrigerator':
      return <Sparkles className={className} />;
    case 'washing':
      return <Wrench className={className} />;
    case 'dishwasher':
      return <Gauge className={className} />;
    case 'oven':
      return <AlertCircle className={className} />;
    case 'dryer':
      return <Clock3 className={className} />;
    case 'coffee':
      return <Sparkles className={className} />;
    default:
      return <Wrench className={className} />;
  }
}

export default function SiemensPage() {
  return (
    <main className='bg-[#f7f8fa] text-[#111827]'>
      <section className='relative isolate overflow-hidden bg-[#1a0f11]'>
        <div className='absolute inset-0'>
          <Image
            src='/images/hero.jpg'
            alt='siemon appliance kitchen background'
            fill
            priority
            className='object-cover opacity-90'
            sizes='100vw'
          />
        </div>
        <div className='absolute inset-0 bg-[rgba(241, 160, 29, 0.25)]' />

        <div className='relative mx-auto max-w-[1400px] px-6 md:px-8 lg:px-10'>
          <div className='flex h-[560px] min-h-[560px] items-center justify-center py-0'>
            <div className='w-full max-w-[1200px] text-center'>
              <div className='mb-8 flex justify-center'>
                <span className='inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm'>
                  <span className='inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15'>
                    <Wrench className='h-4 w-4 text-white' />
                  </span>
                  Professional Siemens Service
                </span>
              </div>

              <h1 className='mx-auto max-w-[1100px] text-4xl font-bold leading-[1.08] text-white md:text-5xl lg:text-[64px]'>
                Professional Siemens Appliance Repair in UAE
              </h1>

              <p className='mx-auto mt-6 max-w-[950px] text-base text-white/90 md:text-[22px] md:leading-8'>
                Expert repair solutions for all Siemens appliances with quality
                parts and trained technicians
              </p>

              <div className='mt-8 flex flex-col items-center justify-center gap-5 md:flex-row'>
                <Link
                  href={whatsappLink}
                  className='inline-flex items-center gap-3 rounded-full bg-[#C2761A] px-8 py-5 text-lg font-semibold text-white shadow-lg shadow-orange-900/25 transition hover:bg-[#b66f16]'
                >
                  <CalendarDays className='h-5 w-5' />
                  Book Repair Now
                </Link>
                <a
                  href={whatsappLink}
                  className='inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-lg font-semibold text-[#101a2b] shadow-lg shadow-black/10 transition hover:bg-slate-100'
                >
                  <Phone className='h-5 w-5 text-[#C2761A]' />
                  Call +971 52 731 5207
                </a>
              </div>

              <div className='mt-12 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12'>
                {[
                  ['clock', 'Same Day Service'],
                  ['settings', 'Quality Parts'],
                  ['expert', 'Expert Technicians'],
                ].map(([icon, label]) => (
                  <div
                    key={label}
                    className='flex flex-col items-center gap-3 text-white'
                  >
                    <div className='flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm'>
                      {icon === 'clock' && <Clock3 className='h-6 w-6' />}
                      {icon === 'settings' && <Wrench className='h-6 w-6' />}
                      {icon === 'expert' && <Sparkles className='h-6 w-6' />}
                    </div>
                    <span className='text-base font-medium md:text-lg'>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#F5F6F7]'>
        <div className='mx-auto max-w-[1400px] px-6 py-[55px] md:px-8 lg:px-10'>
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
            {stats.map((item) => (
              <div key={item.label} className='text-center'>
                <div className='text-4xl font-bold text-[#C2761A] md:text-[38px]'>{item.value}</div>
                <div className='mt-2 text-base font-medium text-[#40536b]'>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-white py-16 md:py-20'>
        <div className='mx-auto max-w-[1400px] px-6 md:px-8 lg:px-10'>
          <div className='max-w-[1200px]'>
            <h2 className='text-3xl font-bold leading-[1.2] text-[#111827] md:text-[34px]'>
              Our Siemons Repair Services
            </h2>
            <div className='mt-4 h-[5px] w-[105px] bg-[#C2761A]' />
            <p className='mt-5 max-w-[920px] text-base leading-7 text-[#40536b] md:text-lg md:leading-7'>
              Comprehensive repair and maintenance services for all Siemons
              appliances with quality parts and expert care
            </p>
          </div>
        </div>
      </section>

      <section className='bg-white pb-16 md:pb-20'>
        <div className='mx-auto max-w-[1400px] px-6 md:px-8 lg:px-10'>
          <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className='overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.10)] transition-transform transition-shadow duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]'
              >
                <div className='flex h-[220px] items-center justify-center bg-[#f7e7d8] p-6'>
                  <div className='relative h-full w-full'>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className='object-contain'
                      sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
                    />
                  </div>
                </div>

                <div className='p-6'>
                  <div className='mb-5 flex items-center gap-4'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-[#fbeee3] text-[#C2761A]'>
                      <ServiceIcon type={card.icon} />
                    </div>
                    <h3 className='text-xl font-bold text-[#111827]'>{card.title}</h3>
                  </div>

                  <p className='text-sm leading-6 text-[#40536b]'>{card.description}</p>

                  <div className='mt-6'>
                    <p className='mb-3 text-sm font-semibold text-[#111827]'>Common Issues:</p>
                    <ul className='space-y-2 text-[#40536b]'>
                      {card.issues.map((issue) => (
                        <li key={issue} className='flex items-center gap-2'>
                          <span className='text-[#C2761A]'>
                            <span className='inline-block h-2.5 w-2.5 rounded-full border border-[#C2761A]' />
                          </span>
                          <span className='text-sm'>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className='border-t border-slate-200 px-6 py-4'>
                  <div className='flex cursor-pointer items-center justify-between text-base font-semibold text-[#111827]'>
                    <span>Maintenance Tips</span>
                    <ChevronDown className='h-5 w-5 text-[#C2761A]' />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#f7f8fa] py-16 md:py-20'>
        <div className='mx-auto max-w-[1400px] px-6 md:px-8 lg:px-10'>
          <h2 className='text-center text-3xl font-bold text-[#111827] md:text-[44px]'>
            Common Issues & Solutions
          </h2>
          <p className='mx-auto mt-4 max-w-[800px] text-center text-lg text-[#40536b] md:text-xl'>
            Watch our expert troubleshooting guides for common siemons appliance
            problems
          </p>

          <div className='mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-4'>
            {videoCards.map((video) => (
              <article
                key={video.title}
                className='overflow-hidden rounded-[20px] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)] transition-transform transition-shadow duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]'
              >
                <div className='relative aspect-[16/11] overflow-hidden'>
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw'
                  />
                  <div className='absolute right-3 top-3 rounded-md bg-[#111827]/80 px-2 py-1 text-sm font-medium text-white'>
                    {video.duration}
                  </div>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg'>
                      <div className='ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-[#C2761A]' />
                    </div>
                  </div>
                </div>

                <div className='space-y-4 p-5'>
                  <span className='inline-flex rounded-full bg-[#fbeee3] px-3 py-1 text-sm font-semibold text-[#C2761A]'>
                    {video.category}
                  </span>

                  <h3 className='text-xl font-bold text-[#111827]'>{video.title}</h3>

                  <div className='flex items-center gap-2 text-sm font-medium text-[#40536b]'>
                    <Eye className='h-4 w-4' />
                    <span>{video.views}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#f7f8fa] pb-8 pt-2 md:pb-10'>
        <div className='mx-auto max-w-[1400px] px-6 md:px-8 lg:px-10'>
          <div className='rounded-[28px] bg-[#F5F6F7] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:p-10'>
            <div className='flex items-start gap-3'>
              <div className='mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#fbeee3] text-[#C2761A]'>
                <Info className='h-5 w-5' />
              </div>
              <div>
                <h2 className='text-2xl font-bold text-[#142033] md:text-[26px]'>
                  Independent Service Provider
                </h2>
                <p className='mt-3 text-sm leading-6 text-[#40536b] md:text-base md:leading-7'>
                  We are an independent appliance repair service provider in
                  UAE. All brand names and trademarks mentioned on this
                  website (including <strong>Siemons</strong>,{' '}
                  <strong>Bosch</strong>, <strong>Miele</strong>,{' '}
                  <strong>AEG</strong>, <strong>LG</strong>,{' '}
                  <strong>Smeg</strong>, <strong>Foster</strong>,{' '}
                  <strong>Bertazzoni</strong>, <strong>Maytag</strong>,{' '}
                  <strong>Bompani</strong>, <strong>Rational</strong>, and{' '}
                  <strong>Teka</strong>) are the property of their respective
                  owners. We are not affiliated with, authorized by, endorsed by,
                  or sponsored by any of these manufacturers. We provide
                  independent repair services and compatible parts for these
                  brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
