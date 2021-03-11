import { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem';
import { RepositoryItemProps } from './RepositoryItem';

import '../styles/repositories.scss';

interface Repository {
  id: string | number;
  name: string;
  description: string;
  html_url: string;
  owner: {
    avatar_url: string;
  };
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/danicunhac/repos')
      .then((res) => res.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Repository List</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
