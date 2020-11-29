import React, { useState, useRef } from 'react';
import './card.scss'
import logo from '../../image_assets/test.png'
import heart from '../../assets/heart.svg'
import checkmark from '../../assets/checkmark.svg'
import message_square from '../../assets/message-square.svg'

function Tag({ text = "" }) {
    return <span className="tag"> {text} </span>

}
function TagGenerator({ listOfTags }) {
    const tags = []
    for (let i = 0; i < listOfTags.length; i++) {
        tags.push(<Tag key={i} text={listOfTags[i]} />)
    }
    return (
        <div className="tag-wrapper">{tags}</div>
    )
}


function GridCardGenerator({
    selected = false,
    handleSelect = () => { },
    img = logo, title = "John Doe",
    tags = ["hello", "hello"],
    content = "Some example text some example text. John Doe is an architect and engineer"
}) {
    const cardWrapper = ["card", "active"]
    const cardTitle = ["card-title", "active"]
    if (selected) {
        cardWrapper.push("selected")
        cardTitle.push("selected")
    }
    return (
        <div className={cardWrapper.join(" ")} onClick={handleSelect}>
            <div >
                <ul><li id="ovel" style={{ display: selected ? 'block' : 'none' }}>
                    {selected && <img id = "checked" src={checkmark} />}
                    </li>
                </ul>
                <img className="card-imgae" src={img} alt="Card image" />
            </div>
            <TagGenerator listOfTags={tags} />
            <div className="card-body">
                <h4 className={cardTitle.join(" ")}>{title}</h4>
                <p className="card-content ">{content}</p>
            </div>
            <div className="icon-container">
                <span className="card-icons"><img className='message_square' src={message_square}></img></span>
                <span className="card-icons"><img className='heart' src={heart}></img></span>
            </div>
        </div>
    )
}

function ListCardGenerator({
    selected = false,
    handleSelect = () => { },
    img = logo, title = "John Doe",
    tags = ["hello", "hello"],
    content = "Some example text some example text. John Doe is an architect and engineer"
}) {
    const cardWrapper = ["list-card", "active"]
    const cardTitle = ["card-title", "active"]
    if (selected) {
        cardWrapper.push("selected")
        cardTitle.push("selected")
    }
    return (
        <div className={cardWrapper.join(" ")} onClick={handleSelect}>
            <img className="card-imgae" src={img} alt="Card image" />
            <h4 className={cardTitle.join(" ")}>{title}</h4>
            <span><img className='heart' src={heart}></img></span>
        </div>
    )
}

function CardGenerator({ type, ...props }) {
    if (type == 'grid') {
        return <GridCardGenerator {...props} />
    }
    else if (type == 'list') {
        return <ListCardGenerator {...props} />
    }
    else {
        return ''
    }
}

export default CardGenerator
