interface Bed {
    type: string;
    count: number;
}

interface Facility {
    name: string;
}

interface ImageLink {
    size: string;
    href: string;
}

interface Image {
    links: ImageLink[];
}

interface Occupancy {
    roomIndex: number;
    numOfAdults: number;
    numOfChildren: number;
    childAges: number[];
}

interface Policy {
    type: string;
    text: string;
}

interface BoardBasis {
    description: string;
    type: string;
}

interface CancellationRule {
    value: number;
    valueType: string;
    estimatedValue: number;
    start: string;
    end: string;
}

interface CancellationPolicy {
    rules: CancellationRule[];
}

interface AdditionalCharge {
    charge: {
        type: string;
        description: string;
        frequency: string;
        unit: string;
        amount: number;
        currency: string;
    };
    text: string;
}

interface Rate {
    id: string;
    rateId: string;
    isRecommended: boolean;
    availability: number;
    isChangeInPrice: boolean;
    needsPriceCheck: boolean;
    providerId: string;
    providerName: string;
    roomCount: number;
    occupancies: Occupancy[];
    type: string;
    baseRate: number;
    totalRate: number;
    perNightTotal: number;
    perNightPublishedRate: number;
    minSellingRate: number;
    publishedRate: number;
    publishedBaseRate: number;
    currency: string;
    perNightTaxes: number;
    totalTaxesAndFees: number;
    refundability: string;
    allGuestsInfoRequired: boolean;
    onlineCancellable: boolean;
    specialRequestSupported: boolean;
    payAtHotel: boolean;
    cardRequired: boolean;
    policies: Policy[];
    boardBasis: BoardBasis;
    offers: any[];
    cancellationPolicies: CancellationPolicy[];
    additionalCharges: AdditionalCharge[];
    depositRequired: boolean;
    gstAllowed: boolean;
    guaranteeRequired: boolean;
    isContractedRate: boolean;
    rateInclusions: {
        BoardBasis: string;
        CancellationPolicy: string;
    };
}

interface PartnerRoomRate {
    netRatePerNight: number;
    totalPerNight: number;
    netTotalRate: number;
    totalRate: number;
}

interface PartnerRoom {
    source: string;
    linkToPartnerSite: string;
    partnerLogoUrl: string;
    partnerRoomRate: PartnerRoomRate;
    roomName: string;
    remarks?: string[];
}
export interface CartItem {
    id: string,
    cartItems: []
}
export interface CartData {
    cart: CartItem,
    travellerInfo: any
}

export interface RoomData {
    id: string;
    standardRoomId: string;
    standardRoomName: string;
    name: string;
    description: string;
    beds: Bed[];
    smokingAllowed: boolean;
    facilities: Facility[];
    images: Image[];
    rates: Rate[];
    partnerRoomRates: PartnerRoom[];
}


export interface hotelRoomSelectedState {
    selectedHotelRoom: RoomData;
    selectedHotel: any;
    selectedHoteRoomPricing: any;
}

export interface travellerInfoProps {
    title: string
    firstName: string;
    middleName?: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    suffix: string;
    countryCallCode: string;
    phoneNumber: string;
    email: string;
    country: string;
    city: string;
    streetNumber: string;
    firstNameEme?: string;
    lastNameEme?: string;
    phoneNumberEme?: string;
    specialAssistance?: boolean;
    specialRequest1?: string;
    specialRequest2?: string;
}

export interface inputErrorProps {
    title: boolean
    firstName: boolean
    lastName: boolean
    dateOfBirth: boolean
    gender: boolean
    suffix: boolean
    countryCallCode: boolean
    phoneNumber: boolean
    email: boolean
    country: boolean
    city: boolean
    streetNumber: boolean
    firstNameEme: boolean
    lastNameEme: boolean
    phoneNumberEme: boolean
}