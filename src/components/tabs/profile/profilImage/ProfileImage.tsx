import React, {FC, useState} from 'react';
import {
    IonAvatar,
    IonBackButton,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonInput,
    IonContent,
    IonPage,
    IonTitle,
    IonList,
    IonItemDivider,
    IonItem,
    IonLabel,
    IonDatetime,
    IonRadioGroup,
    IonListHeader,
    IonRadio,
    IonSelect,
    IonSelectOption,
    IonIcon
} from '@ionic/react';
import PropTypes from 'prop-types';
import './profileImage.scss'
import {football, barbellSharp, musicalNoteSharp, musicalNotesSharp} from 'ionicons/icons';

const propTypes = {

};

const defaultProps = {

};

const ProfileImage: FC = () =>{
    const [text, setText] = useState<string>();
    const [selectedDate, setSelectedDate] = useState<string>();
    const [selected, setSelected] = useState<string>('biff');
    const [gender, setGender] = useState<string>();

    return (
        <>
            <IonBackButton
                className="backButton"
                defaultHref="home"
            />
            <IonAvatar className="profile_avatar">
                <img className="profile_avatar_image"
                     src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                     alt="avatarImg"
                />
            </IonAvatar>
            <div className="profile_input_container">
                <IonInput
                    value={text}
                    placeholder="Name"
                    onIonChange={e => setText(e.detail.value!)}
                />
                <IonItem>
                    <IonLabel>Geburtstag</IonLabel>
                    <IonDatetime
                        name="Hi"
                        displayFormat="YYYY-MM-DD"
                        cancelText="Cancel"
                        value={selectedDate}
                        onIonChange={e => setSelectedDate(e.detail.value!)}
                    />
                </IonItem>
                <IonItem>
                    <IonIcon icon={barbellSharp}/>
                    <IonSelect
                        value={gender}
                        placeholder="Sport"
                        onIonChange={e => setGender(e.detail.value)}
                    >
                        <IonSelectOption value="selten">selten</IonSelectOption>
                        <IonSelectOption value="normal">normal</IonSelectOption>
                        <IonSelectOption value="häufig">häufig</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonIcon icon={musicalNotesSharp} />
                    <IonSelect
                        value={gender}
                        placeholder="Musik"
                        onIonChange={e => setGender(e.detail.value)}
                    >
                        <IonSelectOption value="Schlager">Schlager</IonSelectOption>
                        <IonSelectOption value="Pop">Pop</IonSelectOption>
                        <IonSelectOption value="Rock">Rock</IonSelectOption>
                        <IonSelectOption value="Rap">Rap</IonSelectOption>
                        <IonSelectOption value="Metal">Metal</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonIcon icon={barbellSharp}>Sport</IonIcon>
                    <IonSelect
                        value={gender}
                        placeholder="Sport"
                        onIonChange={e => setGender(e.detail.value)}
                    >
                        <IonSelectOption value="selten">selten</IonSelectOption>
                        <IonSelectOption value="normal">normal</IonSelectOption>
                        <IonSelectOption value="häufig">häufig</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonIcon icon={barbellSharp}>Sport</IonIcon>
                    <IonSelect
                        value={gender}
                        placeholder="Sport"
                        onIonChange={e => setGender(e.detail.value)}
                    >
                        <IonSelectOption value="selten">selten</IonSelectOption>
                        <IonSelectOption value="normal">normal</IonSelectOption>
                        <IonSelectOption value="häufig">häufig</IonSelectOption>
                    </IonSelect>
                </IonItem>
            </div>
        </>
    );
};

ProfileImage.propTypes = propTypes;
ProfileImage.defaultProps = defaultProps;
export default ProfileImage;
