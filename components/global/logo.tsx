import Link from 'next/link';

const Logo = () => {
  return (
    // Typographic wordmark, no mark. The weight drop and the letterspaced
    // descriptor carry the hierarchy; UAE takes the accent so the eye lands
    // on the place, and it re-colours with whichever brand the page is on.
    <Link href='/' className='flex flex-col leading-none'>
      <span className='text-xl font-bold tracking-tight text-heading md:text-2xl'>
        Service Center <span className='text-btn-deep'>UAE</span>
      </span>
      <span className='mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-body md:text-[11px]'>
        Appliance Repair
      </span>
    </Link>
  );
};

export default Logo;
