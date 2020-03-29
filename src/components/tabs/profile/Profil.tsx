import React, { FC } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './profile.scss';
import ProfileImage from "./profilImage/ProfileImage";

const Profile: FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ProfileImage />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
