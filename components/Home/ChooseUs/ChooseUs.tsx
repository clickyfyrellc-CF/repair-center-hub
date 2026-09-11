import Container from '@/components/global/container';
import TextContent from './textContent';
import ChoosePoints from './ChoosePoints';

const ChooseUs = () => {
  return (
    <section id='why-us' className='bg-white py-16 md:py-20'>
      <Container className='grid gap-8 md:grid-cols-2 md:gap-10'>
        <TextContent />
        <ChoosePoints />
      </Container>
    </section>
  );
};

export default ChooseUs;
