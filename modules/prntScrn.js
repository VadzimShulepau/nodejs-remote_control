import robot from 'robotjs';
import Jimp from 'jimp';

export const prntScrn = async (x, y) => {
  const screen = robot.screen.capture(x, y, 200, 200);
  const img = new Jimp({
    data: screen.image,
    width: screen.width,
    height: screen.height
  });
  const buffer64 = await img.getBase64Async(Jimp.MIME_PNG);
  const bufImage = buffer64.split(',')[1];
  return `prnt_scrn ${bufImage}\0`;
};