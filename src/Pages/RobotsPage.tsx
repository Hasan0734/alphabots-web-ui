import * as React from "react";
import { robotsData } from "../utils/data";
import RobotLeft from "../components/RobotLeft/RobotLeft";
import RobotRight from "../components/RobotRight/RobotRight";
import { useDispatch } from "react-redux";
import { setRobotsData } from "../features/robot/robotSlice";
import { setRobotState } from "../features/robotState/robotStateSlice";

const RobotsPage = () => {

  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(setRobotsData(robotsData))
    dispatch(setRobotState({
      queries: '',
      filter: ''
    }))

  }, [dispatch])

  return (
    <>
      {/* <div>{props.modeTeam}</div> */}
      <RobotLeft/>
      <RobotRight/>
    </>
  );
};

export default RobotsPage;