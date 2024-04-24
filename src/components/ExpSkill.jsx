import React from 'react'
const rate=['Basic','Intermediate','Experienced']
export default function ExpSkill(props) {
    return (
        <article>
            {props.badge}
            <div>
                <h3>{props.name}</h3>
                <p>{rate[props.rate-1]}</p>
            </div>
        </article>
    )
}
