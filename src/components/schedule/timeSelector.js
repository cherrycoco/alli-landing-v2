import React from 'react';
import { timeMap } from '../../util/timeMap';
import SimpleSelect from '../select/simpleSelect';


const TimeSelector = ({ times, handleTimeIdxSelect }) => {
  return (
    <div className="p-8">
      <p className="text-gray-600 text-center">Select a time to book:</p>
      {times && times.map((time, idx) => {
        if (time) {
          return (
            <SimpleSelect key={idx} onSelect={() => handleTimeIdxSelect(idx)} title={timeMap[idx]} />
          );
        }
      })}
    </div>
  )
}

export default TimeSelector;