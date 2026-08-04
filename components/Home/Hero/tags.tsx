const tags = ['Same-day service', 'Trained technicians', 'Warranty on repair'];

const Tags = () => {
  return (
    <div className='flex flex-wrap gap-2 mt-6 justify-center md:justify-start'>
      {tags.map((tag) => (
        <span
          key={tag}
          className='bg-background border border-border text-xs py-1 px-3 rounded-2xl'
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
