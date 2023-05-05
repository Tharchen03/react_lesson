import { IonButton, IonButtons, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
import './date_time.css';
import { useEffect, useRef } from 'react';

interface ContainerProps { }

const Date_time: React.FC<ContainerProps> = () => {
  const datetime = useRef<null | HTMLIonDatetimeElement>(null);

  useEffect(() => {
    if (!datetime.current) return;
    datetime.current.value = ['2022-06-03', '2022-06-13', '2022-06-29'];
  }, []);

  const reset = () => {
    datetime.current?.reset();
  };
  const cancel = () => {
    datetime.current?.cancel();
  };
  const confirm = () => {
    datetime.current?.confirm();
  };
  return (
    <>
      <center>
        <IonDatetime></IonDatetime>
        <h1>min and max values</h1>
        <IonDatetime minuteValues="0,15,30,45" dayValues="5,10,15,20,25,30"></IonDatetime>
        <br />

        <h1>hourCycle</h1>
        <IonDatetime locale="en-GB" hourCycle="h12"></IonDatetime>;
        <br />

        <h1>Month and Year Selection #presentation</h1>
        <IonDatetime presentation="month-year"></IonDatetime>;
        <br />

        <h1>Time Selection #presentation</h1>
        <IonDatetime presentation="time"></IonDatetime>
        <br />

        <h1>date Selection #presentation</h1>
        <IonDatetime presentation="date"></IonDatetime>
        <br />

        <h1>Wheel Style Pickers #presentation</h1>
        <IonDatetime presentation="date-time" preferWheel={true}></IonDatetime>
        <br />

        <h1>Multiple Date Selection#presentation</h1>
        <IonDatetime ref={datetime} presentation="date" multiple={true}></IonDatetime>
        <br />

        <h1>Showing the Default Title </h1>
        <IonDatetime showDefaultTitle={true}></IonDatetime>
        <br />

        <h1>Customizing the Title</h1>
        <IonDatetime>
          <span slot="title">ur own name</span>
        </IonDatetime>
        <br />

        <h1>Showing Confirmation Buttons</h1>
        <IonDatetime ref={datetime}>
          <IonButtons slot="buttons">
            <IonButton color="danger" onClick={reset}>
              Reset
            </IonButton>
            <IonButton color="primary" onClick={cancel}>
              Never mind
            </IonButton>
            <IonButton color="primary" onClick={confirm}>
              All Set
            </IonButton>
          </IonButtons>
        </IonDatetime>
        <br />

        <h1>cool edit </h1>
        <IonDatetime
          presentation="date"
          value="2023-01-01"
          highlightedDates={[
            {
              date: '2023-01-05',
              textColor: '#800080',
              backgroundColor: '#ffc0cb',
            },
            {
              date: '2023-01-10',
              textColor: '#09721b',
              backgroundColor: '#c8e5d0',
            },
            {
              date: '2023-01-20',
              textColor: 'var(--ion-color-secondary-contrast)',
              backgroundColor: 'var(--ion-color-secondary)',
            },
            {
              date: '2023-01-23',
              textColor: 'rgb(68, 10, 184)',
              backgroundColor: 'rgb(211, 200, 229)',
            },
          ]}
        ></IonDatetime>
        <br />

        <h1>themeing datetime</h1>
        <IonDatetime color="rose"></IonDatetime>
        <br />
        <h1>date n time in button</h1>
        <IonDatetimeButton datetime="datetime"></IonDatetimeButton>

        <IonModal keepContentsMounted={true}>
          <IonDatetime id="datetime"></IonDatetime>
        </IonModal>
  




    </center >


    </>
  );
};

export default Date_time;
