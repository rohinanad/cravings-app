import React from 'react'
import './FoodCard.css';
import {  IonImg, IonItem, IonLabel, IonThumbnail } from '@ionic/react';
/**
 * The food card properties interface. Right now we are passing
 * id, image, and title values to the component.
 */
interface FoodCardProps {
    id: number, 
    img: string,
    title: string
}

/**
 * This will be the food cards displayed to the user after a successful
 * search for recipes.
 * 
 * @returns food card component. 
 */
const FoodCard: React.FC<FoodCardProps> = ({id, img, title}) => {

    return (
           <IonItem class='food-card' button>
                <IonThumbnail slot="start">
                    <IonImg alt='food' src={`${img}`}></IonImg>
                </IonThumbnail>
                <IonLabel>
                    {title}
                </IonLabel>
            </IonItem>
    )
}

export default FoodCard