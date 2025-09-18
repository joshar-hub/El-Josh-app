import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const ComponentLibraryPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>ElJosh: Component Library</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" fullscreen>
                <div style={{ textAlign: 'center', marginTop: '20vh' }}>
                    <h1>Component Library</h1>
                    <p>Browse components here! Resistor color codes are coming!</p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ComponentLibraryPage;