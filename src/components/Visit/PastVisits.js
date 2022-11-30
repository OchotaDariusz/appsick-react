import React from 'react'
import Visit from "./Visit";
import {Virtuoso} from "react-virtuoso";

export default function PastVisits({pastVisits, loadMorePastVisits}) {
    return (<Virtuoso
        data={pastVisits}
        endReached={loadMorePastVisits}
        useWindowScroll
        itemContent={(index) => <Visit visit={pastVisits[index]} key={pastVisits[index].visitId}/>}
    />)
}