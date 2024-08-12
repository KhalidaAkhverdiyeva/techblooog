
const SkeletonCard = () => {
    return (
      <div className='flex flex-wrap gap-4 justify-between'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className='w-[calc(50%-16px)] mb-[30px] rounded-lg overflow-hidden shadow-lg bg-gray-200'
          >
            <div className='relative rounded-[10px] overflow-hidden bg-gray-300' style={{ height: '230px' }}>
           
            </div>
            <div className='p-[26px]'>
              <div className='bg-gray-300 h-6 w-3/4 mb-4 rounded'></div>
              <div className='flex gap-3 items-center mb-[10px]'>
                <div className='bg-gray-300 h-4 w-1/3 rounded'></div>
                <div className='bg-gray-300 h-4 w-1/3 rounded'></div>
              </div>
              <div className='bg-gray-300 h-4 w-full rounded'></div>
              <div className='bg-gray-300 h-4 w-full mt-2 rounded'></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default SkeletonCard;
  