import React, { FC } from 'react';

export interface AuthorProps {
  name: string;
}

const Author: FC<AuthorProps> = (props) => {
  const { name } = props;

  return (
    <div>
      <span>{name}</span>
    </div>
  );
};

export default Author;
