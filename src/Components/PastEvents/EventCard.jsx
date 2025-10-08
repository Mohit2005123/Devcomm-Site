import "./PastEvent.scss"
const Item=(props)=>
{
    return (
        <div className="item-container">
        <div className='card-container'>
            <img src={props.item.logo} alt="event-logo" />
            <div className='event-container'>
                <div className='event-name'>{props.item.name}</div>
                <p className='event-desc'>{props.item.description}</p>
            </div>
        </div>
        </div>
    )
}
export default Item;