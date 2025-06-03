import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ACTIONS } from "../constant/actions";
import { setTripSearchId } from "../actions/globalStates";

export interface GlobalStates {
    openMatchScoreCard: any;
    openExpertMentionCard: any;
    mapClustersData: any;
    mapVisible: boolean;
    leftMenuVisible: boolean;
    fromDateStays: Date;
    toDateStays : Date;
    code: string;
    tripSearchId: string
}

const startDate = new Date();
const endDate = new Date();
endDate.setDate(endDate.getDate() + 1)

const initialState: GlobalStates = {
    openMatchScoreCard: { matchScoreCardOpen: false, indexMatchCard: null },
    openExpertMentionCard: { expertMentionCardOpen: false, indexExpertMention: null },
    mapClustersData: [],
    mapVisible: true,
    leftMenuVisible: true,
    fromDateStays: startDate,
    toDateStays: endDate,
    code: '',
    tripSearchId: ''
}

const globalStatesSlice = createSlice({
    name: 'globalState',
    initialState: initialState,
    reducers: {
        [`${ACTIONS.SET_MATCH_SCORE_CARD_OPEN}`]: (state, action: PayloadAction<any>) => {
            return { ...state, openMatchScoreCard: action.payload }
        },
        [`${ACTIONS.SET_EXPERT_MENTION_CARD_OPEN}`]: (state, action: PayloadAction<any>) => {
            return { ...state, openExpertMentionCard: action.payload }
        },
        [`${ACTIONS.SET_MAP_CLUSTERS_DATA}`]: (state, action: PayloadAction<any>) => {
            return { ...state, mapClustersData: action.payload }
        },
        [`${ACTIONS.SET_MAP_VISIBLE}`]: (state, action: PayloadAction<boolean>) => {
            return { ...state, mapVisible: action.payload }
        },
        [`${ACTIONS.SET_LEFT_MENU_VISIBLE}`]: (state, action: PayloadAction<boolean>) => {
            return { ...state, leftMenuVisible: action.payload }
        },
        [`${ACTIONS.SET_FROM_DATE_STAYS}`]: (state, action: PayloadAction<any>) => {
            return { ...state, fromDateStays: action.payload }
        },
        [`${ACTIONS.SET_TO_DATE_STAYS}`]: (state, action: PayloadAction<any>) => {
            return { ...state, toDateStays: action.payload }
        },
        [`${ACTIONS.SET_CODE_STRING}`]: (state, action: PayloadAction<any>) => {
            return { ...state, code: action.payload }
        },
        [`${ACTIONS.SET_TRIP_SEARCH_STRING}`]: (state, action: PayloadAction<any>) => {
            return { ...state, tripSearchId: action.payload }
        }
    }
})

export default globalStatesSlice.reducer;