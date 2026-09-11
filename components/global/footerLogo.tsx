const FooterLogo = () => {
  return (
    // Same wordmark as the header, set for the dark footer.
    <div className='flex flex-col leading-none'>
      <span className='text-xl font-bold tracking-tight text-btn-surface-ink md:text-2xl'>
        Service Center <span className='text-btn-surface-ink/70'>UAE</span>
      </span>
      <span className='mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-btn-surface-ink/70 md:text-[11px]'>
        Appliance Repair
      </span>
    </div>
  );
};

export default FooterLogo;
