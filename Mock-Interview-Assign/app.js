const createTask = document.querySelector(".task");
const red = document.querySelector("#btn1");
const green = document.querySelector("#btn2");
const blue = document.querySelector("#btn3");
const black = document.querySelector("#btn4");
const popUp = document.querySelector(".pop-up");
// const redTask = document.querySelector('.redTask');
// const redSection = document.querySelector('.redSection');


createTask.addEventListener('click', (e) => {
    e.preventDefault();
    let display = document.createElement('div');
    display.classList.add('display');
    let textArea = document.createElement('textArea');
    textArea.setAttribute('placeholder', 'Enter task here');
    textArea.classList.add('textArea');

    let btnDiv = document.createElement('div');
    btnDiv.classList.add('btnDiv');


    //-----------------------------CREATE BUTTONS---------------------------//
    let redButton = document.createElement('button');
    btnDiv.append(redButton);
    redButton.classList.add('redButton');
    redButton.style.backgroundColor = 'red';

    let yellowButton = document.createElement('button');
    btnDiv.append(yellowButton);
    yellowButton.classList.add('yellowButton');
    yellowButton.style.backgroundColor = 'yellow';

    let blueButton = document.createElement('button');
    btnDiv.append(blueButton);
    blueButton.classList.add('blueButton');
    blueButton.style.backgroundColor = 'blue';

    let blackButton = document.createElement('button');
    btnDiv.append(blackButton);
    blackButton.classList.add('blackButton');
    blackButton.style.backgroundColor = 'black';

    let submitBtn = document.createElement('button');
    submitBtn.classList.add('submitBtn');
    submitBtn.innerText = 'done';

    let crossBtn = document.createElement('button');
    crossBtn.classList.add('crossBtn');
    crossBtn.innerText = 'x';


    
    redButton.addEventListener('click', ()=>{
        textArea.style.backgroundColor =  'red';
        display.style.backgroundColor = 'red';
    });

    yellowButton.addEventListener('click', ()=>{
        textArea.style.backgroundColor =  'yellow';
        display.style.backgroundColor = 'yellow';
    });

    blueButton.addEventListener('click', ()=>{
        textArea.style.backgroundColor =  'blue';
        display.style.backgroundColor = 'blue';
    });

    blackButton.addEventListener('click', ()=>{
        textArea.style.backgroundColor =  'black';
        display.style.backgroundColor = 'black';
    });
    
    
    display.appendChild(textArea);
    display.append(btnDiv);
    display.append(crossBtn);
    display.append(submitBtn);

    popUp.append(display);

    crossBtn.addEventListener('click', (event)=>{
        event.target.parentElement.remove();
    });


    // crossBtn.addEventListener('click',()=>{
    //     crossBtn.parentElement.parentElement.remove();
    // });


    // submitBtn.addEventListener('click',()=>{
    //     inputText.setAttribute('readonly','readonly');
    //     if(textArea.innerText.length>0){
    //         let display2 = document.createElement('div');
    //         display2.classList.add('display2');

    //         display2.append(textArea);
    //         redTask.append(display2);

    //         display2.innerText = textArea.value;
    //     }



    // });


    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        event.target.parentElement.remove();
        let mainTask = textArea.value;
        
        
        if (mainTask.length > 1) {
            let display2 = document.createElement('div')
            display2.classList.add('display2');

            let input = document.createElement('input');
            input.classList.add('input')
            
            let bottomDiv = document.createElement('div');
            bottomDiv.classList.add('bottomDiv');

           
           
            //-------------------------------CREATE ICONS--------------------------------// 
            let check = document.createElement('i');
            check.setAttribute('class', 'fa-solid fa-check');
            // editButton.classList
            check.style.display = 'none';
            check.style.color = 'green';
            
            let trash = document.createElement('i');
            trash.setAttribute('class', 'fa-solid fa-trash-can');
            trash.style.display = 'none';
            trash.style.color = 'red';

            let edit = document.createElement('i');
            edit.setAttribute('class', 'fa-solid fa-pen');
            edit.style.display = 'none';
            edit.style.color = 'grey';

            let square = document.createElement('i');
            square.setAttribute('class', 'fa-solid fa-square');
            square.style.display = 'none';
            square.style.color = 'red';
            
            let unlock = document.createElement('i');
            unlock.setAttribute('class', 'fa-solid fa-lock-open unlock');

            let lock = document.createElement('i');
            lock.setAttribute('class', 'fa-solid fa-lock lock');



            //------------------------------EVENT LISTENER FOR ICONS------------------------:-
            lock.addEventListener('click', () => {
                lock.replaceWith(unlock);
                input.setAttribute('readonly', 'readonly');
                edit.style.display = 'block';
                check.style.display = 'block';
                square.style.display = 'block';
                trash.style.display = 'block';

            });

            unlock.addEventListener('click', () => {
                unlock.replaceWith(lock);
                edit.style.display = 'none';
                check.style.display = 'none';
                square.style.display = 'none';
                trash.style.display = 'none';

            });


            //-------------------------------ADD EVENT TO ICON-----------------------:-
            check.addEventListener('click', () => {
                display2.style.display = 'none';
            });

            trash.addEventListener('click', () => {
                display2.remove();
            });

            edit.addEventListener('click', () => {
                input.removeAttribute('readonly');
            });
            
            square.addEventListener('click', ()=>{
                if(square.style.backgroundColor == 'red'){
                    square.style.backgroundColor = 'yellow';
                    display2.style.background = 'yellow';

                }else if (square.style.backgroundColor == 'yellow'){
                    square.style.backgroundColor = 'blue';
                    display2.style.background = 'blue';

                }else if(square.style.backgroundColor == 'blue'){
                    square.style.backgroundColor = 'black';
                    display2.style.background = 'black';

                }else{
                    square.style.backgroundColor = 'red';
                    display2.style.background = 'red';
                }
            })

           

            //-------------------------------APPEND TO DISPLAY2-------------------:-
            popUp.append(display2);
            display2.append(input);
            display2.append(bottomDiv);
            bottomDiv.append(check);
            bottomDiv.append(trash);
            bottomDiv.append(edit);
            bottomDiv.append(square);
            bottomDiv.append(lock);
            
            
            input.value = textArea.value;
            input.setAttribute('readonly', 'readonly');

        }
    });
});