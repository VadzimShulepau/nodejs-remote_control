## [assignment.md](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/remote-control/assignment.md)
## [score.md](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/remote-control/score.md)

## Deadline: 26.06.2022 23-59.

 - The program is started by npm script start in following way:
 `npm run start `.
 - Open browser and enter `localhost:3000`.

 List of websocket commands and their syntax (<- - cmd from frontend, -> - answer):
- Navigation over the x and y axis
    - Move mouse up
    ```bash
    <- mouse_up {y px}
    ```
    - Move mouse down
    ```bash
    <- mouse_down {y px}
    ```
    - Move mouse left
    ```bash
    <- mouse_left {x px}
    ```
    - Move mouse right
    ```bash
    <- mouse_right {x px}
    ```
    - Send mouse coordinates
    ```bash
    <- mouse_position
    -> mouse_position {x px},{y px}
    ```
- Drawing.
  > Необходимо разделить экран на 2 части, слева установить браузер справа приложение для рисования
  после перевести курсор и активировать окно браузера,
  далее выбрать нужную команду (клавиши `R, C, S`), 
  курсор сам переместиться активирует окно приложения для рисования
  и нарисует фигуру.
  [screencast]()
    - Draw circle with pushed left button: 
    ```bash
    <- draw_circle {px}
    ```
    - Draw rectangle with pushed left button: 
    ```bash
    <- draw_rectangle {px} {px}
    ```
    - Draw square with pushed left button: 
    ```bash
    <- draw_square {px}
    ```
- Print screen.
    - Make print screen command and send image (a base64 buffer of the 200 px square around the mouse position):
    ```bash
    <- prnt_scrn
    -> prnt_scrn {base64 string (png buf)}
    ```