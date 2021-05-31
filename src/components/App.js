import Header from './Header'
import Main from './Main'
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from 'react';

export default function App() {

    const [isEditProfilePopupOpen,handleEditProfileClick] = React.useState(false);
    const [isEditAvatarPopupOpen,handleEditAvatarClick] = React.useState(false);
    const [isAddPlacePopupOpen,handleAddPlaceClick] = React.useState(false);
    const [isPlaceDeletePopupOpen,handlePlaceDeletePopupClick] = React.useState(false);

    const [selectedCard,handleCardClick] = React.useState(false);

    function closeAllPopups () {
        handleEditProfileClick(false);
        handleEditAvatarClick(false);
        handleAddPlaceClick(false);
        handlePlaceDeletePopupClick(false);
        handleCardClick(false);
    }

    return (
        <div className="page">

            <Header/>
            <Main onEditProfile={() => handleEditProfileClick(!isEditProfilePopupOpen)}
                onAddPlace={() => handleAddPlaceClick(!isAddPlacePopupOpen)}
                onEditAvatar={() => handleEditAvatarClick(!isEditAvatarPopupOpen)}
                onCardClick={(card) => handleCardClick(card)}
            />
            <Footer/>
            <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input type="text" placeholder="Ваше имя" id="popup__name"
                     className="popup__input popup__input_value_name" name="name" required minLength="2"
                     maxLength="40"/>
                <span className="popup__input-error popup__name-error"/>
                <input type="text" placeholder="О себе" id="popup__info"
                     className="popup__input popup__input_value_info" name="info" required minLength="2"
                     maxLength="200"/>
                <span className="popup__input-error popup__info-error"/>
            </PopupWithForm>

            <PopupWithForm name='add' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input type="text" placeholder="Название" id="popup__place"
                     className="popup__input popup__input_value_place" name="place" required minLength="2" maxLength="30"/>
                <span className="popup__input-error popup__place-error"/>
                <input type="url" placeholder="Ссылка на картинку" id="popup__image"
                     className="popup__input popup__input_value_image" name="image" required/>
                <span className="popup__input-error popup__image-error"/>
            </PopupWithForm>

            <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <input className="popup__input popup__input_value_avatar" type="url" placeholder="Ссылка на картинку"
                     id="popup__avatar" name="avatar" required/>
                <span className="popup__input-error popup__avatar-error"/>
            </PopupWithForm>

            <PopupWithForm name='delete' title='Вы уверены?' isOpen={isPlaceDeletePopupOpen} onClose={closeAllPopups}/>

            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

        </div>
  );
}


