import React from 'react'

export const ProjectDetails = (props) => {
    const id = props.match.params.id
    return <div>{id}</div>
}