import { choosePoints } from '@/lib/choosePoints';
import { Check } from 'lucide-react';

const ChoosePoints = () => {
  return (
    <ul className='flex flex-col gap-4 p-6 bg-btn rounded-xl'>
      {choosePoints.map((point) => (
        <li key={point.title} className='flex items-start gap-3'>
          <div className='w-5 h-5 min-w-5 rounded-full bg-white/20 flex items-center justify-center mt-1'>
            <Check className='w-3 h-3 text-white' />
          </div>
          <div>
            <p className='font-semibold text-white'>{point.title}</p>
            <p className='text-sm text-muted'>{point.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ChoosePoints;
