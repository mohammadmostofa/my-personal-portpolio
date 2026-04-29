import Link from 'next/link';
import React from 'react';

  const Navlink = () => {
  return (
           

            <>
                 <li> <Link href={'/'} className='font-medium text-md capitalize  py-2 px-4 ' >home</Link></li>
                 <li> <Link href={'/about'} className='font-medium text-md capitalize  py-2 px-4' >About</Link></li>
                 <li> <Link href={'/project' } className='font-medium text-md capitalize  py-2 px-4'>Project</Link></li>
                 <li> <Link href={'/contact'} className='font-medium text-md capitalize  py-2 px-4'>Contact</Link></li>
            </>    
  
  );
};

export default Navlink;