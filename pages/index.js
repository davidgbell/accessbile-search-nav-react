import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [term, setTerm] = useState('');
  const [searchedResult, setSearchedResult] = useState('');
  const [error, setError] = useState(null);

  const items = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'pear' },
    { name: 'apple tango' },
    { name: 'mango' },
    { name: 'banana milkshake' },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    setSearchedResult(term);
    setTerm('');
    if (filteredItems.length === 0) {
      setError('No items matching your search please be more specific');
    }
  };

  const handleChange = e => {
    setTerm(e.target.value);
  };

  const filteredItems = items.filter(item =>
    item.name.toLocaleLowerCase().includes(searchedResult.toLocaleLowerCase())
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <a href='/'>LOGO</a>
        </div>
        <form role='search' className={styles.search} onSubmit={handleSubmit}>
          <label htmlFor='search'>Search:</label>
          <input
            title='search for food'
            aria-label='Enter your search term'
            type='search'
            id='search'
            name='search'
            onChange={handleChange}
            value={term || ''}
            placeholder='search'
            required
          />

          <button type='submit' onClick={handleSubmit}>
            Search
          </button>
        </form>
        <nav className={styles.nav}>
          <div>
            <a href='/'>About</a>
          </div>
          <div>
            <a href='/'>Contact</a>
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <h3>Items</h3>
        <span className='errMsg' role='status'>
          {error}
        </span>
        {filteredItems && (
          <ul>
            {filteredItems.map(item => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
