import { Check } from 'lucide-react';

const tags = ['Same-day service', 'Trained technicians', 'Warranty on repair'];

const Tags = () => {
  return (
    <ul className='mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-wash pt-6'>
      {tags.map((tag) => (
        <li key={tag} className='flex items-center gap-2'>
          <span className='flex h-5 w-5 items-center justify-center rounded-full bg-wash-deep'>
            <Check className='h-3 w-3 text-btn-deep' />
          </span>
          <span className='t-meta font-medium text-body'>{tag}</span>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
