'use client'
import { MdSearch } from "react-icons/md";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { debounce } from 'lodash';

const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const handleSearch = debounce((e) => {
    const params = new URLSearchParams(searchParams);

    if(e.target.value){
      params.set('q', e.target.value);
      params.set('page', '1');
    } else {
      params.delete('q');
    }
    replace(`${pathname}?${params}`);
  }, 500)

  return (
    <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-lg">
        <MdSearch />
        <input 
          onChange={handleSearch}
          type="text" 
          placeholder={placeholder} 
          className="bg-transparent text-soft border-none !outline-none" 
        />
    </div>
  )
}

export default Search