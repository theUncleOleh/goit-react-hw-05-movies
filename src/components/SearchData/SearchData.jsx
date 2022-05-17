import s from './SearchData.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
export default function Filter({ onSubmit }) {
  const [search, setSearch] = useState(null);

  const changeInput = e => {
    setSearch(e.currentTarget.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim === '') {
      toast.warning('I do not know what you want');
      return;
    }
    onSubmit(search);
    setSearch('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input type="text" onChange={changeInput} />
        </label>
        <button>search</button>
      </form>
    </>
  );
}
