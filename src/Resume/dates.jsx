import { format, parseISO } from 'date-fns';
import React from 'react';

export const Date = ({ date }) => (
  <span style={{ whiteSpace: 'nowrap' }}>
    {format(parseISO(date), 'MMMM yyyy')}
  </span>
);

export const DateRange = ({ start, end }) => {
  let endString = end ? <Date date={end} /> : 'Present';
  return (
    <span>
      <Date date={start} /> – {endString}
    </span>
  );
};
