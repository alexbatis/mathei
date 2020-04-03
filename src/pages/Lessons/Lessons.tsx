/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonSearchbar, IonSelect, IonSelectOption } from '@ionic/react';
import { more } from 'ionicons/icons';
import { useHistory } from 'react-router';
/* --------------------------------- CUSTOM --------------------------------- */
import './Lessons.scss';
import LessonCard from '../../components/lesson-card/lesson-card';
import { Lesson } from '../../models/Lesson';
import { customSort } from '../../services/utils';
import NoLessons from '../../components/no-lessons/no-lessons';
import { useLessons } from '../../graphql';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const Lessons: React.FC = () => {

    /* ---------------------------------- HOOKS --------------------------------- */
    const history = useHistory();
    const [searchText, setSearchText] = useState("")
    const [searchFunction, setSearchFunction] = useState("createdAt-desc")
    let { lessons, error, loading } = useLessons()

    /* -------------------------------- CONSTANTS ------------------------------- */
    const _searchFunction = searchFunction.substring(0, searchFunction.indexOf('-'))
    const _searchDirection = searchFunction.substring(searchFunction.indexOf('-') + 1)
    const search = (e) => setSearchText(e.target.value)
    const filterBySearch = (lesson: Lesson) => (searchText) ?
        lesson.name.toLowerCase().includes(searchText.toLowerCase()) :
        lesson

    /* ----------------------------- RENDER METHODS ----------------------------- */
    const pageHeader = () =>
        <IonHeader no-border mode="md">
            <IonToolbar mode="md">
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" mode="md" />
                </IonButtons>
                <IonTitle color="secondary">My Lessons</IonTitle>
            </IonToolbar>
        </IonHeader>

    const searchAndFilters = () => <IonCol>
        <IonSearchbar onIonInput={search} animated />
        <div className="filter-container">
            <IonSelect value={searchFunction} onIonChange={e => setSearchFunction(e.detail.value)} interface="popover">
                <IonSelectOption value="createdAt-desc">Most recent</IonSelectOption>
                <IonSelectOption value="createdAt-asc">Least recent</IonSelectOption>
                <IonSelectOption value="name-asc">A-Z</IonSelectOption>
                <IonSelectOption value="name-desc">Z-A</IonSelectOption>
            </IonSelect>
            <IonButtons class="icons">
                <IonButton>
                    <IonIcon slot="icon-only" name="apps"></IonIcon>
                </IonButton>
                <IonButton>
                    <IonIcon icon={more}></IonIcon>
                </IonButton>
            </IonButtons>
        </div>
    </IonCol>

    const lessonItem = (lesson: Lesson) =>
        <IonCol size="12" key={lesson.id} onClick={() => history.push(`lesson/${lesson.id}`)}>
            <LessonCard lesson={lesson} />
        </IonCol>

    const lessonList = () => lessons
        .filter(filterBySearch)
        .sort(customSort(_searchFunction, _searchDirection))
        .map(lesson => lessonItem(lesson))

    const lessonContent = () =>
        <IonGrid>
            <IonRow>
                {searchAndFilters()}
                {lessonList()}
            </IonRow>
        </IonGrid >

    const pageContent = () => (!loading && !error && (!lessons || !lessons.length)) ?
        <NoLessons /> :
        lessonContent()

    /* ---------------------------- RENDER COMPONENT ---------------------------- */
    return (
        <IonPage>
            {pageHeader()}
            <IonContent>
                {pageContent()}
            </IonContent>
        </IonPage>
    );
}

export default Lessons;