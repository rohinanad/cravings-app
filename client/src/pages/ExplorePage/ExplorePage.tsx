import React from 'react';
import { IonLabel, IonIcon, IonButton, IonButtons, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import UserModal from '../../components/UserModal/UserModal';
import ExploreCard from '../../components/ExploreCard/ExploreCard';
import {personCircleOutline} from 'ionicons/icons';
import { ExploreOptions, ExploreCardData, getExploreCardData } from '../../utilities/ExploreUtilities';
import './ExplorePage.css';
import FoodCard from '../../components/FoodCard/FoodCard';
/*
 * Basic interface for our ExplorePage properties.
 */
interface ExplorePageOptions {
    exploreOptions: ExploreOptions
}

/**
 * ExplorePage.
 * @return explore page
 */
const ExplorePage: React.FC<ExplorePageOptions> = ({exploreOptions}) => { 
    const [exploreCardData, setExploreCardData] = React.useState<any[]>([]);

    React.useEffect(() => {
        getExploreCardData().then(data => {setExploreCardData(data);console.log(data);});
    }, [])

    //map the card to a constant
    const exploreCard = exploreCardData.slice(0, exploreCardData.length/2).map((exp:ExploreCardData, index: number) => {
            return (
                <ExploreCard 
                    key={index}
                    image={exp.image} 
                    url={exp.url}
                    title={exp.title}
                    title_url={exp.title_url}
                    duration={exp.duration}
                    duration_url={exp.duration_url}
                />
            )
    })

    const exploreCard1 = exploreCardData.slice(exploreCardData.length/2,exploreCardData.length).map((exp:ExploreCardData, index: number) => {
        return (
            <ExploreCard 
                key={index}
                image={exp.image} 
                url={exp.url}
                title={exp.title}
                title_url={exp.title_url}
                duration={exp.duration}
                duration_url={exp.duration_url}
            />
        )
})

	return(
		<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle class='cravings-home'>Cravings</IonTitle>
                    <IonButtons slot="end">
                    <IonButton id="usermodalfromexplore" slot="primary" fill="clear">
                        <IonIcon slot="icon-only" icon={personCircleOutline} color="light">
                        </IonIcon>
                    </IonButton>
                    </IonButtons>
                    <UserModal trigger="usermodalfromexplore"/>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonTitle class = 'explore-content'>Explore new recipes</IonTitle>
                <IonLabel class = 'explore-text ion-text-wrap'>Discover new and personalized recipes with the Cravings app</IonLabel>
                <IonHeader collapse="condense">
                  <IonToolbar>
                    <IonTitle size="large">Explore</IonTitle>

                  </IonToolbar>
                </IonHeader> 

                <IonGrid>
                    <IonRow>
                        <IonCol>
                            {exploreCard}
                        </IonCol>
                        <IonCol>
                            {exploreCard1}
                        </IonCol>
                    </IonRow>
                </IonGrid>
  
                {/*To make it only a single card delete 66-75 and replace with {exploreCard} */}
      
            </IonContent>

        </IonPage>
	)

}
export default ExplorePage