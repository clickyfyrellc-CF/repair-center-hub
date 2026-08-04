import { links } from '@/lib/links';
import Link from 'next/link';

const Links = () => {
  return (
    <ul className='flex items-center gap-x-4'>
      {links.map((item) => (
        <li key={item.href}>
          <Link className='nav-link' href={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
