import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className='flex flex-col leading-none'>
      <span className='text-xl font-bold tracking-tight'>Repair Centers</span>
      <span className='text-[10px] tracking-[0.2em] uppercase text-muted-foreground'>
        Service network
      </span>
    </Link>
  );
};

export default Logo;
