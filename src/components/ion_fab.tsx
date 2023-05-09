import { IonButton, IonButtons, IonCardTitle, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonModal, IonPicker, IonTitle, IonToolbar, useIonPicker } from '@ionic/react';
import './date_time.css';
import { useEffect, useRef, useState } from 'react';
import { add, chevronBack, chevronDown, chevronDownCircle, chevronForward, chevronForwardCircle, chevronUp, chevronUpCircle, colorPalette, globe } from 'ionicons/icons';

interface ContainerProps { }

const Ion_fab: React.FC<ContainerProps> = () => {
    const Ion_fab = useRef<null | HTMLIonDatetimeElement>(null);


    return (
        <>

            {/* <IonFab>
                    <IonFabButton>
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                </IonFab>
                
                
                <IonFab slot="fixed" horizontal="center" vertical="center">
                    
                    <IonFabButton>
                        <IonIcon icon={add}> multiple</IonIcon>
                    </IonFabButton>
                    <IonFabList side="top">
                        <IonFabButton>
                            <IonIcon icon={chevronUp}></IonIcon>
                        </IonFabButton>
                    </IonFabList>
                    <IonFabList side="end">
                        <IonFabButton>
                            <IonIcon icon={chevronForward}></IonIcon>
                        </IonFabButton>
                        <IonFabButton>
                            <IonIcon icon={chevronForward}></IonIcon>
                        </IonFabButton>
                    </IonFabList>
                    <IonFabList side="bottom">
                        <IonFabButton>
                            <IonIcon icon={chevronDown}></IonIcon>
                        </IonFabButton>
                    </IonFabList>
                    <IonFabList side="start">
                        <IonFabButton>
                            <IonIcon icon={chevronBack}></IonIcon>
                        </IonFabButton>
                        <IonFabButton>
                            <IonIcon icon={chevronBack}></IonIcon>
                        </IonFabButton>
                    </IonFabList>
                </IonFab> */}

            <IonHeader>
                <IonToolbar>
                    <IonTitle>Fab Buttons</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonFab slot="fixed" vertical="top" horizontal="start">
                    <IonFabButton>
                        <IonIcon icon={chevronForwardCircle}></IonIcon>
                    </IonFabButton>
                    <IonFabList side="end">
                        <IonFabButton>
                            {/* <IonIcon icon={document}></IonIcon> */}
                        </IonFabButton>
                        <IonFabButton>
                            <IonIcon icon={colorPalette}></IonIcon>
                        </IonFabButton>
                        <IonFabButton>
                            <IonIcon icon={globe}></IonIcon>
                        </IonFabButton>
                    </IonFabList>
                </IonFab>

                <IonFab slot="fixed" vertical="top" horizontal="end" edge={true}>
                    <IonFabButton>
                        <IonIcon icon={chevronDownCircle}></IonIcon>
                    </IonFabButton>
                    <IonFabList side="bottom">
                        <IonFabButton>
                            {/* <IonIcon icon={document}></IonIcon> */}
                        </IonFabButton>
                        <IonFabButton>
                            <IonIcon icon={colorPalette}></IonIcon>
                        </IonFabButton>
                        <IonFabButton>
                            <IonIcon icon={globe}></IonIcon>
                        </IonFabButton>
                    </IonFabList>
                </IonFab>

                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton>
                        <IonIcon icon={chevronUpCircle}></IonIcon>
                    </IonFabButton>
                    <IonFabList side="top">
                        <IonFabButton>
                            {/* <IonIcon icon={document}></IonIcon> */}
                        </IonFabButton>
                        <IonFabButton>
                            <IonIcon icon={colorPalette}></IonIcon>
                        </IonFabButton>
                        <IonFabButton>
                            <IonIcon icon={globe}></IonIcon>
                        </IonFabButton>
                    </IonFabList>
                </IonFab>

      
            </IonContent>
            {/* <IonFab>
                    <IonFabButton>
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                    <IonFabList side="end">
                        <IonFabButton>
                            <IonIcon icon={globe}></IonIcon>
                        </IonFabButton>
                        <IonFabButton>
                            <IonIcon icon={colorPalette}></IonIcon>
                        </IonFabButton>
                        <IonFabButton>
                            <IonIcon icon={globe}></IonIcon>
                        </IonFabButton>
                    </IonFabList>
                </IonFab> */}







        </>
    );
};

export default Ion_fab;
