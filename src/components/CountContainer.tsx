'use client';

import React from 'react';
import CountUp from 'react-countup';

interface InfoStatics {
  label: string;
  value: number;
  type: 'number' | 'percentage';
}

const CountContainer = () => {
  const infoStatics: InfoStatics[] = [
    {
      label: 'Projects Completed',
      value: 15,
      type: 'number',
    },
    {
      label: 'Years Experience',
      value: 4,
      type: 'number',
    },
    {
      label: 'Client Satisfaction',
      value: 98,
      type: 'percentage',
    },
    {
      label: 'Expert Developers',
      value: 5,
      type: 'number',
    },
  ];
  return (
    <div className="rounded-2xl bg-[#e2e1e1] px-4 py-6 sm:px-8 sm:py-5 md:px-12 lg:px-14 dark:bg-[#222222]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        {infoStatics.map((item, idx) => {
          return (
            <div key={idx} className="flex-1 text-center">
              <p className="text-primary text-3xl font-semibold sm:text-4xl lg:text-5xl">
                <CountUp start={0} end={item.value} delay={0}>
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
                <span>{item.type === 'number' ? '+' : '%'}</span>
              </p>
              <p className="text-neutral-1-light mt-1 text-sm sm:text-base lg:text-lg dark:text-white">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountContainer;
