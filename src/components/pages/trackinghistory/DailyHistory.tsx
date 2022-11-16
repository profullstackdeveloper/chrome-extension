import React from 'react';
import { DailyHistoryType } from '../../../utils/types';
import { formatDuration } from '../../../utils/utils'

interface PropTypes {
    total: number;
    dailyHistory?: DailyHistoryType
}

export default function DailyHistory ({total, dailyHistory}: PropTypes): JSX.Element {
    return (
        <div className='w-full border border-solid border-gray-400 mb-4'>
            <div className='w-full px-3 flex justify-between items-center h-11 bg-gray-300 border-b border-solid border-gray-400'>
                <div>
                    {
                        dailyHistory?.date
                    }
                </div>
                <div>
                    Total: {formatDuration(total)}
                </div>
            </div>
            <div className='w-full'>
                {
                    dailyHistory && dailyHistory.dailyHistory.length > 0 && dailyHistory.dailyHistory.map((history, index) => {
                        return (
                            <div className='w-full text-lg px-3 h-12 bg-white flex justify-between items-center border-solid border-b border-gray-400' key={index}>
                                <div>
                                    {
                                        history.description ? history.description : '(no description)'
                                    }
                                </div>
                                <div>
                                    {
                                        formatDuration(history.duration)
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}