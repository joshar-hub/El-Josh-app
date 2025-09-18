import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
    homeOutline,
    calculatorOutline,
    cubeOutline, // General icon for simulator
    bookOutline, // For component library
    bulbOutline, // Tutorials
    chatbubblesOutline, // Forum
    swapHorizontalOutline, // Unit Converter
} from 'ionicons/icons';
import './Menu.css'; // Will create this file

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: 'Home',
        url: '/home',
        iosIcon: homeOutline,
        mdIcon: homeOutline
    },
    {
        title: 'Calculators',
        url: '/calculators',
        iosIcon: calculatorOutline,
        mdIcon: calculatorOutline
    },
    {
        title: 'Circuit Simulator',
        url: '/simulator',
        iosIcon: cubeOutline,
        mdIcon: cubeOutline
    },
    {
        title: 'Component Library',
        url: '/component_library',
        iosIcon: bookOutline,
        mdIcon: bookOutline
    },
];

const secondaryPages: AppPage[] = [
    {
        title: 'Tutorials & Guides',
        url: '/tutorials',
        iosIcon: bulbOutline,
        mdIcon: bulbOutline
    },
    {
        title: 'Community Forum',
        url: '/forum',
        iosIcon: chatbubblesOutline,
        mdIcon: chatbubblesOutline
    },
    {
        title: 'Unit Converter',
        url: '/unit_converter',
        iosIcon: swapHorizontalOutline,
        mdIcon: swapHorizontalOutline
    },
];

const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="inbox-list">
                    <IonListHeader>ElJosh</IonListHeader>
                    <IonNote>Electronics Toolkit</IonNote>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                    <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>

                <IonList id="secondary-list">
                    <IonListHeader>More Tools</IonListHeader>
                    {secondaryPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                    <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;