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

        console.log("rok");
        console.log(new Date(visit.date).getFullYear());
        console.log(new Date().getFullYear());
        console.log(new Date().getFullYear()===new Date(visit.date).getFullYear());
        console.log("miesiac");
        console.log(new Date(visit.date).getMonth());
        console.log(new Date().getMonth());
        console.log(new Date(visit.date).getMonth() === new Date().getMonth());
        console.log("dzien");
        console.log(new Date(visit.date).getDay());
        console.log(new Date().getDay());
        console.log(new Date(visit.date).getDay() === new Date().getDay());
        console.log("koniec");

    }



    return new Date(visit.date).getFullYear() === new Date().getFullYear()
        && new Date(visit.date).getMonth() === new Date().getMonth()
        && new Date(visit.date).getDay() === new Date().getDay();
}

export const formatVisitDate = visit => {
    visit.date = [new Date(visit.date).toLocaleDateString(), new Date(visit.date).toLocaleTimeString()]
    return visit
}