import { stats } from '@/lib/stats';

const Stats = () => {
  return (
    <div className='grid grid-cols-2 gap-3 mt-6'>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className='text-btn rounded-xl p-4 flex flex-col gap-1 bg-secondary'
        >
          <span className='text-2xl font-semibold'>{stat.number}</span>
          <span className='text-sm'>{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
