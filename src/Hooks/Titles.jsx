

const Titles = ({priHeading,secHeading}) => {
    return (
        <div className='text-center p-2 mx-auto '>
        <h3 className='pb-2 mt-4 text-pink-500 font-medium text-4xl md:text-5xl lg:text-6xl border-t-2 border-pink-500 font-sans  '>{priHeading}</h3>
        
        <p className='text-xl font-semibold uppercase py-1 border-b-2 border-pink-500 text-pink-800 mb-4'>
          {secHeading}
        </p>
      </div>
    );
};

export default Titles;