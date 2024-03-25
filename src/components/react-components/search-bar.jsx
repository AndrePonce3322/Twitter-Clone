import { IconSearch2 } from '@/icons';

export function SearchComponent({ onChange }) {
  return (
    <search className='w-full flex justify-center items-center text-white font-light my-4 text-sm px-4'>
      <div className='relative flex items-center w-full '>
        <input
          type='text'
          placeholder='Buscar'
          className='p-2 rounded-full px-5 pl-12 bg-[#202327] w-full'
          onChange={onChange}
          autoFocus
        />
        <IconSearch2 className='absolute left-4 h-[1.3rem] fill-white' />
      </div>
    </search>
  );
}
