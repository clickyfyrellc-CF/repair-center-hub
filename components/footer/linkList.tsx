import { links } from '@/lib/links';
import Link from 'next/link';

const LinkList = () => {
  return (
    <div className='text-secondary'>
      <h3 className='font-semibold text-lg'>Links</h3>
      <ul>
        {links.map((link) => (
          <li className='mt-2' key={link.href}>
            <Link className='nav-link text-sm' href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkList;
