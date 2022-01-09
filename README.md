# Web-Calculator

***Link To a video Of my calculator while calculating:***

https://drive.google.com/file/d/1IEZsRUZMxy1dcegf8uV1cHtw9VlmBc9/view?usp=sharing

…………………………………………………………………………………….
                                                              
***How to Run:***

1) Unzip the project file.
2) Open the spring file on spring boot using eclipse ide or any other 
ide, there will be 3 classes in the package, run them on port 8080.
3) Make sure you downloaded NodeJs and Angular-CLI.
4) Open the angular project file, then open the cmd window, and 
write npm install in the cmd window.
5) Then write “ng serve” in the cmd window to open the project, on 
port 4200.
 Now, the front-end and back-end are linked together.
 
 
…………………………………………………………………………………….


***Features, Assumptions, and Operations***:

-The user can do only one operation per calculation. 
Ex: 5 + (8)^2, 600*15%, (5)^2 * (6)^2, 1/(5) + 2,….so on.. and he can add to the result easily as the windows calculator does.

-If the user didn’t enter the first operand it will be default "zero", also if the user didn’t enter a second operand and he clicked equal,
the second operand will be considered the same as the first operand (i.e. the previous result).

-If the user wants to get the square (x^2) or square root (x^0.5) or 1/x or % he can do it on the same operand only one time per a calculation:
Ex: He can’t enter ((5)^2)^2, or sqrt((4))^2) and so on..., he can enter (5)^2 then equal then square the result again, easily. 
But he can enter a calculation like this: (5)^2 + sqrt(5), and so on...

-If the user clicked equal button to get the result he can add to the result any operations he wants. Same as windows calculator.

-If the user wants to change an operation before he enters the second operand, he can do so, by clicking on the button of the operation he wants.

-The CE clears only the operand the user is entering in that time. As in the windows.

-The delete/ backspace button clears char by char of the operand he is entering in the meanwhile. 
So if he is clearing a square operand (x^2) or rooted operand (x^0.5) or 1/x or %..., he has to clear using the CE button,
in order to be cleared at once as a whole. Same to what happens in windows calculator.

-The user will be able to calculate standard calculations for all what he wants.
