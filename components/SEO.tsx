import Head from 'next/head';
import React, { PropsWithChildren } from 'react';

const SEO = ({ children }: PropsWithChildren) => {
    return (
        <Head>
            <title>{children}</title>
        </Head>
    );
};

export default SEO;