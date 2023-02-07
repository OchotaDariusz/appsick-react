export const isToday = (visit) => {
    const date = new Date(visit.date).getUTCDate()

    return new Date(visit.date).getFullYear() === new Date().getFullYear()
        && new Date(visit.date).getMonth() === new Date().getMonth()
        && new Date(visit.date).getDate() === new Date().getDate();

}

export const formatVisitDate = visit => {
    visit.date = [new Date(visit.date).toLocaleDateString(), new Date(visit.date).toLocaleTimeString()]
    return visit
}