import React, {useState} from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow";


export default function OtherMessage(props) {
    const [author, setAuthor] = useState("")
    const [whenSent, setWhenSent] = useState("")
    const viewMessageDetails = () => {
        if (author === "") {
            setAuthor(props.author)
            setWhenSent(formatDistanceToNow(new Date(props.date), {addSuffix: true}))
        } else {
            setAuthor("")
            setWhenSent("")
        }
    }
    return (
        <div className="row">
            <div className="col-1">
                <image>{props.image}</image>
            </div>
            <div className='col-7 d-grid'>
                <div onClick={viewMessageDetails}>
                    <a className="bg-secondary rounded text-white p-3" style={{float: "left"}}>{props.message} </a>
                </div>
                <div>
                    <a style={{float: "left"}}>{author}</a>
                </div>
                <div>
                    <a style={{float: "left"}}>{whenSent}</a>
                </div>
            </div>
            <div className='col-2'/>


        </div>
    )
}