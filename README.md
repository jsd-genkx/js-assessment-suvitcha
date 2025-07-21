# JavaScript Assessment: Find Your Hat

[Codecademy](https://www.codecademy.com/projects/practice/find-your-hat)

## Table of Contents

- [JavaScript Assessment: Find Your Hat](#javascript-assessment-find-your-hat)
  - [Table of Contents](#table-of-contents)
  - [Repo Instructions](#repo-instructions)
  - [Project Goals](#project-goals)
  - [Project Requirements](#project-requirements)
    - [Game Rules:](#game-rules)
  - [JavaScript Assessment Rubric](#javascript-assessment-rubric)
    - [Thinking Process](#thinking-process)

---

## Repo Instructions

1. Clone the assessment repository, open it in your working directory, commit your progress accordingly, and push the repository to share it with the instructors.
2. Read the instructions in the `README.md` file.
3. Start the project:

   ```terminal
   npm install
   npm run dev
   ```

4. Edit `package.json` file by updating the `"author"` field with your Zoom name.
5. Edit **Thinking Process** section at the end of the `README.md` file. 👉 [Go to Thinking Process](#thinking-process)

[🔝 Back to Table of Contents](#table-of-contents)

---

## Project Goals

- In this project, you’ll be building an interactive terminal game.
- The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

[🔝 Back to Table of Contents](#table-of-contents)

## Project Requirements

- Your project is centered on a `Field` class.
- Give your `Field` class a `.print()` method that prints the current state of the field.

  > The Field constructor should take a two-dimensional array representing the “field” itself.
  >
  > A field consists of a grid containing “holes” (O) and one “hat” (^).
  >
  > We use a neutral background character (░) to indicate the rest of the field itself.
  >
  > The player will begin in the upper-left of the field, and the player’s path is represented by \*.

  ```js
  const myField = new Field([
  	["*", "░", "O"],
  	["░", "O", "░"],
  	["░", "^", "░"],
  ]);

  // Output:
  *░O
  ░O░
  ░^░

  ```

- Your game should be playable by users. In order to facilitate this, build out the following behavior:

  - When a user runs `main.js`, they should be prompted for input and be able to indicate which direction they’d like to `move`.
  - After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with the player's path. They should be prompted for their next move.

[🔝 Back to Table of Contents](#table-of-contents)

### Game Rules:

**1. Wins by finding their hat.**

**2. Loses by landing on (and falling in) a hole.**

**3. Loses by attempting to move “outside” the field.**

**When any of the above occur, let the user know and end the game.**

[🔝 Back to Table of Contents](#table-of-contents)

---

## JavaScript Assessment Rubric

1. Class Method ที่ควรมีครบ: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- constructor
- moveRight
- moveLeft
- moveUp
- moveDown

2. Print Map (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

3. เดินได้ถูกต้อง & Update Map ได้ถูกต้อง (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- เลี้ยวซ้าย
- เลี้ยวขวา
- ขึ้น
- ลง

4. Game Logic: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- Wins by finding their hat
- Loses by landing on (and falling in) a hole.
- Attempts to move "outside" the field. (Warning message when actor attempts to move outside)

5. มี Random ตำแหน่ง: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- holes
- hat
- actor

6. Thinking process & Breakdown the steps of a thinking process (5 pts ครบถ้วน | 3 pts มีไม่ครบ | 0 pts ไม่มีเลย)

[🔝 Back to Table of Contents](#table-of-contents)

---

**Please Write Down Your Thinking Process Below:**

---

### Thinking Process

Thinking Process
1.หาว่าจะรับข้อมูล input keybroad ได้ยังไง ผมก็เอา prompt-syncไปเสริตใน google ดูว่า มันคืออะไร

2.จากนั้นผมเห็นว่ามี Import เข้ามาด้วย ด้วยความสงสัยเลยไปเสริต google ดูว่า clear-screen คืออะไร

3.จากนั้นผมลองเซตค่า this.positionRow = 0; กับ this.positionCol = 0; ให้เป็นค่าอื่น ได้ผลลัพท์ว่า ตัว \* ย้ายตำแหน่ง ทำให้เรารู้

4.รับ input เข้ามา โดยใช้คำสั่ง prompt

5.เมื่อรับเข้ามาแล้วทำได้แค่ทีเดียว จะให้สามารถรับค่าได้หลายๆ ทีตามตัวอย่างทำยังไง ก็เลยไปใช้ while

6.จากนั้นทำการเช็คค่าเมื่อกดตัว r แล้วเดินจากซ้ายไปขวา จากนั้นผมก็ลองใช้คำสั่ง ถ้า input 'r' เข้ามา ให้ทำการเลื่อนตำแหน่ง Index array ไป +1 แล้วลองรันดู

7.ทำจากบนลงล่าง ค่า Row+1

8.ทำจากขวาไปซ้าย ค่า Col-1

9.ทำจากล่างขึ้นบน ค่า Row-1

10.ทำการแสดงผล field ที่หน้าจอ แต่ \* ยังไม่แสดงผลที่หน้าจอ

11.ทำการใส่ค่า pathCharacter เพื่ออัพเดทค่า \* ไปใน value ของ index นั้นๆ ก่อนที่จะแสดงผล

12.ในโจทย์มีให้ Class Method moveRight moveLeft moveUp moveDown จึงไปสร้าง Method เพื่อเรียกใช้ แล้วมาเรียกใช้ใน if เดิมที่เคยทำไว้แล้ว ในข้อ 6. 7. 8. 9. |

13. โจทย์ให้ทำ Game Logic: Wins by finding their hat เมื่อเดินถึงจุดนี้ให้เอา index array ไปเช็ค ตัวแปร hat แล้ว return จบ เกม

14.โจทย์ให้ทำ Game Logic:Loses by landing on (and falling in) a hole. เมื่อเดินถึงจุดนี้ให้เอา index array ไปเช็ค ตัวแปร hole แล้ว return จบ เกม

15.โจทย์ให้ทำ Game Logic:Attempts to move "outside" the field. (Warning message when actor attempts to move outside)

- ทำเงื่อนไขให้หาความยาวของ array Col เพื่อเช็คค่าถ้าค่าเกินทางด้านขวาให้ return จบ เกม

- ทำเงื่อนไขให้หาความยาวของ array Row เพื่อเช็คค่าถ้าค่าเกินทางด้านล่างให้ return จบ เกม

- ทำเงื่อนไขมันไม่ทะลุด้านซ้ายและด้านบน มันคือ -1 ถ้า - 1 ทั้ง row col ให้ return จบ เกม

16.ทำสร้างแมพ

- สร้างฟังก์ชั่น generateField ขึ้นมา จากนั้นรับค่า row, col เพื่อจะได้รู้จำนวน row, col

- จากนั้นสร้าง loop for 2 loop เพื่อสร้าง array ชุดแรก เช่น ใส่ 5 มา ก็จะสร้าง [0,1,2,3,4] โดย push ทีละตัว และเมื่อจำลูปแรก ให้ทำการ push ค่าเข้าไปใน array อีกตัวแปรเพื่อสร้าง อาเรย์ 2 มิติ

- เมื่อสร้างได้ เป็น 2 มิติแล้ว ได้ใส่เงื่อนไขการวาง "░" กับ "O" สลับกัน โดย random โดยค่าที่แรนดอมการวางมีค่า 1 หลุด ต่อ 3 ทางเดิน

17.วางหมวก

- สร้างฟังก์ชั่น generateHat เพื่อวางหมวกโดยแลนดอม โดยจะส่งค่า field และ row, col มาด้วย

- ทำการ random ค่าระหว่าง 0-row และ 0-col เช่น ใส่มา 5 ก็ให้แลนดอมช่วง 0-5 แล้วทำการวางหมวก โดยเขียนในฟังก์ชั่น getRandomInt

18.วาง actor
  วาง actor ไว้ในจุดที่ไม่ซ้ำกัน โดยเขียนในฟังก์ชั่น getRandomInt

_Notes:_<br>
_- You can attach flowcharts, diagrams, and images as needed._<br>
_- The purpose of this section is not to explain your code but rather to convey your thoughts and ideas._

[🔝 Back to Table of Contents](#table-of-contents)
