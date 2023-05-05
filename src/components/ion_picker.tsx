import { IonButton, IonButtons, IonCardTitle, IonDatetime, IonDatetimeButton, IonModal, IonPicker, useIonPicker } from '@ionic/react';
import './date_time.css';
import { useEffect, useRef, useState } from 'react';

interface ContainerProps { }

const Ion_picker: React.FC<ContainerProps> = () => {
    const Ion_picker = useRef<null | HTMLIonDatetimeElement>(null);
    // setoprn
    const [isOpen, setIsOpen] = useState(false);
    
    // Controller Pickers
    const [present] = useIonPicker();
    const openPicker = async () => {
        present({
          columns: [
            {
              name: 'languages',
              options: [
                {
                  text: 'JavaScript',
                  value: 'javascript',
                },
                {
                  text: 'TypeScript',
                  value: 'typescript',
                },
                {
                  text: 'Rust',
                  value: 'rust',
                },
                {
                  text: 'C#',
                  value: 'c#',
                },
              ],
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'Confirm',
              handler: (value) => {
                window.alert(`You selected: ${value.languages.value}`);
              },
            },
          ],
        });
      };

    return (
        <>
            <center>
                <IonButton id="open-picker">ION_PICKER</IonButton>
                <IonPicker
                    trigger="open-picker"
                    columns={[
                        {
                            name: 'languages',
                            options: [
                                {
                                    text: 'JavaScript',
                                    value: 'javascript',
                                },
                                {
                                    text: 'TypeScript',
                                    value: 'typescript',
                                },
                                {
                                    text: 'Rust',
                                    value: 'rust',
                                },
                                {
                                    text: 'C#',
                                    value: 'c#',
                                },
                            ],
                        },
                    ]}
                    buttons={[
                        {
                            text: 'Cancel',
                            role: 'cancel',
                        },
                        {
                            text: 'Confirm',
                            handler: (value) => {
                                window.alert(`You selected: ${value.languages.value}`);
                            },
                        },
                    ]}
                ></IonPicker>

                <br /><br />
                <IonCardTitle>Using isOpen</IonCardTitle>
                <IonButton onClick={() => setIsOpen(true)}>Using IsOpen</IonButton>
                <IonPicker
                    isOpen={isOpen}
                    onDidDismiss={() => setIsOpen(false)}
                    columns={[
                        {
                            name: 'languages',
                            options: [
                                {
                                    text: 'JavaScript',
                                    value: 'javascript',
                                },
                                {
                                    text: 'TypeScript',
                                    value: 'typescript',
                                },
                                {
                                    text: 'Rust',
                                    value: 'rust',
                                },
                                {
                                    text: 'C#',
                                    value: 'c#',
                                },
                            ],
                        },
                    ]}
                    buttons={[
                        {
                            text: 'Cancel',
                            role: 'cancel',
                        },
                        {
                            text: 'Confirm',
                            handler: (value) => {
                                window.alert(`You selected: ${value.languages.value}`);
                            },
                        },
                    ]}
                ></IonPicker>

                <br/><br/>
                <IonCardTitle>Controller Pickers</IonCardTitle>
                <IonButton onClick={openPicker}>Open</IonButton>

                <br/><br/>
                <IonCardTitle>Multiple Columns</IonCardTitle>
                <IonButton id="open-picker1">Open</IonButton>
      <IonPicker
        trigger="open-picker1"
        columns={[
          {
            name: 'meat',
            options: [
              {
                text: 'Pepperoni',
                value: 'pepperoni',
              },
              {
                text: 'Smoked Ham',
                value: 'smoked-ham',
              },
              {
                text: 'Crispy Bacon',
                value: 'bacon',
              },
            ],
          },
          {
            name: 'veggies',
            options: [
              {
                text: 'Red onion',
                value: 'red-onion',
              },
              {
                text: 'Peppers',
                value: 'peppers',
              },
              {
                text: 'Black olives',
                value: 'black-olives',
              },
            ],
          },
          {
            name: 'crust',
            options: [
              {
                text: 'Pan style',
                value: 'pan',
              },
              {
                text: 'Hand tossed',
                value: 'hand-tossed',
              },
              {
                text: 'Stuffed crust',
                value: 'stuffed-crust',
              },
            ],
          },
        ]}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Confirm',
            handler: (value) => {
              window.alert(
                `You selected a ${value.crust.text} pizza with ${value.meat.text} and ${value.veggies.text}`
              );
            },
          },
        ]}
      ></IonPicker>



            </center >


        </>
    );
};

export default Ion_picker;
