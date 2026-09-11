import { Building2, CheckCircle2, Clock3, CalendarDays } from 'lucide-react';
import { stats } from '@/lib/stats';

const icons = [Building2, CheckCircle2, Clock3, CalendarDays];

const Stats = () => {
  return (
    <div className='mt-8 grid grid-cols-2 gap-3 md:gap-4'>
      {stats.map((stat, i) => {
        const Icon = icons[i] ?? Building2;
        return (
          <div
            key={stat.label}
            className='flex flex-col gap-2 rounded-xl border border-wash bg-wash p-4 md:p-5'
          >
            <span className='flex h-9 w-9 items-center justify-center rounded-lg bg-wash-deep'>
              <Icon className='h-4.5 w-4.5 text-btn-deep' />
            </span>
            <span className='t-h4 text-btn-deep'>{stat.number}</span>
            <span className='t-meta text-body'>{stat.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
