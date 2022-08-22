import { getMousePosition } from './getMousePosition.js';
import { mouseUp, mouseDown, mouseLeft, mouseRight } from './navigateKeys.js';
import { drawCircle, drawRectangle, drawSquare } from './drawing.js';
import { prntScrn } from './prntScrn.js';

export const commands = {
  'mouse_position': getMousePosition,
  'mouse_up': mouseUp,
  'mouse_down': mouseDown,
  'mouse_left': mouseLeft,
  'mouse_right': mouseRight,
  'draw_circle': drawCircle,
  'draw_rectangle': drawRectangle,
  'draw_square': drawSquare,
  'prnt_scrn': prntScrn
};