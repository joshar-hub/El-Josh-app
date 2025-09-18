import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const CircuitSimulatorPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>ElJosh: Circuit Simulator</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" fullscreen>
                <div style={{ textAlign: 'center', marginTop: '20vh' }}>
                    <h1>Circuit Simulator</h1>
                    <p>Will be built here!</p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CircuitSimulatorPage;