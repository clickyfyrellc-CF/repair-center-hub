import Container from '@/components/global/container';
import TextContent from './textContent';
import ChoosePoints from './ChoosePoints';

const ChooseUs = () => {
  return (
    <section id='why-us'>
      <Container className='grid md:grid-cols-2 gap-6 py-14'>
        <TextContent />
        <ChoosePoints />
      </Container>
    </section>
  );
};

export default ChooseUs;
