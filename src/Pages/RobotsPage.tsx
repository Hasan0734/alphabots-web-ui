import * as React from "react";
import { robotsData } from "../utils/data";
import RobotLeft from "../components/RobotLeft/RobotLeft";
import RobotRight from "../components/RobotRight/RobotRight";
import { useDispatch } from "react-redux";
import { setRobotsData } from "../features/robot/robotSlice";

const RobotsPage = ({ isTeamMode, setIsTeamMode }: any) => {

  const [afterAssignment, setAfterAssignment] = React.useState(false)
  const [currentRobot, setCurrentRobot]: any = React.useState(null);
  const [currentRobotIdx, setCurrentRobotIdx]: any = React.useState(null);
  const [queries, setQueries] = React.useState('');
  const [filter, setFilter]: any = React.useState('');
  const [numSelected, setNumSelected] = React.useState(0);

  const dispatch = useDispatch();
  let assignOverlay: any = React.useRef(null)

  React.useEffect(() => {
    dispatch(setRobotsData(robotsData))
    setQueries('');
    setFilter(null);

  }, [])


  const getFullNameAbbr = (fullName: string | undefined): string => {
    return fullName
      ? fullName
        .replace(/\b(\w)\w+/g, '$1')
        .replace(/\s/g, '')
        .replace(/\./, '')
        .toUpperCase()
      : '';
  };



  return (
    <>
      {/* <div>{props.modeTeam}</div> */}

      <RobotLeft
           setCurrentRobot={setCurrentRobot}
           setCurrentRobotIdx={setCurrentRobotIdx}
           isTeamMode={isTeamMode}
           setQueries={setQueries}
           afterAssignment={afterAssignment}
           setAfterAssignment={setAfterAssignment}
           setNumSelected={setNumSelected}
           filter={filter}
           queries={queries}
           currentRobotIdx={currentRobotIdx}
           getFullNameAbbr={getFullNameAbbr}
           setFilter={setFilter}

      />
      <RobotRight
        numSelected={numSelected}
        isTeamMode={isTeamMode}
        assignOverlay={assignOverlay}
        getFullNameAbbr={getFullNameAbbr}
        currentRobot={currentRobot}
        currentRobotIdx={currentRobotIdx}
        setAfterAssignment={setAfterAssignment}
      />

    </>
  );
};

export default RobotsPage;