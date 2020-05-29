import React, {FC} from 'react';
import {IonBackButton, IonContent, IonPage} from '@ionic/react';
import './profile.scss';
import ProfileImage from "./profilImage/ProfileImage";

const Profile: FC = () => {
    return (
        <IonPage>
            <IonContent>
                {/*<IonBackButton*/}
                {/*    className="backButton"*/}
                {/*    defaultHref="home"*/}
                {/*/>*/}
                <ProfileImage/>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
