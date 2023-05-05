import {
    IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonAvatar, IonBackButton, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonContent,
    IonFooter,
    IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRippleEffect, IonTitle, IonToolbar
} from '@ionic/react';
import { camera, closeCircle, film, flash, home, logoIonic, pin, close } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './test.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Ion_picker from '../components/ion_picker';

const test: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const handlerclick = () => {
        history.push("/https://ionicframework.com/docs/api/chip");
    }
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton>back</IonBackButton>
                    </IonButtons>
                    <IonTitle>tharchen#backbuttons</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>

                <p>Here's a small text description for the content. Nothing more, nothing less.</p>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>componnent concept</IonCardTitle>
                        <IonCardSubtitle>using component</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        {/* makes call from component */}
                        <Ion_picker />
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonTitle>Footer</IonTitle>
                </IonToolbar>
            </IonFooter>
        </>
    );
}
export default test;