import React, {useRef, useState} from "react"

export default function InputFields(props) {




    return (
        <div className="input-field" >
            <label>
                <input onChange={e=>props.set(e.target.value)}  type={props.type} placeholder={props.placeholder} required/>
            </label>
        </div>


    )



}