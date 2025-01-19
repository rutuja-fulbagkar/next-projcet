import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

export default function Searchbar() {
  const router = useRouter();

  const handlesearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your search logic here
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      // router.push(`/list?name=${name}`);
      console.log("object", name)
    }
  }

  return (
    <form className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1" onSubmit={handlesearch}>
      <input placeholder="Search" name='name' type='text' className='flex-1 bg-transparent outline-none'/>
      <button type="submit" className='cursor-pointer'>
        <SearchIcon className='text-gray-400'/>
      </button> 
    </form>
  )
}
