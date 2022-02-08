import './styles.scss'


function CardProject({ name, handleClick, currentProject }) {

    return (
        <div className={currentProject === name ? 'item-show' : 'item'} id={name} onClick={() => handleClick(name)} >
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


