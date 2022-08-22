import { createWebSocketStream, WebSocketServer } from 'ws';
import { httpServer } from './src/http_server/index.js';
import robot from 'robotjs';
import { commands } from './modules/commandsSwitcher.js';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {

  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
  duplex.on('data', async (data) => {
    try {
      const [cmd, ...args] = data.toString().split(' ');
      console.log(cmd, ...args);
      const { x, y } = robot.getMousePos();
      duplex.write(await commands[cmd](...args, x, y), 'utf8');
    } catch (error) {
      console.log(error);
      return;
    };
  });
});

wss.on('SIGINT', () => {
  process.stdout.write('Server close\n');
  wss.close();
  process.exit();
});