import React from 'react';
import { CircularProgress } from '@mui/material';

const Spinner = () => {
    return (
        <div className='h-[320px] flex_center'>
            <CircularProgress />
        </div>
    )
}

export default Spinner