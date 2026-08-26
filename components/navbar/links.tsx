import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';
import { links, servicesMenu } from '@/lib/links';

const Links = () => {
  return (
    <ul className='flex items-center gap-x-4'>
      {links.map((item) => {
        if (item.label === 'Services') {
          return (
            <li key={item.href}>
              <DropdownMenu>
                <DropdownMenuTrigger className='nav-link flex items-center gap-1 border-0 bg-transparent p-0 text-base font-medium text-foreground outline-none'>
                  <span>{item.label}</span>
                  <ChevronDown className='h-4 w-4' />
                </DropdownMenuTrigger>
                <DropdownMenuContent align='start' className='w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-lg'>
                  {servicesMenu.map((service) => (
                    <DropdownMenuItem key={service.label} asChild className='cursor-pointer rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 focus:bg-slate-100'>
                      <Link href={service.href}>{service.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          );
        }

        return (
          <li key={item.href}>
            <Link className='nav-link' href={item.href}>
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
