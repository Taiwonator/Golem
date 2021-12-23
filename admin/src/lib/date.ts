const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const formatDate = (date) => {
    if(date) {
        date = new Date(date)
        const formattedDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() //Tuesday February 12 2013
        console.log('date: ', formattedDate)
        return formattedDate
    } else {
        return 'Invalid date'
    }
}