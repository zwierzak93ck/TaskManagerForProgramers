import React from 'react'

export const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div>
            <div>Title: Title {id}</div>
            <div>Description: Description</div>
        </div>
    )
}