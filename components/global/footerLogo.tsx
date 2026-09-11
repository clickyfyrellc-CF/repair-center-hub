import { Wrench } from 'lucide-react';

const FooterLogo = () => {
  return (
    // Same lockup as the header, inverted for the dark footer: the mark goes
    // white with the surface colour inside it, so it stays legible on every
    // brand rather than disappearing into the panel.
    <div className='flex items-center gap-2.5'>
      <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-white'>
        <Wrench className='h-5 w-5 text-btn-surface' />
      </span>

      <span className='flex flex-col leading-none'>
        <span className='text-xl font-bold tracking-tight text-btn-surface-ink'>
          Service Center <span className='text-btn-surface-ink/70'>UAE</span>
        </span>
        <span className='mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-btn-surface-ink/70'>
          Appliance Repair
        </span>
      </span>
    </div>
  );
};

export default FooterLogo;
