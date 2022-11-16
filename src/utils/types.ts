export interface PeriodHistoryType {
    description?: string;
    duration: number;
}

export interface DailyHistoryType {
    date: string;
    dailyHistory: PeriodHistoryType[]
}