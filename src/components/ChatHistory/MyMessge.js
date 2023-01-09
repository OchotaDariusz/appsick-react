import React, {useState} from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow";


export default function MyMessage(props) {
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
            <div className='col-5'>
            </div>

            <div className='col-7 d-grid'>
                <div onClick={viewMessageDetails}>
                    <a className="bg-primary rounded text-white p-3" style={{float: "right"}}>{props.message} </a>
                </div>
                <div>
                    <a style={{float: "right"}}>{author}</a>
                </div>
                <div>
                    <a style={{float: "right"}}>{whenSent}</a>
                </div>
            </div>


        </div>
    )
}