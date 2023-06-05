import React from 'react';
import { employees } from '../../utils/data';
import { PieChart } from 'react-minimal-pie-chart';
import { useDispatch, useSelector } from 'react-redux';
import { setRobotsData } from '../../features/robot/robotSlice';
import { setRobotState } from '../../features/robotState/robotStateSlice';
import { getFullNameAbbr } from '../../lib/func';

const RobotRight = () => {

    const { robotsList } = useSelector((state: any) => state.robot);
    const { robotState } = useSelector((state: any) => state.robotState);
    const dispatch = useDispatch();
    const { numSelected, currentRobot, currentRobotId } = robotState
    let assignOverlay: any = React.useRef(null)

    const reportRobot = (id: number): void => {
        const newRobots: any = [...robotsList];
        const obj = newRobots.find((robot:any) => robot.id === id)
        Object.freeze(obj);
        const objCopy = { ...obj };
        objCopy.reported = true;
        const index = newRobots.findIndex((robot:any) => robot.id === id)
        newRobots[index] = objCopy
        dispatch(setRobotsData(newRobots))
    }

    const showStats = (): boolean => {
        return currentRobot !== null && (currentRobot.status === 'success' || currentRobot.status === 'failed');
    };

    const assignSelectedRobotsTo = (user: any) => {
        const newRobots: any = [...robotsList];
        // const robots = this.getFilteredRows();

        for (var i in newRobots) {
            const obj = newRobots[i]
            Object.freeze(obj);
            const objCopy = { ...obj };

            if (obj.selected) {
                objCopy.user = user;
            }
            newRobots[i] = objCopy
        }

        dispatch(setRobotsData(newRobots))
        dispatch(setRobotState({ afterAssignment: true }))
    };


    return (
        <>
            <div id="right">

                {numSelected > 0 && robotState.isTeamMode &&
                    <div className="card c-bigshadow c-padding"
                        id="card-assign" ref={assignOverlay}>
                        <div>
                            <header>Roboter zuteilen</header>
                            <div className="form-row">
                                <input type="text" placeholder="Nach Mitarbeitern suche" />

                                <div id="employee-list">
                                    {employees.map((employee: any, i: number) =>
                                        <div key={i} className="employee-row" onClick={() => assignSelectedRobotsTo(employee)}>
                                            <figure className="avatar">
                                                <figcaption>{getFullNameAbbr(employee.name)}</figcaption>
                                            </figure>
                                            <div>
                                                {employee.name}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {showStats() &&
                    <div className="card">
                        <div id="robot-stats">
                            <div className="stats-top">
                                <figure className="robot-icon"><img src="/img/app-icons/Akten.svg" alt="" /></figure>
                                <header>
                                    <h2>{currentRobot.name}</h2>
                                    <p>{currentRobot.desc}</p>
                                </header>
                            </div>
                            <div className="card-body">
                                <h3>Ausführungsstatistik</h3>
                                <div className="stats-content">

                                    <div>
                                        <PieChart
                                            animate
                                            paddingAngle={1}
                                            lineWidth={22}
                                            data={[
                                                { title: 'Fehlerhaft', value: currentRobot.stats.failed, color: '#FC0350' },
                                                { title: 'Erfolgreich', value: currentRobot.stats.success, color: '#00CEA3' },
                                            ]}
                                        />
                                    </div>
                                    <div className="stats-legend">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <i className="i-success" />
                                                    </td>
                                                    <td><span>Erfolgreiche Ausführungen</span></td><td><span>{currentRobot.stats.failed}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="i-failed" /></td><td><span>Fehlerhafte Ausführungen</span></td><td><span>{currentRobot.stats.success}</span></td></tr>
                                            </tbody></table>
                                        {!currentRobot.reported ? (
                                            <button className="btn-danger" onClick={() => reportRobot(currentRobotId)}>
                                                <svg className="btn-icon" width="12" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)" fill="#FFFFFF"><path d="M13 2.14v6.493a.675.675 0 01-.434.62c-4.12 1.646-4.964-1.49-9.316.497V2.39c.135-.094.252-.213.343-.35 4.551-1.746 4.33 1.364 8.25-.471C12.372 1.32 13 1.6 13 2.14zM2.813 1.313A1.31 1.31 0 012.25 2.39v12.094a.516.516 0 01-.516.515h-.468a.516.516 0 01-.516-.515V2.39a1.313 1.313 0 112.063-1.078z" /></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h12v15H0z" /></clipPath></defs></svg>
                                                Fehlerbericht senden
                                            </button>
                                        ) : (
                                            <div className="r-label l-reported">
                                                <svg className="l-icon" width="12" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)" fill="#FC0350"><path d="M13 2.14v6.493a.675.675 0 01-.434.62c-4.12 1.646-4.964-1.49-9.316.497V2.39c.135-.094.252-.213.343-.35 4.551-1.746 4.33 1.364 8.25-.471C12.372 1.32 13 1.6 13 2.14zM2.813 1.313A1.31 1.31 0 012.25 2.39v12.094a.516.516 0 01-.516.515h-.468a.516.516 0 01-.516-.515V2.39a1.313 1.313 0 112.063-1.078z" /></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h12v15H0z" /></clipPath></defs></svg>
                                                Fehlerbericht gesedent
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {!showStats() &&
                    <figure id="empty-stats">
                        <img src="../img/empty-stats.svg" alt="" />
                        <figcaption>Einen Roboter in der Liste wählen,<br /> um Statistiken zu sehen</figcaption>
                    </figure>
                }
            </div>
        </>
    );
};

export default RobotRight;