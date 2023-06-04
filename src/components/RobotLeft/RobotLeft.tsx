
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { setRobotsData } from '../../features/robot/robotSlice';
import Robot from './Robot';
import React from 'react';
import PopUp from './PopUp';

const RobotLeft = ({
    setCurrentRobot,
    setCurrentRobotIdx,
    isTeamMode,
    setQueries,
    afterAssignment,
    setAfterAssignment,
    setNumSelected,
    filter,
    queries,
    currentRobotIdx,
    setFilter,
    getFullNameAbbr,

}: any) => {
    const { robotsList } = useSelector((state: any) => state.robot)
    const dispatch = useDispatch();
    const [schedulableRobot, setSchedulableRobot]: any = React.useState(null);
    const [schedulableRobotIdx, setSchedulableRobotIdx]: any = React.useState(null);
    const [selectAll, setSelectAll] = React.useState(false);

    let scheduleOverlay: any = React.useRef(null)

    const expandAll = () => {
        $('.robot-row').addClass('open');
        $('#action-expand-all').hide();
        $('#action-collapse-all').show();
    };

    const collapseAll = () => {
        $('.robot-row').removeClass('open');
        $('#action-collapse-all').hide();
        $('#action-expand-all').show();
    };

    const getFilteredRows = (): any => {
        let filteredRows = [] as any;
        const newRobots: any = [...robotsList];

        filteredRows = newRobots.filter((robot: any) => {
            let result = true;

            if (filter) {
                if (filter === 'running') {
                    result = newRobots.status === 'running';
                } else if (filter === 'done') {
                    result = robot.status === 'success' || robot.status === 'failed';
                }
            }

            if (queries) {
                const matchesQuery =
                    robot.name.toLowerCase().includes(queries?.toLowerCase()) ||
                    robot.desc.toLowerCase().includes(queries?.toLowerCase());

                result = result && matchesQuery;
            }
            return result;
        });

        return filteredRows;
    };


    const onSelectAll = (checked: boolean): void => {
        setSelectAll(checked)
        const newRobots: any = [...robotsList];
        // const robots = this.getFilteredRows();

        for (var i in newRobots) {
            const obj = newRobots[i]
            Object.freeze(obj);
            const objCopy = { ...obj };
            objCopy.selected = checked;
            newRobots[i] = objCopy
        }
        dispatch(setRobotsData(newRobots))
    }

    return (
        <>

            <PopUp
                scheduleOverlay={scheduleOverlay}
                schedulableRobot={schedulableRobot}
                schedulableRobotIdx={schedulableRobotIdx}
                setSchedulableRobot={setSchedulableRobot}

            />


            <div id="left">
                <div className="card">
                    <div className="list-header">
                        <header>
                            <div>
                                <h3>Verfügbare Roboter</h3>
                                <span>{robotsList.length} Roboter</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Roboter durchsuchen"
                                value={queries}
                                onChange={e => setQueries(e.target.value)}
                            />
                        </header>
                        <footer>
                            <input type="checkbox"
                                onChange={(e) => onSelectAll(e.target.checked)}
                                checked={selectAll} />

                            <div className="middle">
                                <button id="action-expand-all"
                                    onClick={() => expandAll()}>Alle aufklappen +</button>
                                <button id="action-collapse-all"
                                    onClick={() => collapseAll()}>Alle zuklappen -</button>
                            </div>
                            <div className="filters">
                                <button
                                    className={'btn-empty ' + (filter === null ? 'active' : '')}
                                    onClick={() => setFilter(null)}>Alle ({robotsList.length})</button>
                                <button
                                    className={'btn-empty ' + (filter === 'running' ? 'active' : '')}
                                    onClick={() => setFilter('running')}>In Arbeit
                                    ({robotsList.filter((robot: any) => robot.status === 'running').length})</button>
                                <button
                                    className={'btn-empty ' + (filter === 'done' ? 'active' : '')}
                                    onClick={() => setFilter('done')}>Abgeschlossen
                                    ({robotsList.filter((robot: any) => robot.status === 'failed' || robot.status === 'success').length})</button>
                            </div>
                        </footer>
                    </div>
                    {getFilteredRows().map((robot: any, i: number) => <Robot
                        key={++i}
                        i={i}
                        robot={robot}
                        scheduleOverlay={scheduleOverlay}
                        setSchedulableRobot={setSchedulableRobot}
                        setSchedulableRobotIdx={setSchedulableRobotIdx}
                        setCurrentRobot={setCurrentRobot}
                        setCurrentRobotIdx={setCurrentRobotIdx}
                        isTeamMode={isTeamMode}
                        setQueries={setQueries}
                        afterAssignment={afterAssignment}
                        setAfterAssignment={setAfterAssignment}
                        setSelectAll={setSelectAll}
                        setNumSelected={setNumSelected}
                        currentRobotIdx={currentRobotIdx}
                        getFullNameAbbr={getFullNameAbbr}
                        onSelectAll={onSelectAll}
                        schedulableRobot={schedulableRobot}
                        schedulableRobotIdx={schedulableRobotIdx}
                    />
                    )}
                </div>
            </div>
        </>
    );
};

export default RobotLeft;