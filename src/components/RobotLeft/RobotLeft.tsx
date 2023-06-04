
import { useDispatch, useSelector } from 'react-redux';
import { setRobotsData } from '../../features/robot/robotSlice';
import Robot from './Robot';
import React from 'react';
import PopUp from './PopUp';
import RobotListHeader from './RobotListHeader';

const RobotLeft = ({getFullNameAbbr}: any) => {
    const { robotsList } = useSelector((state: any) => state.robot)
    const dispatch = useDispatch();

    const { robotState } = useSelector((state: any) => state.robotState);

    const { filter, queries } = robotState

    let scheduleOverlay: any = React.useRef(null)

    const getFilteredRows = (): any => {
        let filteredRows = [] as any;
        const newRobots: any = [...robotsList];

        filteredRows = newRobots.filter((robot: any) => {
            let result = true;

            if (filter) {
                if (filter === 'running') {
                    result = robot.status === 'running';
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
        dispatch(setRobotsData({selectAll: checked}))
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

            />
            <div id="left">
                <div className="card">
                    <RobotListHeader
                        onSelectAll={onSelectAll}
                    />
                    {getFilteredRows().map((robot: any, i: number) => <Robot
                        key={++i}
                        i={i}
                        robot={robot}
                        getFullNameAbbr={getFullNameAbbr}
                        onSelectAll={onSelectAll}
                        scheduleOverlay={scheduleOverlay}
                    />
                    )}
                </div>
            </div>
        </>
    );
};

export default RobotLeft;