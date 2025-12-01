import React from 'react';

const Section = ({ id, className = '', children }) => (
    <section id={id} className={`py-20 scroll-mt-36 ${className}`}>
        {children}
    </section>
);

export default Section;
