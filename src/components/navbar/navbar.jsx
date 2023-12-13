import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=' backdrop-blur-xl bg-[#9EC8B9]/10 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link
              className='text-white font-noto-sans font-bold text-xl'
              href='/#home'
              scroll={true}
            >
              SF
            </Link>
          </div>
          <div className='flex font-noto-sans'>
            <Link
              className='text-[#9EC8B9] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              href='/#about'
              scroll={true}
            >
              About
            </Link>
            <Link
              className='text-[#9EC8B9] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              href='/services'
              scroll={true}
            >
              Services
            </Link>
            <Link
              className='text-[#9EC8B9] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              href='/contact'
              scroll={true}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
