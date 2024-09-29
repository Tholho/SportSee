export interface BaseData {
    data: {
        id: number;
        userInfos: {
            firstName: string;
            lastName: string;
            age: number;
        };
        score: number;
        todayScore: number;
        keyData: {
            calorieCount: number;
            proteinCount: number;
            carbohydrateCount: number;
            lipidCount: number;
        };
    }
}

export interface ActivityData {
    data: {
        userId: number;
        sessions: { day: string; kilogram: number; calories: number }[];
    }
}

export interface AverageSessionsData {
    data: {
        userId: number;
        sessions: { day: number; sessionLength: number }[];
    }
}

export interface PerformanceData {
    data: {
        userId: number;
        kind: { [key: number]: string };
        data: { value: number; kind: number }[];
    }
}

export interface UserData {
    base: BaseData | null;
    activity: ActivityData | null;
    averageSessions: AverageSessionsData | null;
    performance: PerformanceData | null;
}