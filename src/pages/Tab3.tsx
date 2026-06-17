import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de Usuario</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="card-container">
          <IonCard className="card">
            <img src="https://avatars.githubusercontent.com/u/232135555?v=4&size=64" alt="Avatar"/>
            <IonCardHeader>
              <IonCardTitle>Jennifer Balseca</IonCardTitle>
              <IonCardSubtitle>jenniferbalseca</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Desarrolladora de Software
            </IonCardContent>
          </IonCard>
        </div>
. 
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
