import moment from 'moment';

const DateConverter = ({ mongoDate }: {mongoDate: Date}) => {
    const convertMongoDate = (mongoDateStr: any) => {
        const mongoDate = moment.utc(mongoDateStr);
        const formattedDate = mongoDate.format('MM/DD/YYYY HH:mm');
        return formattedDate;
    };

    const formattedDate = convertMongoDate(mongoDate);

    return (
        <div>
            <p>{formattedDate}</p>
        </div>
    );
}

export default DateConverter;