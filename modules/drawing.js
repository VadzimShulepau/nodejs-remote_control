import { getScreenOptions } from './screenOptions.js';
import robot from 'robotjs';

export const drawCircle = async (...pos) => {
  await getScreenOptions();
  const { x, y } = robot.getMousePos();

  robot.mouseToggle('down');
  for (let i = 0; i < Math.PI * 2; i += 0.02) {
    const xd = x - pos[0] + +pos[0] * Math.cos(i);
    const yd = y + +pos[0] * Math.sin(i);
    robot.moveMouseSmooth(xd, yd);
  };
  robot.mouseToggle('up')
  return `draw_circle ${pos[0]}\0`;
};

export const drawRectangle = async (...pos) => {
  await getScreenOptions();
  const { x, y } = robot.getMousePos();
  robot.mouseToggle('down');
  robot.moveMouseSmooth(x, y + +pos[1]);
  robot.moveMouseSmooth(x - +pos[0], y + +pos[1]);
  robot.moveMouseSmooth(x - +pos[0], y);
  robot.moveMouseSmooth(x, y);
  robot.mouseToggle('up');
  return `draw_rectangle ${pos[0], pos[1]}\0`;
};


export const drawSquare = async (...pos) => {
  await getScreenOptions();
  const { x, y } = robot.getMousePos();
  robot.mouseToggle('down');
  robot.moveMouseSmooth(x, y + +pos[0]);
  robot.moveMouseSmooth(x - +pos[0], y + +pos[0]);
  robot.moveMouseSmooth(x - +pos[0], y);
  robot.moveMouseSmooth(x, y);
  robot.mouseToggle('up');
  return `draw_square ${pos[0]}\0`;
};
