import { gsap } from 'gsap';
import $ from 'jquery';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { useDispatch, useSelector } from 'react-redux';
import { setRobotsData } from '../../features/robot/robotSlice';
import AktenIcon from '../../assets/img/app-icons/Akten.svg';
import ScheduleIcon from '../../assets/img/icon-schedule.svg';
import StartIcon from '../../assets/img/icon-start.svg'
import StopIcon from '../../assets/img/icon-stop.svg'

const Robot = ({ i, robot,
    getFullNameAbbr,
    onSelectAll,
    scheduleOverlay,
    setSchedulableRobot,
    setSchedulableRobotIdx,
    setCurrentRobot,
    setCurrentRobotIdx,
    isTeamMode,
    setQueries,
    afterAssignment,
    setAfterAssignment,
    setSelectAll,
    setNumSelected,
    currentRobotIdx,

}: any) => {
    const { robotsList } = useSelector((state: any) => state.robot)
    const dispatch = useDispatch();


    const openPopup = (popup: any): void => {

        let tl = gsap.timeline();
        const bg = $('#overlay-bg');

        tl.set([popup, bg], { css: { display: 'block' }, autoAlpha: 0 })
            .to(bg, { duration: 0.2, scale: 1, autoAlpha: 1, ease: 'power2.easeOut' }, 'start')
            .fromTo(popup, { autoAlpha: 0, scale: .8 }, { duration: 0.2, scale: 1, autoAlpha: 1, ease: 'power2.easeOut' }, 'start');
    };


    const onClickSchedule = (idx: number): void => {
        openPopup(scheduleOverlay.current);

        const robot = { ...robotsList[idx] };
        const startDate = robot.startDate;
        if (startDate) {


            robot.startDate = startDate.split(' ')[0];
            robot.startTime = startDate.split(' ')[1];
        }

        setSchedulableRobot(robot);
        setSchedulableRobotIdx(idx);
    };



    const onRowClick = (idx: number, event: any) => {
        const el = $(event.target);
        if (el.hasClass('r-short-desc') || el.hasClass('row-desc')) {
            el.parents('.robot-row').toggleClass('open');
        } else if (el.attr('type') === 'checkbox') {
            // do nothing
        } else if (rowHasStats(idx) && !isTeamMode) {
            setCurrentRobot(robotsList[idx]);
            setCurrentRobotIdx(idx)

        }
    };



    const startRobot = (idx: number): void => {
        const newRobots = [...robotsList];
        updateRobot(newRobots, idx, 'running', '08.09.2021 12:15')
    };

    const stopRobot = (idx: number): void => {
        const newRobots = [...robotsList];
        updateRobot(newRobots, idx, 'idle', '08.09.2021 12:15')

    }

    const setQuery = (query: string): void => {
        setQueries(query)
    }

    const onSelectRow = (checked: string, idx: number): void => {
        if (afterAssignment === true) {
            onSelectAll(false);
            setAfterAssignment(false);
        }

        const newRobots = [...robotsList];
        const obj = newRobots[idx]
        Object.freeze(obj);
        const objCopy = { ...obj }; // 👈️ create copy
        objCopy.selected = checked
        newRobots[idx] = objCopy;

        var numSelected = 0;
        for (var i in newRobots) {
            if (newRobots[i].selected) numSelected++;
        }
        dispatch(setRobotsData(newRobots))
        setSelectAll(numSelected === robotsList.length)
        setNumSelected(numSelected)

    }


    const getRowClass = (idx: number): string => {
        let cls = 'robot-row';
        if (idx === currentRobotIdx) {
            cls += ' current';
        }
        if (rowHasStats(idx) && !isTeamMode) {
            cls += ' openable';
        }
        return cls;
    };

    const updateRobot = (newRobots: any[], idx: number, status: string, startDate: string) => {
        const obj = newRobots[idx]
        Object.freeze(obj);
        const objCopy = { ...obj }; // 👈️ create copy
        objCopy.status = status;
        objCopy.startDate = startDate
        newRobots[idx] = objCopy
        dispatch(setRobotsData(newRobots))

    }
    const rowHasStats = (idx: number): boolean => {
        return robotsList[idx].status === 'success' || robotsList[idx].status === 'failed';
    };


    return (
        <>

            <div
                onClick={(e) => onRowClick(i, e)}
                className={getRowClass(i)}>
                <div className="row-body">
                    <div>
                        <input
                            type="checkbox"
                            checked={robot.selected}
                            onChange={(e: any) => onSelectRow(e.target.checked, i)} />
                    </div>
                    <div>
                        <figure className="robot-icon">
                            <img src={AktenIcon} alt={robot.name} />
                        </figure>
                    </div>
                    <div className="r-name">
                        <header>{robot.name}</header>
                        <p className="r-short-desc">{robot.desc}</p>
                    </div>
                    {!isTeamMode && (
                        <>
                            <div className="r-status">
                                {robot.status === 'running' &&
                                    <div className="r-label l-running">Gestartet um {robot.startDate.split(' ')[1]}</div>
                                }
                                {robot.status === 'success' &&
                                    <div className="r-label l-success">Fertig</div>
                                }
                                {robot.status === 'failed' &&
                                    <div className="r-label l-failed">Failed</div>
                                }
                                {robot.status === 'scheduled' &&
                                    <div className="r-label l-scheduled"
                                        onClick={() => onClickSchedule(i)}>
                                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".8" stroke="#0A105D" strokeLinecap="round" strokeLinejoin="round"><path d="M8 5v3M10.598 9.5L8 8M11.51 6.232h2.5v-2.5" /><path d="M11.89 11.89a5.5 5.5 0 110-7.78l2.12 2.122" /></g></svg>
                                        <span>Start am {robot.startDate.split(' ')[1]}</span>
                                    </div>
                                }
                                {robot.reported &&
                                    <svg className="icon-reported"
                                        width="12"
                                        height="15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"><g
                                            clipPath="url(#clip0)" fill="#FC0350">
                                            <path d="M13 2.14v6.493a.675.675 0 01-.434.62c-4.12 1.646-4.964-1.49-9.316.497V2.39c.135-.094.252-.213.343-.35 4.551-1.746 4.33 1.364 8.25-.471C12.372 1.32 13 1.6 13 2.14zM2.813 1.313A1.31 1.31 0 012.25 2.39v12.094a.516.516 0 01-.516.515h-.468a.516.516 0 01-.516-.515V2.39a1.313 1.313 0 112.063-1.078z" /></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h12v15H0z" /></clipPath></defs></svg>
                                }
                            </div>
                            <div className="r-actions">
                                {robot.status === 'idle' &&
                                    <>
                                        <Tippy content="Hello">
                                            <button className="btn-empty"
                                                onClick={() => onClickSchedule(i)}>
                                                <img src={ScheduleIcon}
                                                    alt="schedule" />
                                            </button>
                                        </Tippy>
                                        <button className="btn-empty"
                                            onClick={() => startRobot(i)}>
                                            <img src={StartIcon}
                                                alt="start" />
                                        </button>
                                    </>
                                }
                                {robot.status === 'running' &&
                                    <button className="btn-empty"

                                        onClick={() => stopRobot(i)}>
                                        <img src={StopIcon} alt="schedule" />
                                    </button>
                                }
                                {rowHasStats(i) &&
                                    <>
                                        <span className="clr-success">
                                            <strong>{robot.stats.success}</strong></span>/
                                        <span className="clr-danger">
                                            <strong>{robot.stats.failed}</strong></span>
                                        <small>▶</small>
                                    </>
                                }
                            </div>
                        </>
                    )}
                    {isTeamMode && (
                        <div className="r-user">
                            {robot.user && (
                                <div className="employee-row">
                                    <figure className="avatar">
                                        <figcaption>{getFullNameAbbr(robot.user.name)}</figcaption>
                                    </figure>
                                    <div>
                                        {robot.user.name}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="row-desc">
                    <div>{robot.desc}</div>
                </div>
            </div>
        </>
    );
};

export default Robot;