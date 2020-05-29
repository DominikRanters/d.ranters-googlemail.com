import React, {FC, useEffect, useState} from 'react';
import {Camera} from "@ionic-native/camera";
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
import {
    logoNoSmoking,
    barbellSharp,
    beerOutline,
    musicalNotesSharp,
    pawOutline,
    peopleOutline
} from 'ionicons/icons';
import {log} from "util";

const propTypes = {};

const defaultProps = {};

const ProfileImage: FC = () => {
    const [text, setText] = useState<string>();
    const [selectedDate, setSelectedDate] = useState<string>();
    const [gender, setGender] = useState<string>();

    useEffect(() => {

    }, [])

    const takePhoto = () => {
        Camera.getPicture({
            destinationType: Camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then((imageData) => {
            // imageData is a base64 encoded string
            const base64Image = "data:image/jpeg;base64," + imageData;
            console.log(base64Image)
        }, (err) => {
            console.log(err);
        });
    };

    return (
        <div className="profile">
            <IonAvatar
                className="profile_avatar"
            >
                <div>
                    <img
                        className="profile_avatar_image"
                        src="https://www.glass-inspiration.com/wp-content/uploads/2020/01/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
                        alt="avatarImg"
                    />
                </div>
                <IonInput
                    className="profile_name"
                    value={text}
                    placeholder="Name"
                    onIonChange={e => setText(e.detail.value!)}
                />
            </IonAvatar>
            <div className="profile_input_container">
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
                    <IonIcon icon={musicalNotesSharp}/>
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
                    <IonIcon icon={logoNoSmoking}>Sport</IonIcon>
                    <IonSelect
                        value={gender}
                        placeholder="Rauchen"
                        onIonChange={e => setGender(e.detail.value)}
                    >
                        <IonSelectOption value="selten">selten</IonSelectOption>
                        <IonSelectOption value="normal">normal</IonSelectOption>
                        <IonSelectOption value="häufig">häufig</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonIcon icon={beerOutline}>Sport</IonIcon>
                    <IonSelect
                        value={gender}
                        placeholder="Alkohol"
                        onIonChange={e => setGender(e.detail.value)}
                    >
                        <IonSelectOption value="selten">selten</IonSelectOption>
                        <IonSelectOption value="normal">normal</IonSelectOption>
                        <IonSelectOption value="häufig">häufig</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonIcon icon={pawOutline}>Sport</IonIcon>
                    <IonSelect
                        value={gender}
                        placeholder="Haustiere"
                        onIonChange={e => setGender(e.detail.value)}
                    >
                        <IonSelectOption value="Ja">Ja</IonSelectOption>
                        <IonSelectOption value="Nein">Nein</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonIcon icon={peopleOutline}>Sport</IonIcon>
                    <IonSelect
                        value={gender}
                        placeholder="Kinder"
                        onIonChange={e => setGender(e.detail.value)}
                    >
                        <IonSelectOption value="Ja">Ja</IonSelectOption>
                        <IonSelectOption value="Nein">Nein</IonSelectOption>
                    </IonSelect>
                </IonItem>
            </div>
        </div>
    );
};

ProfileImage.propTypes = propTypes;
ProfileImage.defaultProps = defaultProps;
export default ProfileImage;
