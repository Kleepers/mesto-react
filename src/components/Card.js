import React from "react";

export default function Card ({card,onCardClick}) {

    return (
        <article className="element">
            <button aria-label="Удалить" className="element__delete-btn"/>
            <img src={card.link} alt={card.name} className="element__photo" onClick={() => onCardClick(card)}/>
            <div className="element__info">
                <h3 className="element__title">{card.name}</h3>
                <div className="element__like">
                    <button type="button" aria-label="Нравится" className="element__like-btn"/>
                    <p className="element__like-count">{card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}