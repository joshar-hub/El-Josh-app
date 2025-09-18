import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const CalculatorsPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>ElJosh: Calculators</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" fullscreen>
                <div style={{ textAlign: 'center', marginTop: '20vh' }}>
                    <h1>Calculators Page</h1>
                    <p>Ohm's Law Calculator is next!</p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CalculatorsPage;