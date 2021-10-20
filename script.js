window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    //Tabs

    //Мы создали переменные связанные с HTML объектами
    let tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        info = document.querySelector('.info-header');

    //Функция закрытия лишних табов
    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    //Задаём начальный открытый таб
    hideTabContent(1);

    //Функция открытия нужного таба и закрытие лишних
    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.remove('show');

        }
    };

    //Создаем алгоритм нахождения таб на который кликнули, 
    //проверяем и используем функции открытия и закрытия таббов

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }                                                         
        }
    });
    

    //Timer
    let deadLine = '2021-1-16';
    function getTimeReamaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours
        };
    };

    function setClock(id, endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeReamaining(endtime);
            hours.textContent ='0' + t.hours;
            minutes.textContent ='0' + t.minutes;
            seconds.textContent = t.seconds;

            if(t.total <= 0){
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent ='00';
            }
        };
    };
    setClock('timer', deadLine);


    // Modal Window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        //Как запретить прокручивать страницу во время открытого модального окна
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
});