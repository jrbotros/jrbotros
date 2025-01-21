import { format, parseISO } from 'date-fns';

export function Date({ date }: { date: string }) {
  return (
    <span style={{ whiteSpace: 'nowrap' }}>
      {format(parseISO(date), 'MMMM yyyy')}
    </span>
  );
}

export function DateRange({ start, end }: { start: string; end?: string }) {
  let endString = end ? <Date date={end} /> : 'Present';
  return (
    <span>
      <Date date={start} /> – {endString}
    </span>
  );
}
