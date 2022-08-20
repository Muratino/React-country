import React from 'react';
import ContentLoader from "react-content-loader";

function Skeleton() {
    return (
        Array.from(Array(6)).map((_, index) => (
            <ContentLoader key={index}
                speed={5}
                width={229}
                height={200}
                viewBox="0 0 229 200"
                backgroundColor="#e1dfdf"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="277" rx="7" ry="7" width="280" height="15" />
                <rect x="315" y="378" rx="0" ry="0" width="265" height="118" />
                <rect x="0" y="0" rx="7" ry="7" width="229" height="120" />
                <rect x="0" y="409" rx="7" ry="7" width="123" height="30" />
                <rect x="156" y="409" rx="7" ry="7" width="123" height="30" />
                <rect x="0" y="127" rx="10" ry="10" width="229" height="19" />
                <rect x="0" y="152" rx="10" ry="10" width="229" height="19" />
                <rect x="0" y="179" rx="10" ry="10" width="229" height="19" />
            </ContentLoader>
        ))
    )
}

export default Skeleton;