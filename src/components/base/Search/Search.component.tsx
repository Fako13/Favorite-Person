import { KeyboardEvent, useState } from 'react';

import { Input } from '@/components/ui/Input/Input';

import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from './search.svg';

export const Search = (): JSX.Element => {
  const [search, setSearch] = useState<string>('');

  const goToSearch = (): void => {
    ///
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key == 'Enter') goToSearch();
  };

  return (
    <div className={styles.container}>
      <Input
        placeholder="Поиск ..."
        value={search}
        className={styles.input}
        onChange={(e): void => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="Поле ввода поиска по сайту"
      />
      <button className={styles.button} onClick={goToSearch} name="Search" aria-label="Кнопка искать по сайту">
        <SearchIcon className={styles.buttonIcon} />
      </button>
    </div>
  );
};
