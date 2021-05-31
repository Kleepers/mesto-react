import {api} from "../utils/api";
import React from 'react'
import Card from "./Card";

export default function Main (props) {
    const [userName,userNameHandler] = React.useState('')
    const [userDescription,userDescriptionHandler] = React.useState('')
    const [userAvatar,userAvatarHandler] = React.useState('')
    const [cards,cardsHandler] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfoApi()
            .then(res => {
                userNameHandler(res.name);
                userDescriptionHandler(res.about);
                userAvatarHandler(res.avatar);
            })
    }, [])

    React.useEffect(() => {
        api.getInitialCards()
            .then(res => {
                cardsHandler(res);
            })
    }, [])

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})`}} onClick={props.onEditAvatar}>
                    <button className="profile__edit-avatar" />
                    <div className="profile__avatar-overlay"/>
                </div>
                <div className="profile__info">
                    <div className="profile__nickname">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-btn profile__popup-btn" onClick={props.onEditProfile}/>
                    </div>
                    <h2 className="profile__description">{userDescription}</h2>
                </div>
                <button type="button" className="profile__add-btn profile__popup-btn" onClick={props.onAddPlace}/>
            </section>

            <section className="elements">
                {cards.map(function(card) {
                    return (
                            <Card card={card} onCardClick={props.onCardClick} key={card._id}/>
                        )
                })}
            </section>

        </main>
    )
}


