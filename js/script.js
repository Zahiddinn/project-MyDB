'use strict';
document.addEventListener('DOMContentLoaded', () => {




    const promoAdv = document.querySelector('.promo__adv'),
        promoImg = promoAdv.querySelectorAll('img'),
        promoGenre = document.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        moviesList = document.querySelector('.promo__interactive-list'),
        formAdd = document.querySelector('.add'),
        addInput = formAdd.querySelector('.adding__input'),
        checkBox = formAdd.querySelector('[type="checkbox"]');


    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = addInput.value;
        const favorite = checkBox.checked;

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, moviesList);
        event.target.reset();
    })

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };



    const deleteAdv = (arr) => {
        arr.forEach(e => {
            e.remove();
        });
    }





    const makeChanges = () => {
        promoGenre.textContent = 'ДРАМА'
        promoBg.style.backgroundImg = 'url("img/bg.jpg")'
    }



    const sortArr = (arr) => {
        arr.sort();
    }





    function createMovieList(films, parent) {
        parent.innerHTML = '';

        films.forEach((elem, e) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${e + 1} ${elem}
                    <div class="delete"></div>
                </li>
                `
        });
    }





    deleteAdv(promoImg);
    makeChanges();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, moviesList);


})