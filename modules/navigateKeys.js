import robot from 'robotjs';

export const mouseUp = async (pos, x, y) => {
  robot.moveMouseSmooth(x, y - +pos);
  return `mouse_up ${pos}\0`;
};

export const mouseDown = async (pos, x, y) => {
  robot.moveMouseSmooth(x, y + +pos);
  return `mouse_down ${pos}\0`;
};

export const mouseLeft = async (pos, x, y) => {
  robot.moveMouseSmooth(x - +pos, y);
  return `mouse_left ${pos}\0`;
};

export const mouseRight = async (pos, x, y) => {
  robot.moveMouseSmooth(x + +pos, y);
  return `mouse_right ${pos}\0`;
};
