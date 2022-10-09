import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Artist = () => {
    const router = useRouter();

    console.log(router.query.value)

    return (
        <div>
        </div>
    );
};

export default Artist;