import React from 'react';
import ButtonInput from '../components/input/ButtonInput';
import DailyHistory from '../components/pages/trackinghistory/DailyHistory';
import { weekData } from '../utils/mockData';
import { DailyHistoryType, PeriodHistoryType } from '../utils/types';
import { formatDuration, sum } from '../utils/utils';
export default function Tracking(): JSX.Element {

    const [start, setStart] = React.useState(false);
    const [duration, setDuration] = React.useState(0);
    const [description, setDescription] = React.useState<string>('');
    const [weekDataInfo, setWeekDataInfo] = React.useState<DailyHistoryType[]>(weekData)

    const [stream, setStream] = React.useState<MediaStream>();
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const videosRef = React.useRef<HTMLVideoElement>(null);


    const handleClick = async () => {
        console.log('called!')

        if (start) {
            setDuration(0);
            const temp = weekDataInfo;
            temp[0].dailyHistory.push({ duration, description } as PeriodHistoryType);
            setWeekDataInfo(temp);
            let tracks = stream?.getTracks();
            tracks?.forEach((track) => track.stop());
            if(videosRef.current) videosRef.current.srcObject = null;

        }
        else {
            let stream = await navigator.mediaDevices.getDisplayMedia({
                video: true,
                audio: false
            })
            if(videosRef.current) videosRef.current.srcObject = stream
            setStream(stream);
        }

        setStart(!start);
    }

    const handleChange = (e: any) => {
        setDescription(e.target.value);
    }

    React.useEffect(() => {
        let timerId: NodeJS.Timer;
        if (start) {
            timerId = setInterval(async () => {
                setDuration(duration + 1);
                const imageCapture = new (window as any).ImageCapture(
                    stream?.getVideoTracks()[0],
                );
                if (!(imageCapture.track.readyState != 'live' || !imageCapture.track.enabled || imageCapture.track.muted)) {
                    const frame = await imageCapture.grabFrame();
                    var ctx = canvasRef.current?.getContext("2d");

                    if (canvasRef.current)
                        ctx?.drawImage(
                            frame,
                            0,
                            0,
                            canvasRef.current?.width,
                            canvasRef.current?.height,
                        );
                }

            }, 1000);
        }
        if (start && !stream?.active) {
            setStart(false);
            const temp = weekDataInfo;
            temp[0].dailyHistory.push({ duration, description } as PeriodHistoryType);
            setDuration(0);
        }

        return () => clearInterval(timerId)
    }, [start, duration])

    const calcWeekTotalTime = () => {
        let result = 0;
        weekData.forEach(data => {
            result += sum(data.dailyHistory.map(history => history.duration))
        })
        return result
    }

    return (
        <div className='w-full h-full flex flex-col p-4'>
            <div className='w-full'>
                <ButtonInput start={start} placeholder='What are you working on?' handler={handleClick} onChange={handleChange}></ButtonInput>
            </div>
            <div className='flex flex-row justify-between'>
                <video ref={videosRef} width={400} height={300} hidden />
                <canvas ref={canvasRef} width={400} height={300} hidden={!start} />
                <div className='text-right mt-5 text-3xl'>
                    {
                        start ? formatDuration(duration) : ''
                    }
                </div>

            </div>

            <div className='w-full py-4'>
                <div className='flex justify-between w-full'>
                    <div>This week</div>
                    <div>Week total: {formatDuration(calcWeekTotalTime())}</div>
                </div>
                <div className='w-full'>
                    {
                        weekData.map((data, index) => {
                            return (
                                <DailyHistory total={sum(data.dailyHistory.map(history => history.duration))} dailyHistory={data} key={index}></DailyHistory>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}