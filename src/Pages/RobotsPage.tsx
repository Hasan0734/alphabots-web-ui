import * as React from "react";
import { robotsData } from "../utils/data";
import RobotLeft from "../components/RobotLeft/RobotLeft";
import RobotRight from "../components/RobotRight/RobotRight";
import { useDispatch } from "react-redux";
import { setRobotsData } from "../features/robot/robotSlice";
import { setRobotState } from "../features/robotState/robotStateSlice";

const RobotsPage = () => {

  const dispatch = useDispatch();
  let assignOverlay: any = React.useRef(null)

  React.useEffect(() => {
    dispatch(setRobotsData(robotsData))
    dispatch(setRobotState({
      queries: '',
      filter: ''
    }))

  }, [dispatch])


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

        getFullNameAbbr={getFullNameAbbr}

      />
      <RobotRight
        assignOverlay={assignOverlay}
        getFullNameAbbr={getFullNameAbbr}
      />

    </>
  );
};

export default RobotsPage;