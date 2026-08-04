import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import WhatsappButton from '@/components/global/whatsappButton';

const ServiceCard = ({
  title,
  href,
  description,
  image,
  alt,
}: {
  title: string;
  href: string;
  description: string;
  image: string;
  alt: string;
}) => {
  return (
    <Card
      id={href.replace('#', '')}
      className='pt-0 h-full flex flex-col text-left overflow-hidden'
    >
      <CardHeader className='p-0'>
        <div className='relative w-full aspect-video overflow-hidden'>
          <Image
            src={image}
            alt={alt}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='object-cover hover:scale-105 transition-transform duration-300'
          />
        </div>
      </CardHeader>

      <CardContent className='pt-4 flex-1'>
        <CardTitle className='text-xl mb-2'>{title}</CardTitle>
        <CardDescription className='text-sm leading-relaxed'>
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter>
        <WhatsappButton />
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
