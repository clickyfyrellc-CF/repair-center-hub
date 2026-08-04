import FooterLogo from '../global/footerLogo';
import WhatsappButton from '../global/whatsappButton';

const FooterContent = () => {
  return (
    <div className='md:col-span-2'>
      <FooterLogo />
      <p className='md:max-w-sm text-secondary mt-4 text-sm'>
        We run a separate appliance service center for each brand we repair.
        This page keeps all of them together, so you can go straight to the one
        you need.
      </p>
      <div className='flex items-center gap-x-2 mt-4'>
        <WhatsappButton variant='outline' />
      </div>
    </div>
  );
};

export default FooterContent;
