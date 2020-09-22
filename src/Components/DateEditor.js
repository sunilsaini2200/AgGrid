import React, { useState, forwardRef, useImperativeHandle } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';


export default forwardRef((props, ref) => {
    const [selectedDate, setSelectedDate] = useState(null);

    function handleDateChange(Dob) {
        if (Dob) {
            // d.setHours(0, 0, 0, 0);
        }
        setSelectedDate(Dob);
    }

    useImperativeHandle(ref, () => {
        return {
            getValue: () => {
                let dateString = null;
                if (selectedDate) {
                    dateString = format(selectedDate, 'MM/dd/yyyy');
                }
                return dateString;
            },
            isCancelAfterEnd: () => {
                return !selectedDate;
            },
           
        };
    });

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                 style={{ width: '100%', margin: 0, padding: '6px 10px', }}
                 margin="normal"
                clearable
                margin="normal"
                id="date-picker-dialog"
                format="MM/dd/yyyy"
                orientation="landscape"
                value={selectedDate}
                onChange={handleDateChange}
                placeholder={'Enter ' + props.column.colId}
            />
        </MuiPickersUtilsProvider>
    )
});
