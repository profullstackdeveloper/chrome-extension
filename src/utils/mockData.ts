import { DailyHistoryType } from "./types";

const weekData: DailyHistoryType[] = [
    {
        date: "2022-11-16",
        dailyHistory: [
            {
                duration: 1440,
                description: 'I am working on Project1'
            },
            {
                duration: 1240,
            },
            {
                duration: 1040,
                description: 'I am working on Project2'
            }
        ]
    },
    {
        date: "2020-11-15",
        dailyHistory: [
            {
                duration: 440,
                description: 'I am working on Project1'
            },
            {
                duration: 240,
                description: 'I am working on my project'
            },
            {
                duration: 140,
                description: 'I am working on Project2'
            }
        ]
    }
]

export {
    weekData
}