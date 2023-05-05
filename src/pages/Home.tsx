import {
  IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonAvatar, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonContent,
  IonFooter,
  IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRippleEffect, IonTitle, IonToolbar
} from '@ionic/react';
import { camera, closeCircle, film, flash, home, logoIonic, pin, close } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Date_time from '../components/date_time';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const handlerclick = () => {
    history.push("/https://ionicframework.com/docs/api/chip");
  }
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>tharchen #header</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>


          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>

          <h1> IonActionSheet</h1>
          <IonButton id="open-action-sheet">Open</IonButton>
          <IonActionSheet
            trigger="open-action-sheet"
            header="Actions"
            buttons={[
              {
                text: 'Delete',
                role: 'destructive',
                data: {
                  action: 'delete',
                },
              },
              {
                text: 'Share',
                data: {
                  action: 'share',
                },
              },
              {
                text: 'Cancel',
                role: 'cancel',
                data: {
                  action: 'cancel',
                },
              },
            ]}
          ></IonActionSheet>

          <h1> IonAccordionGroup</h1>
          <IonAccordionGroup>
            <IonAccordion value="first">
              <IonItem slot="header" color="light">
                <IonLabel>First Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                First Content
              </div>
            </IonAccordion>
            <IonAccordion value="second">
              <IonItem slot="header" color="light">
                <IonLabel>Second Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Second Content
              </div>
            </IonAccordion>
            <IonAccordion value="third">
              <IonItem slot="header" color="light">
                <IonLabel>Third Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Third Content
              </div>
            </IonAccordion>
          </IonAccordionGroup>



          {/* makes call from component */}
          {/* <ExploreContainer /> */}

          <h1>IonBadge</h1>
          <IonList>
            <IonItem>
              <IonBadge slot="start">11</IonBadge>
              <IonLabel>Badge in start slot</IonLabel>
            </IonItem>
            <IonItem>
              <IonBadge slot="end">22</IonBadge>
              <IonLabel>Badge in end slot</IonLabel>
            </IonItem>
          </IonList>

          <h1>IonBreadcrumbs</h1>
          <IonBreadcrumbs>
            <IonBreadcrumb href="#home">Home</IonBreadcrumb>
            <IonBreadcrumb href="#electronics">Electronics</IonBreadcrumb>
            <IonBreadcrumb href="#cameras">Cameras</IonBreadcrumb>
            <IonBreadcrumb href="#film">Film</IonBreadcrumb>
          </IonBreadcrumbs>

          <h1>IonBreadcrumbs with icons</h1>
          <IonLabel>Icons at Start</IonLabel>
          <IonBreadcrumbs>
            <IonBreadcrumb href="#home">
              <IonIcon slot="start" icon={home}></IonIcon>
              Home
            </IonBreadcrumb>
            <IonBreadcrumb href="#electronics">
              <IonIcon slot="start" icon={flash}></IonIcon>
              Electronics
            </IonBreadcrumb>
            <IonBreadcrumb href="#cameras">
              <IonIcon slot="start" icon={camera}></IonIcon>
              Cameras
            </IonBreadcrumb>
            <IonBreadcrumb href="#film">
              <IonIcon slot="start" icon={film}></IonIcon>
              Film
            </IonBreadcrumb>
          </IonBreadcrumbs>

          <IonLabel class="ion-margin-top">Icons at End</IonLabel>
          <IonBreadcrumbs>
            <IonBreadcrumb href="#home">
              Home
              <IonIcon slot="end" icon={home}></IonIcon>
            </IonBreadcrumb>
            <IonBreadcrumb href="#electronics">
              Electronics
              <IonIcon slot="end" icon={flash}></IonIcon>
            </IonBreadcrumb>
            <IonBreadcrumb href="#cameras">
              Cameras
              <IonIcon slot="end" icon={camera}></IonIcon>
            </IonBreadcrumb>
            <IonBreadcrumb href="#film">
              Film
              <IonIcon slot="end" icon={film}></IonIcon>
            </IonBreadcrumb>
          </IonBreadcrumbs>


          <h1> IonAlert #Inline Alerts</h1>
          <IonButton id="present-alert">Click Me</IonButton>
          <IonAlert
            trigger="present-alert"
            header="Alert"
            subHeader="Important message"
            message="This is an alert!"
            buttons={['OK']}
          ></IonAlert>

          <h1> IonAlert #setopen Alerts</h1>
          <IonButton onClick={() => setIsOpen(true)}>Click Me</IonButton>
          <IonAlert
            isOpen={isOpen}
            header="Alert"
            subHeader="Important message"
            message="This is an alert!"
            buttons={['OK']}
            onDidDismiss={() => setIsOpen(false)}
          ></IonAlert>


          <h1>ionbutton</h1>
          <IonButton href='https://ionicframework.com/docs/api/ripple-effect'>Default</IonButton>
          <IonButton disabled={true}>Disabled</IonButton>

          <h1>ion ripple effect</h1>
          <div className="wrapper">
            <b>Click on a shape to see the ripple</b>

            <div className="ion-activatable ripple-parent rectangle">
              <IonRippleEffect></IonRippleEffect>
            </div>

            <div className="ion-activatable ripple-parent rounded-rectangle">
              <IonRippleEffect></IonRippleEffect>
            </div>

            <div className="ion-activatable ripple-parent circle">
              <IonRippleEffect></IonRippleEffect>
            </div>
          </div>

          <h1>Ioncard</h1>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Card Title</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.
              Here's a small text description for the card content. Nothing more, nothing less.
            </IonCardContent>
          </IonCard>

          <h1>ion-card-content</h1>
          <IonCard>
            <IonCardContent>
              tharchen sherpa ion card content no space:
            </IonCardContent>
          </IonCard>

          <h1>ionCheck box</h1>
          <IonCheckbox>I agree to the terms and conditions</IonCheckbox>
          <IonCheckbox>this is a ionCheckbox</IonCheckbox>

          <h1>CHeckbpx with label placement</h1>
          <IonCheckbox labelPlacement="start">Label at the Start</IonCheckbox>
          <br />
          <IonCheckbox labelPlacement="end">Label at the End</IonCheckbox>
          <br />
          <IonCheckbox labelPlacement="fixed">Fixed Width Label</IonCheckbox>
          <br />

          <h1>Justification of check box</h1>
          <IonList>
            <IonItem>
              <IonCheckbox justify="start">Packed at the Start of Line</IonCheckbox>
            </IonItem>

            <IonItem>
              <IonCheckbox justify="end">Packed at the End of Line</IonCheckbox>
            </IonItem>

            <IonItem>
              <IonCheckbox justify="space-between">Space Between Label and Control</IonCheckbox>
            </IonItem>
          </IonList>

          <h1>intermediate checkbox</h1>
          <IonCheckbox indeterminate={true}>Indeterminate checkbox</IonCheckbox>

          <h1>themeing checkbox</h1>
          <IonCheckbox>Themed checkbox</IonCheckbox>

          {/* Basic */}

          {/* Before */}
          <IonItem>
            <IonLabel>Checkbox Label</IonLabel>
            <IonCheckbox></IonCheckbox>
          </IonItem>

          {/* After */}
          <IonItem>
            <IonCheckbox>Checkbox Label</IonCheckbox>
          </IonItem>

          {/* Fixed Labels */}

          {/* Before */}
          <IonItem>
            <IonLabel position="fixed">Checkbox Label</IonLabel>
            <IonCheckbox></IonCheckbox>
          </IonItem>

          {/* After */}
          <IonItem>
            <IonCheckbox labelPlacement="fixed">Checkbox Label</IonCheckbox>
          </IonItem>

          {/* Checkbox at the start of line, Label at the end of line */}

          {/* Before */}
          <IonItem>
            <IonLabel slot="end">Checkbox Label</IonLabel>
            <IonCheckbox></IonCheckbox>
          </IonItem>

          {/* After */}
          <IonItem>
            <IonCheckbox labelPlacement="end">Checkbox Label</IonCheckbox>
          </IonItem>

          <h1>ionchip</h1>
          <IonChip onClick={handlerclick}>Default</IonChip>
          <IonChip disabled={true}>Disabled</IonChip>
          <IonChip outline={true}>Outline</IonChip>

          <h1>Slotting Components and Icons</h1>
          <IonChip>
            <IonAvatar>
              <img alt="Silhouette of a person's head" src="https://rare-gallery.com/thumbnail/1355563-Roronoa-Zoro-Green-HairRoronoa-Zoro.png" />
            </IonAvatar>
            <IonLabel>Avatar Chip</IonLabel>
            <IonIcon icon={closeCircle}></IonIcon>
          </IonChip>

          <IonChip>
            <IonIcon icon={pin} color="primary"></IonIcon>
            <IonLabel>Icon Chip</IonLabel>
            <IonIcon icon={close}></IonIcon>
          </IonChip>

          <h1>chip Theming</h1>
          <IonChip>Default</IonChip>
          <IonChip color="primary">Primary</IonChip>
          <IonChip color="secondary">Secondary</IonChip>
          <IonChip color="tertiary">Tertiary</IonChip>
          <IonChip color="success">Success</IonChip>
          <IonChip color="warning">Warning</IonChip>
          <IonChip color="danger">Danger</IonChip>
          <IonChip color="light">Light</IonChip>
          <IonChip color="medium">Medium</IonChip>
          <IonChip color="dark">Dark</IonChip>

          <h1>redirect to Test page</h1>
          <IonButton href='/test'>TEST PAGE</IonButton>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>componnent concept</IonCardTitle>
              <IonCardSubtitle>using component</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              {/* makes call from component */}
              <Date_time />
            </IonCardContent>
          </IonCard>





          <br /><br /><br /><br /><br />
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonTitle> tharchen #Footer</IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonPage >
    </>
  );
};

export default Home;
