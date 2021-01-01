import React, { FC } from 'react';

export interface PageProps {
  body: string;
  title: string;
}

const Page: FC<PageProps> = (props) => {
  const { body, title } = props;

  return (
    <>
      <h1>{title}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      />
    </>
  );
};

export default Page;
