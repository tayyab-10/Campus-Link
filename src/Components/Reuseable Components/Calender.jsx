import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
        <DemoItem>
          <DateRangeCalendar calendars={1} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default Calendar;
