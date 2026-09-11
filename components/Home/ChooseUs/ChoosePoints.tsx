import { choosePoints } from '@/lib/choosePoints';
import { Check } from 'lucide-react';

const ChoosePoints = () => {
  return (
    // justify-between spreads the points over the panel's full height. The
    // grid stretches both columns to match, and without this the list bunched
    // at the top and left a block of empty colour underneath.
    <ul className='flex h-full flex-col justify-between gap-5 rounded-2xl bg-btn-surface p-7 md:p-8'>
      {choosePoints.map((point) => (
        <li key={point.title} className='flex items-start gap-3.5'>
          <span className='mt-0.5 flex h-6 w-6 min-w-6 items-center justify-center rounded-full bg-btn-surface-ink/20'>
            <Check className='h-3.5 w-3.5 text-btn-surface-ink' />
          </span>
          <div>
            <p className='t-body-sm font-semibold text-btn-surface-ink'>{point.title}</p>
            <p className='t-meta mt-1 text-btn-surface-ink/80'>{point.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ChoosePoints;
