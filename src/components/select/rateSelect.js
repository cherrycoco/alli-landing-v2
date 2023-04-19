import React, { useState } from 'react';
import { Range } from 'react-range';

const RateSelector = ({ min, max, rate, onChange }) => {

  return (
    <div className="w-full">
      <div className="w-11/12 mx-auto">
        <Range
          step={1}
          min={min}
          max={max}
          values={rate}
          onChange={(values) => onChange(values[0])}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '14px',
                width: '100%',
                backgroundColor: 'rgba(21, 96, 115, 0.2)',
                borderRadius: '20px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '0',
                  height: '14px',
                  width: `${((rate[0] - min) / (max - min)) * 100}%`,
                  backgroundColor: '#156073',
                  borderRadius: '20px',
                }}
              ></div>
              {children}
            </div>
          )}
          renderThumb={({ props, index, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '18px',
                width: '18px',
                backgroundColor: '#156073',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA',
                outline: 'none',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-56px',
                  color: '#fff',
                  fontWeight: 'semibold',
                  fontSize: '18px',
                  padding: '14px',
                  borderRadius: '4px',
                  backgroundColor: '#156073',
                }}
              >
                {`$${rate[index]}`}
              </div>
            </div>
          )}
        />
      </div>
      <div className='flex pt-2 justify-between text-2xl font-bold text-primary-200'>
        <h4 className=''>{`$${min}`}</h4>
        <h4>{`$${max}`}</h4>
      </div>
    </div>
  );
};

export default RateSelector;
