/**
 * switch-0.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Define the course.
 *
 * Demonstrate use of a switch.
 */

let n = 50;
switch(n){
    case 50:
        document.write("CS50 is Introduction to Computer Science");
        break;
    case 51:
        document.write("CS50 is Introduction to Computer Science II");
        break
    default:
        document.write("Sorry, I'm not familiar with that class!")
        break;
}