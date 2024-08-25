

export interface Course {
    id: number;
    description: string;
    iconUrl: string;
    longDescription: string;
    category?: string; //optional
    lessonsCount?: number; //optional
}
