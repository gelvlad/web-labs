const ITMO_BORN_YEAR = 1990;
const ITMO_BORN_MONTH = 3;
const ITMO_BORN_DAY = 26;

class itmoBornDate {    
    static toDateString() {
        let formatter = new Intl.DateTimeFormat('en',
            { year: 'numeric',
            literal: '',
            month: 'short',
            day: '2-digit',
            weekday: 'short' });
        let date = Date.UTC(ITMO_BORN_YEAR, ITMO_BORN_MONTH - 1, ITMO_BORN_DAY);
        let weekday, month, day, year;
        [{ value: weekday },, { value: month },, { value: day },, { value: year }] = formatter.formatToParts(date);
        return `${weekday} ${month} ${day} ${year}`;
    }
}

console.log(itmoBornDate.toDateString()); // Mon Mar 26 1990