import FooterContent from './footerContent';
import LinkList from './linkList';
import ServiceList from './serviceList';

const Footer = () => {
  return (
    <section className='bg-btn border-t-2 border-muted py-8'>
      <div className='max-w-6xl xl:max-w-7xl mx-auto px-5 w-full grid md:grid-cols-4 gap-y-6 gap-x-6'>
        <FooterContent />
        <LinkList />
        <ServiceList />
      </div>
    </section>
  );
};

export default Footer;
