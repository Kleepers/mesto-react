import {api} from "../utils/api";
import React from 'react'
import Card from "./Card";

export default function Main (props) {
    const [userName,setUserName] = React.useState('')
    const [userDescription,setUserDescription] = React.useState('')
    const [userAvatar,setUserAvatar] = React.useState('')
    const [cards,setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfoApi()
            .then(res => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch(err => console.log(`Ошибка при получении данных пользователя: ${err}`))
    }, [])

    React.useEffect(() => {
        api.getInitialCards()
            .then(res => {
                setCards(res);
            })
            .catch(err => console.log(`Ошибка при получении карточек: ${err}`))
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


