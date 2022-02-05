import './styles.scss'

function CardProject({ name, id }) {
    return (
        <div className="item" id={id}>
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


