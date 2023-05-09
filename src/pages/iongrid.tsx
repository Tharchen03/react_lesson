import {
    IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonAvatar, IonBackButton, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonContent,
    IonFooter,
    IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRippleEffect, IonTitle, IonToolbar
} from '@ionic/react';
import { camera, closeCircle, film, flash, home, logoIonic, pin, close } from 'ionicons/icons';

import Ion_grid from '../components/ion_grid';



const Iongrid: React.FC = () => {

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
             

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>componnent concept</IonCardTitle>
                        <IonCardSubtitle>ION Grid</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        {/* makes call from component */}
                        <Ion_grid />
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
export default Iongrid;