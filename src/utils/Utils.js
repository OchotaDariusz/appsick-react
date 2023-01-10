export const snakeToCamel = str =>
    str.toLowerCase().replace(/([-_][a-z])/g, group =>
        group
            .toUpperCase()
            .replace('_', '')
    )


export const isToday = (visit) => {
    // console.log(visit.date)
    // if(new Date().getDay() === new Date(visit.date).getDay()){
    //     console.log("asdasd")
    // }
    // console.log(visit.date[1].toLocaleDateString("en-US"));
    if(!(new Date(visit.date).getFullYear() === new Date().getFullYear()
        && new Date(visit.date).getMonth() === new Date().getMonth()
        && new Date(visit.date).getDay() === new Date().getDay())){


    }



    return new Date(visit.date).getFullYear() === new Date().getFullYear()
        && new Date(visit.date).getMonth() === new Date().getMonth()
        && new Date(visit.date).getDay() === new Date().getDay();
}

export const formatVisitDate = visit => {
    visit.date = [new Date(visit.date).toLocaleDateString(), new Date(visit.date).toLocaleTimeString()]
    return visit
}