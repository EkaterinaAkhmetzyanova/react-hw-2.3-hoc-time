export default function FormatDateTime(date) {
    const publishedDate = new Date(date);
    const currentDate = new Date();
    const hoursDiff = currentDate.getHours() - publishedDate.getHours();
    const minDiff = currentDate.getMinutes() - publishedDate.getMinutes();
    const diff = +(currentDate.getTime() - publishedDate.getTime);
    const daysDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (daysDiff >= 1) {
        return `${daysDiff} день(дней) назад`;
    } else {
        if (hoursDiff >= 1 && hoursDiff < 24) {
            return `${hoursDiff} час(часов) назад`;
        }
        if (minDiff < 60 && minDiff > 0) {
            return `${minDiff} минут(ы) назад`
        }
    } 
    return 'только что';
}