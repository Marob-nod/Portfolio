import { useRef } from 'react'
import './styles.scss'


function CardProject({ name, handleClick, currentProject, title, techs, link, description, handleClickOut }) {
    const wrapperRef = useRef(null)
    handleClickOut(wrapperRef)
    return (
        <div className={currentProject === name ? 'item-show' : 'item'} id={name} onClick={() => handleClick(name)} ref={wrapperRef}>
            {currentProject === name ?
                <div className="banner-top">
                    <div className='title'>
                        {title}
                    </div>
                    <a className='link' href={link}>
                        TAKE A LOOK
                    </a>
                </div> : ''
            }
            {currentProject === name ?
                <div className="banner-bottom">
                    <div className='description'>
                        {description.toUpperCase()}
                    </div>
                    <a className='techs'>
                        TECHS: {techs}
                    </a>
                </div> : ''
            }
        </div>
    )
}

export default CardProject


