export interface SignInPayload {
    email: string;
    password: string;
}

export interface SignUpPayload {
    email: string;
    password: string;
}

export interface AuthResponse {
    'access-token': string;
    data: UserData;
}

export interface CreateBookPayload {
    name: string;
    description?: string;
}

export interface CreatePlantPayload {
    book_id: number;
    name: string;
    scientific_name?: string;
    description?: string;
    avatar_image?: string;
    plant_info: PlantInfo;
    water_interval: number;
}

export interface UpdatePlantPayload {
    plant_id: number;
    name?: string;
    scientific_name?: string;
    description?: string;
    avatar_image?: string;
    plant_info?: PlantInfo;
    water_interval: number;
}

export interface PlantInfo {
    temperature?: number[];
    position?: string;
}

export interface ImageUploadPayload {
    formData: FormData;
}

export interface ActionPlantPayload {
    plant_ids: number[];
}

export interface UserData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar_image: string | null;
    settings: null;
    books: Book[];
    plants: Plant[];
    created_at: string;
    last_update: string;
}

export interface Book {
    plants: Plant[];
    id: number;
}

export interface Plant {
    id: number;
    name: string;
    scientific_name: string;
    book_id: number;
    avatar_image: string | null;
    last_watering: string;
    last_dew: string;
    should_be_watered: boolean;
}

export interface Moment {}

export interface Settings {}
