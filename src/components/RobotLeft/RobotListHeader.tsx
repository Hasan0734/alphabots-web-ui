import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRobotState } from '../../features/robotState/robotStateSlice';
import $ from 'jquery';

interface PropsType {
    onSelectAll: (checked: boolean) => void,
}

const RobotListHeader = ({ onSelectAll }: PropsType) => {
    const { robotsList } = useSelector((state: any) => state.robot)
    const dispatch = useDispatch();
    const { robotState } = useSelector((state: any) => state.robotState);
    const { filter, queries, selectAll } = robotState

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

    const setFilter = (value: any) => {
        dispatch(setRobotState({ filter: value }))
    }
    const setQueries = (value: string) => {
        dispatch(setRobotState({ queries: value }))
    }
    return (
        <>
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
                            onClick={() => setFilter(null)}>
                            Alle ({robotsList.length})</button>
                        <button
                            className={'btn-empty ' + (filter === 'running' ? 'active' : '')}
                            onClick={() => setFilter('running')}>
                            In Arbeit
                            ({robotsList.filter((robot: any) => robot.status === 'running').length})</button>
                        <button
                            className={'btn-empty ' + (filter === 'done' ? 'active' : '')}
                            onClick={() => setFilter('done')}>
                            Abgeschlossen
                            ({robotsList.filter((robot: any) => robot.status === 'failed' || robot.status === 'success').length})</button>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default RobotListHeader;