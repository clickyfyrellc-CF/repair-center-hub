import { links, servicesMenu } from '@/lib/links';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui';
import { IoMdMenu } from 'react-icons/io';
import Link from 'next/link';
import WhatsappButton from '../global/whatsappButton';

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoMdMenu className='w-7 h-7' />
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className='font-semibold'>Repair Centers</SheetTitle>
          <SheetDescription>
            Home appliance repair across the UAE.
          </SheetDescription>
        </SheetHeader>

        <ul className='flex flex-col px-6 space-y-3'>
          {links.map((item) => {
            if (item.label === 'Services') {
              return (
                <li key={item.href}>
                  <div className='space-y-2'>
                    <p className='text-base font-medium text-slate-900'>Services</p>
                    <ul className='ml-2 space-y-2'>
                      {servicesMenu.map((service) => (
                        <li key={service.label}>
                          <SheetClose asChild>
                            <Link className='text-sm text-slate-700' href={service.href}>
                              {service.label}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <SheetClose asChild>
                  <Link className='text-base nav-link' href={item.href}>
                    {item.label}
                  </Link>
                </SheetClose>
              </li>
            );
          })}
        </ul>

        <div className='px-6'>
          <WhatsappButton />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
