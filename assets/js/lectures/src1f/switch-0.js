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

export function main(){
    let n = +prompt('Enter an integer name of course: ');
    switch(n){
        case 50:
            alert("CS50 is Introduction to Computer Science");
            break;
        case 51:
            alert("CS50 is Introduction to Computer Science II");
            break
        default:
            alert("Sorry, I'm not familiar with that class!")
            break;
    }
}

