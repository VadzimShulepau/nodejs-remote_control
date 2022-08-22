import robot from 'robotjs';

export const getScreenOptions = async () => {
  const { width, height } = robot.getScreenSize();
  robot.moveMouse(width * 0.8, height * 0.5);
};