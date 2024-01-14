function receivesAFunction(toDo){
    toDo();
}

function returnsANamedFunction(){
    return function progress(){
        console.log('Lionel Messi GOAT')
    }
}
returnsANamedFunction();


function returnsAnAnonymousFunction(){
    return ()=> {
        console.log('ULionel Messi GOAT')
    }
    
}


    