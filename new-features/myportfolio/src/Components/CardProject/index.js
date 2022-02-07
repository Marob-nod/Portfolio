import './styles.scss'
import react from 'react'
import { useState } from 'react'

function CardProject({ name, id, handleClick, isClicked }) {

    return (
        <div className={isClicked ? 'item-show' : 'item'} id={id} onClick={(id) => handleClick()} >
            <div className="vert">{name}</div>
            <div className="horiz">
                <span className='name'>{name}</span>
                <div className="topics">
                    <strong>100</strong>
                    <span>TOPICS</span>
                </div>
            </div>
        </div>
    )
}

export default CardProject


