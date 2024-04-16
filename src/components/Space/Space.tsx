import "./Space.css"

function Space({spaceNumber, intCount}) {
    return (
        <div className="space">
            <h2 className="space__title">Поле {spaceNumber}</h2>
            <p className="space__discription">Отметьте {intCount} {intCount > 1 ? "чисел" : "число"}</p>
            
        </div>
    )
}

export default Space;