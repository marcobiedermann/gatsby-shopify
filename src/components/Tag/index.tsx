import React, { ReactNode } from 'react';

export interface TagProps {
  children: ReactNode;
}

function Tag(props: TagProps) {
  return <span {...props} />;
}

export default Tag;
