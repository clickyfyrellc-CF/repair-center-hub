import WhatsappButton from '@/components/global/whatsappButton';
import Stats from './stats';

const TextContent = () => {
  return (
    <div className='flex flex-col space-y-4 md:p-6'>
      <h2 className='text-2xl font-bold md:text-3xl md:font-semibold text-center md:text-left'>
        Why work with us
      </h2>
      <p className='text-center text-muted-foreground md:text-left'>
        When an appliance breaks down you need someone who shows up, diagnoses
        it honestly, and fixes it the first time. That is the whole job.
      </p>
      <Stats />
      <div className='flex items-center justify-center md:justify-start gap-2 flex-wrap mt-4'>
        <WhatsappButton />
      </div>
    </div>
  );
};

export default TextContent;
