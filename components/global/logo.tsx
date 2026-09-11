import Link from 'next/link';
import { Wrench } from 'lucide-react';

const Logo = () => {
  return (
    // Mark plus wordmark rather than bare text. The mark reads from --btn, so
    // the logo picks up whichever brand the current page is themed to.
    <Link href='/' className='group flex items-center gap-2.5'>
      <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-btn shadow-sm transition-transform duration-300 group-hover:-rotate-6 md:h-11 md:w-11'>
        <Wrench className='h-5 w-5 text-btn-ink' />
      </span>

      <span className='flex flex-col leading-none'>
        <span className='text-lg font-bold tracking-tight text-heading md:text-xl'>
          Service Center <span className='text-btn-deep'>UAE</span>
        </span>
        <span className='mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-body'>
          Appliance Repair
        </span>
      </span>
    </Link>
  );
};

export default Logo;
