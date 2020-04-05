/* eslint-disable react-hooks/exhaustive-deps */
/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton,IonButton, IonIcon, IonSearchbar, IonSelect, IonSelectOption, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { more } from 'ionicons/icons';
/* --------------------------------- CUSTOM --------------------------------- */
import './Translations.scss';
import { usePaginatedTranslations } from '../../graphql/hooks/translations.hooks';
import NoLessons from '../../components/no-lessons/no-lessons';
import PhraseList from '../LessonDetail/sections/PhraseList';


/* -------------------------------------------------------------------------- */
/*                            COMPONENT DEFINITION                            */
/* -------------------------------------------------------------------------- */
const Translations: React.FC = () => {
    /* ---------------------------------- HOOKS --------------------------------- */
    const [searchText, setSearchText] = useState("")
    const [searchFunction, setSearchFunction] = useState("createdAt-desc")
    const _searchFunction = searchFunction.substring(0, searchFunction.indexOf('-'))
    const _searchDirection = searchFunction.substring(searchFunction.indexOf('-') + 1)
    const [limit, setLimit] = useState(10)
    const { translations, error, loading } = usePaginatedTranslations({
        start: 0,
        limit,
        searchText,
        sortBy: _searchFunction,
        sortDir: _searchDirection
    })
    useEffect(() => {
        if (limit !== 10) setLimit(10)
    }, [searchText])

    /* -------------------------------- CONSTANTS ------------------------------- */


    // console.log(_searchFunction, _searchDirection)
    const search = (e) => setSearchText(e.target.value)



    /* ----------------------------- RENDER METHODS ----------------------------- */
    const pageHeader = () =>
        <IonHeader no-border>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" />
                </IonButtons>
                <IonTitle color="secondary">My Translations</IonTitle>
            </IonToolbar>
        </IonHeader>

    const searchAndFilters = () => <>
        <IonSearchbar value={searchText} onIonChange={search} debounce={1000}></IonSearchbar>
        <div className="filter-container">
            <IonSelect value={searchFunction} onIonChange={e => setSearchFunction(e.detail.value)} interface="popover">
                <IonSelectOption value="createdAt-desc">Most recent</IonSelectOption>
                <IonSelectOption value="createdAt-asc">Least recent</IonSelectOption>
                <IonSelectOption value="phrase-asc">A-Z</IonSelectOption>
                <IonSelectOption value="phrase-desc">Z-A</IonSelectOption>
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
    </>

    const translationsContent = () => <>
        {searchAndFilters()}
        {(!loading && !error && (!translations || !translations.length)) ?
            <NoLessons message='No translations found' /> :
            <PhraseList translations={translations} />
        }</>

    const loadMore = async ($event: CustomEvent<void>) => {
        setTimeout(() => {
            setLimit(limit + 10);
            ($event.target as HTMLIonInfiniteScrollElement).complete();
        }, 1000);
    }


    /* ---------------------------- RENDER COMPONENT ---------------------------- */
    return (
        <IonPage>
            {pageHeader()}
            <IonContent>
                {translationsContent()}
                <IonInfiniteScroll threshold="10px" onIonInfinite={(e: CustomEvent<void>) => loadMore(e)}>
                    <IonInfiniteScrollContent loadingText="Loading more translations...">

                    </IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>
        </IonPage>
    );
}

export default Translations;