import React from 'react'
import Visit from "./Visit";
import {Virtuoso} from "react-virtuoso";
import {Spinner} from '@chakra-ui/react'

export default function PastVisits({pastVisits, isPastVisitsLoading, loadMorePastVisits}) {
    const Footer = () => {
        return (
            <div
                style={{
                    padding: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Spinner/>
            </div>
        )
    }

    return (<Virtuoso
        style={{height: 300}}
        data={pastVisits}
        endReached={loadMorePastVisits}
        useWindowScroll
        itemContent={(index) => <Visit visit={pastVisits[index]} key={pastVisits[index].visitId}/>}
        components={{Footer}}
    />)
}