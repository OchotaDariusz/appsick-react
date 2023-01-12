export const snakeToCamel = str =>
    str.toLowerCase().replace(/([-_][a-z])/g, group =>
        group
            .toUpperCase()
            .replace('_', '')
    )


export const isToday = (visit) => {
const date = new Date(visit.date).getUTCDate()
    console.log(date)

    return new Date(visit.date).getFullYear() === new Date().getFullYear()
        && new Date(visit.date).getMonth() === new Date().getMonth()
        && new Date(visit.date).getDay() === new Date().getDay();

}

export const formatVisitDate = visit => {
    visit.date = [new Date(visit.date).toLocaleDateString(), new Date(visit.date).toLocaleTimeString()]
    return visit
}