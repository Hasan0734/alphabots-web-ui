import { gsap } from 'gsap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
import TimeField from 'react-simple-timefield';
import { setRobotsData } from '../../features/robot/robotSlice';
import $ from 'jquery';
import { setRobotState } from '../../features/robotState/robotStateSlice';

const PopUp = ({ scheduleOverlay }: any) => {

    const { robotsList } = useSelector((state: any) => state.robot)
    const { robotState: { schedulableRobot, schedulableRobotId } } = useSelector((state: any) => state.robotState)
    const dispatch = useDispatch();

    const sr = (): any => {
        return schedulableRobot;
    };

    const saveSchedule = (): void => {
        const newRobots: any[] = [...robotsList];
        const obj = newRobots.find((robot:any) => robot?.id === schedulableRobotId)
        Object.freeze(obj);
        const objCopy = { ...obj };
        const sr: any = schedulableRobot;
        objCopy.status = "scheduled"
        objCopy.startDate = sr.startDate + ' ' + sr.startTime
        newRobots[schedulableRobotId] = objCopy
        dispatch(setRobotsData(newRobots))
        onCloseSchedule();
    };

    const onCloseSchedule = (): void => {
        closePopup(scheduleOverlay.current)
        // .then(() => {
        //   scheduleOverlay = null

        // });
    }


    const closePopup = (popup: any): Promise<any> => {
        const bg = $('#overlay-bg');
        return new Promise(
            function (resolve, reject) {
                const tl = gsap.timeline({
                    onComplete: () => {
                        resolve(true);
                    }
                });
                tl
                    .to(bg, { duration: 0.2, autoAlpha: 0, ease: 'power2.easeOut' }, 'start')
                    .to(popup, { duration: 0.2, scale: 0.8, autoAlpha: 0, ease: 'power2.easeOut' }, 'start')
                    .set([popup, bg], { css: { display: 'none' } })
                    ;
            }
        );

    }

    const setScheduleDate = (day: string): void => {
        const sr: any = {...schedulableRobot};
        Object.freeze(sr)
        const objCopy = {...sr}
        if (sr !== null) {
            objCopy.startDate = day;
            
            dispatch(setRobotState({
                schedulableRobot: objCopy
            }))
        }
    }
    // event: any,
    const setScheduleTime = (time: string): void => {
        const sr: any = {...schedulableRobot};
        Object.freeze(sr)
        const objCopy = {...sr}
        if (sr !== null) {
            objCopy.startTime = time;
            dispatch(setRobotState({
                schedulableRobot: objCopy
            }))
        }
        
    }


    const setScheduleType = (type: string): void => {
        const sr: any = schedulableRobot;
        if (sr !== null) {
            dispatch(setRobotState({ schedulableRobot: { ...schedulableRobot, 
                scheduleType: type } }))
        }
    }



    const setScheduleRythm = (rythm: string): void => {
        const sr: any = schedulableRobot;
        if (sr !== null) {
            dispatch(setRobotState({ schedulableRobot: { ...schedulableRobot, scheduleRythm: rythm } }))
        }
    }

    const isScheduledRobotValid = (): boolean => {
        const d: Date | null = schedulableRobot?.startDate ? new Date(schedulableRobot.startDate) : null;
        return d instanceof Date && !isNaN(d as any);
    };

    return (
        <>
            <div className="card c-bigshadow c-padding"
                id="overlay-schedule"
                ref={scheduleOverlay} >
                <div>
                    <div>
                        <header><h3>Start von "{schedulableRobot?.name}" planen</h3></header>

                        <div className="form-row-group">
                            <div className="form-row">
                                <label>Startdatum</label>
                                <DayPickerInput
                                    value={sr()?.startDate}
                                    dayPickerProps={{
                                        selectedDays: sr()?.startDate
                                    }}
                                    onDayChange={(day: any) => setScheduleDate(day)}
                                />
                            </div>
                            <div className="form-row">
                                <label>Uhrzeit</label>
                                <TimeField
                                    value={sr()?.startTime}
                                    onChange={(event, value) => setScheduleTime(value)}
                                    colon=":"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="tabs">
                                <div onClick={() => setScheduleType('single')} className={'tab' + (sr()?.scheduleType !== 'repeat' ? ' active' : '')}>Einmalig</div>
                                <div onClick={() => setScheduleType('repeat')} className={'tab' + (sr()?.scheduleType === 'repeat' ? ' active' : '')}>Wiederholt</div>
                            </div>
                        </div>

                        <div className={'form-row' + (sr()?.scheduleType !== 'repeat' ? ' hidden' : '')}>
                            <div className="tabs">

                                <div onClick={() => setScheduleRythm('daily')}
                                    className={'tab' + (sr()?.scheduleRythm === 'daily' || !sr()?.scheduleRythm ? ' active' : '')}>Täglich</div>

                                <div onClick={() => setScheduleRythm('weekly')}
                                    className={'tab' + (sr()?.scheduleRythm === 'weekly' ? ' active' : '')}>Wöchentlich</div>

                                <div onClick={() => setScheduleRythm('monthly')} className={'tab' + (sr()?.scheduleRythm === 'monthly' ? ' active' : '')}>Monatlich</div>

                            </div>
                        </div>

                        <div className="form-row-group">
                            <div className="form-row">
                                <button className="btn-empty"
                                    onClick={() => onCloseSchedule()}>
                                    Abbrechen</button>
                            </div>

                            <div className="form-row">
                                <button className="btn-full"
                                    disabled={!isScheduledRobotValid()}
                                    onClick={saveSchedule}>
                                    Speichern</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="overlay-bg" />
        </>
    );
};

export default PopUp;