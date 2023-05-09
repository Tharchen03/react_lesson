import { IonCol, IonGrid, IonInput, IonRow } from '@ionic/react';

import './main.css';
interface ContainerProps { }

const Ion_grid: React.FC<ContainerProps> = () => {


    return (
        <>
            <IonGrid>
                <IonRow>
                    <IonCol>1</IonCol>
                    <IonCol>2</IonCol>
                    <IonCol>3</IonCol>
                </IonRow>
            </IonGrid>

            <IonGrid>
                <IonRow>
                    <IonCol>1</IonCol>
                    <IonCol>2</IonCol>
                    <IonCol>3</IonCol>
                    <IonCol>4</IonCol>
                    <IonCol>5</IonCol>
                    <IonCol>6</IonCol>
                </IonRow>
            </IonGrid>

            <IonGrid>
                <IonRow>
                    <IonCol>1</IonCol>
                    <IonCol>2</IonCol>
                    <IonCol>3</IonCol>
                    <IonCol>4</IonCol>
                    <IonCol>5</IonCol>
                    <IonCol>6</IonCol>
                    <IonCol>7</IonCol>
                    <IonCol>8</IonCol>
                    <IonCol>9</IonCol>
                    <IonCol>10</IonCol>
                    <IonCol>11</IonCol>
                    <IonCol>12</IonCol>
                </IonRow>
            </IonGrid>

            <br />
            <br />
            <br />

            <b>
                Column 1 has <code>size</code> set to <code>"auto"</code>
            </b>
            <IonGrid>
                <IonRow>
                    <IonCol size="auto">1</IonCol>
                    <IonCol>2</IonCol>
                    <IonCol>3</IonCol>
                </IonRow>
            </IonGrid>

            <b>
                Column 3 contains an input and has <code>size</code> set to <code>"auto"</code>
            </b>
            <IonGrid>
                <IonRow>
                    <IonCol>1</IonCol>
                    <IonCol>2</IonCol>
                    <IonCol size="auto">
                        <IonInput placeholder="3"></IonInput>
                    </IonCol>
                    <IonCol>4</IonCol>
                    <IonCol>5</IonCol>
                    <IonCol>6</IonCol>
                </IonRow>
            </IonGrid>

            <b>
                Column 2 has <code>size</code> set to <code>"auto"</code> and a defined width
            </b>
            <IonGrid>
                <IonRow>
                    <IonCol>1</IonCol>
                    <IonCol size="auto">
                        <div style={{ width: '150px' }}>2</div>
                    </IonCol>
                </IonRow>
            </IonGrid>


        </>


    );
};

export default Ion_grid;
