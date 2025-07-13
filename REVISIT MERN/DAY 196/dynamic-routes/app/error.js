'use client';
import React from 'react';



export default function Error({ error, reset }) {
    return (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
            <h1>Something went wrong!</h1>
            <p>{error?.message || 'An unexpected error occurred.'}</p>
            <button onClick={reset} style={{ marginTop: '1rem' }}>
                Try Again
            </button>
        </div>
    );
}