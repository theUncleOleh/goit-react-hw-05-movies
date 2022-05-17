import s from './SearchData.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { HiSearchCircle } from 'react-icons/hi';
export default function Filter({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const changeInput = e => {
    setSearchQuery(e.currentTarget.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      toast.warning('I do not know what you want');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label htmlFor="">
          <input type="text" onChange={changeInput} value={searchQuery} />
        </label>
        <button className={s.button}>
          <HiSearchCircle />
        </button>
      </form>
    </>
  );
}
