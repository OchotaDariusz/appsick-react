import React, {useRef, useState} from "react"

export default function InputFields(props) {

    const [color, setcolor] = useState("")
    const [info, setInfo] = useState("")

    return (
        <div className="row ">

                <div className="input-field ">


                        <input className="float-start"
                            style={{
                                backgroundColor: props.color
                            }}
                            onChange={e => props.set(e.target.value)} type={props.type} placeholder={props.placeholder}
                            required/>

                    <span>
                        {props.info}
                    </span>
                </div>



            {/*</div>*/}
        </div>


    )


}