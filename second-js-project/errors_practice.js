const rouge = () => {
    console.log(nexistePas);
}

const green = () => {
    try {
        rouge();
    } catch {
        console.log("Error!");
    }
    
}

const yellow = () => {
    green();
}

yellow();