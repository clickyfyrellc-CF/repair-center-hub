import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '../ui';
import { whatsappLink } from '@/lib/contact';
import { cn } from '@/lib/utils';

const WhatsappButton = ({
  label = 'WhatsApp',
  variant = 'default',
  className,
}: {
  label?: string;
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
}) => {
  return (
    <Button
      asChild
      variant={variant}
      className={cn(
        'rounded-sm',
        variant === 'default' && 'bg-btn hover:bg-btn/90',
        className,
      )}
    >
      <Link href={whatsappLink} target='_blank' rel='noopener noreferrer'>
        <FaWhatsapp />
        {label}
      </Link>
    </Button>
  );
};

export default WhatsappButton;
