import { parseISO, format } from 'date-fns';

type Props = {
    dateString: string;
};

export default function DateFormatter({ dateString }: Props) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'yyyy年MM月dd日')}</time>;
}
