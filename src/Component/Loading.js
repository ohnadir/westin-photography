import React from 'react';

const Loading = () => {
    return (
        <div>
            <div class="flex items-center justify-center h-[93vh]">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;