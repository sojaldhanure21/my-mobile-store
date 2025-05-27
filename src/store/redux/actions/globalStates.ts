import { createAction, Dispatch } from "@reduxjs/toolkit";
import { ACTIONS } from "../constant/actions";

const matchScoreCardOpen: any = createAction<any[]>(`globalState/${ACTIONS.SET_MATCH_SCORE_CARD_OPEN}`);
const expertMentionCardOpen: any = createAction<any[]>(`globalState/${ACTIONS.SET_EXPERT_MENTION_CARD_OPEN}`);
const mapClustersData: any = createAction<any[]>(`globalState/${ACTIONS.SET_MAP_CLUSTERS_DATA}`);
const isMapVisible: any = createAction<any[]>(`globalState/${ACTIONS.SET_MAP_VISIBLE}`);
const isMenuVisible: any = createAction<any[]>(`globalState/${ACTIONS.SET_LEFT_MENU_VISIBLE}`);
const fromDateStays: any = createAction<any[]>(`globalState/${ACTIONS.SET_FROM_DATE_STAYS}`);
const toDateStays: any = createAction<any[]>(`globalState/${ACTIONS.SET_TO_DATE_STAYS}`);
const codeString: any = createAction<any[]>(`globalState/${ACTIONS.SET_CODE_STRING}`);
const tripSearchString: any = createAction<any[]>(`globalState/${ACTIONS.SET_TRIP_SEARCH_STRING}`);

export const setTripSearchString: any = (searchString: string) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch(tripSearchString(searchString));
        }
        catch (error) {
            console.error("Error", error);
        }
    }
}

export const setCodeString: any = (code: string) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch(codeString(code));
        }
        catch (error) {
            console.error("Error", error);
        }
    }
}

const tripSearchId: any = createAction<any[]>(`globalState/${ACTIONS.SET_TRIP_SEARCH_STRING}`);

export const setTripSearchId : any = (tripId: any) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch(tripSearchId(tripId))
        }
        catch (error) {
            console.error("Error", error);
        }
    }
}

export const setMatchScoreCardOpen: any = (matchScoreCard: boolean, index: number) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch(matchScoreCardOpen({ matchScoreCardOpen: matchScoreCard, matchScoreCardIndex: index }))
        }
        catch (error) {
            console.error("Error", error);
        }
    }
}

export const setExpertMentionCardOpen: any = (expertMentionCard: boolean, index: number) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch(expertMentionCardOpen({ expertMentionCardOpen: expertMentionCard, indexExpertMention: index }))
        }
        catch (error) {
            console.error("Error", error);
        }
    }
}

export const setMapClustersData: any = (mapClustersArry: any) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch(mapClustersData(mapClustersArry))
        }
        catch (error) {
            console.log("Error", error)
        }
    }
}

export const setMapVisible: any = (mapVisible: boolean) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(isMapVisible(mapVisible))
        }
        catch (error) {
            console.log("Error", error)
        }
    }
}

export const setLeftMenuVisible: any = (menuVisible: boolean) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(isMenuVisible(menuVisible))
        }
        catch (error) {
            console.log("Error", error)
        }
    }
}

export const setFromDateStays: any = (date: any) => {
    const dateFormated = new Date(date)
    return async (dispatch: Dispatch) => {
        try {
            dispatch(fromDateStays(dateFormated))
        }
        catch (error) {
            console.log("Error", error)
        }
    }
}

export const setToDateStays: any = (date: any) => {
    const dateFormated = new Date(date)
    return async (dispatch: Dispatch) => {
        try {
            dispatch(toDateStays(dateFormated))
        }
        catch (error) {
            console.log("Error", error)
        }
    }
}