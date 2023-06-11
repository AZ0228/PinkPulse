function statistic(){
    let disappear = document.querySelectorAll('.disappear');
    let statistic = document.querySelector('.statistic');
    let main = document.querySelector('.main');
    setTimeout(() => {
        
        statistic.style.display = 'block';
    }, 250);
    console.log(1);
    for(const item of disappear){
        item.classList.add('going');
        setTimeout(() => {      
            item.classList.add('gone');
        }, 300);
    }
    setTimeout(() => {
        main.classList.add('mainSecond');
        statistic.classList.add('start');
    }, 300);
}