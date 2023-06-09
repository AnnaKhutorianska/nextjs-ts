import { FC, PropsWithChildren } from "react";
import { IMeta } from "./meta.inteface";
import Head from "next/head";

const Meta: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? (
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={title} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
