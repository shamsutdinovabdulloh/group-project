let itemes = document.querySelector(".itemes");
let part2 = document.querySelector(".secondpart")
let part3 = document.querySelector(".tayout")
let part4 = document.querySelector(".Carousel")
let part5 = document.querySelector(".topp")
let part6 = document.querySelector(".bus")
let part7 = document.querySelector(".it")
let part8 = document.querySelector(".develoment")
let part9 = document.querySelector(".wod")


function arrays(arr){
    arr.forEach(element => {
        itemes.insertAdjacentHTML("beforeend",`
            <li class="title__item">
                                <img src="${element.img}" alt="" class="item__img">
                                <h3 class="item__h4">${element.title}</h3>


                                <p class="item__text">
                                    ${element.author}
                                </p>

                                <span class="otsenka">
                                    <p class="otsenka__text">${element.rating}</p>
                                    <img src="./assets/photo_2025-05-21_17-49-51.jpg" alt="">
                                </span>
                                <span class="prices">
                                    <p class="newprice">${element.price}</p>
                                    <del class="del">${element.discountPrice}</del>
                                </span>
                                <a class="bestseller" href="#">Bestseller</a>
                            </li>
            `)
    });
}





function arr(arrr){
    arrr.forEach(el => {
        part2.insertAdjacentHTML("beforeend",`
            <li class="title__item">
                                <img src="${el.img}" alt="" class="item__img">
                                <h3 class="item__h4">${el.title}</h3>


                                <p class="item__text">
                                    ${el.author}
                                </p>

                                <span class="otsenka">
                                    <p class="otsenka__text">${el.rating}</p>
                                    <img src="./assets/photo_2025-05-21_17-49-51.jpg" alt="">
                                </span>
                                <span class="prices">
                                    <p class="newprice">${el.price}</p>
                                    <del class="del">${el.discountPrice}</del>
                                </span>
                                <a class="bestseller" href="#">Bestseller</a>
                            </li>
            `)
    });
}
function hay(arrr){
    arrr.forEach(el => {
        part4.insertAdjacentHTML("beforeend",`
            <li class="title__item">
                                <img src="${el.img}" alt="" class="item__img">
                                <h3 class="item__h4">${el.title}</h3>


                                <p class="item__text">
                                    ${el.author}
                                </p>

                                <span class="otsenka">
                                    <p class="otsenka__text">${el.rating}</p>
                                    <img src="./assets/photo_2025-05-21_17-49-51.jpg" alt="">
                                </span>
                                <span class="prices">
                                    <p class="newprice">${el.price}</p>
                                    <del class="del">${el.discountPrice}</del>
                                </span>
                                <a class="bestseller" href="#">Bestseller</a>
                            </li>
            `)
        });
    }



function Carouse(arrr){
    arrr.forEach(el => {
        part4.insertAdjacentHTML("beforeend",`
            <li class="title__item">
                                <img src="${el.img}" alt="" class="item__img">
                                <h3 class="item__h4">${el.title}</h3>


                                <p class="item__text">
                                    ${el.author}
                                </p>

                                <span class="otsenka">
                                    <p class="otsenka__text">${el.rating}</p>
                                    <img src="./assets/photo_2025-05-21_17-49-51.jpg" alt="">
                                </span>
                                <span class="prices">
                                    <p class="newprice">${el.price}</p>
                                    <del class="del">${el.discountPrice}</del>
                                </span>
                                <a class="bestseller" href="#">Bestseller</a>
                            </li>
            `)
        });
    }
    
 
function toper(arrr){
        arrr.forEach(el => {
            part5.insertAdjacentHTML("beforeend",`
                <li class="title__item">
                                    <img src="${el.img}" alt="" class="item__img">
                                    <h3 class="item__h4">${el.title}</h3>
    
    
                                    <p class="item__text">
                                        ${el.author}
                                    </p>
    
                                    <span class="otsenka">
                                        <p class="otsenka__text">${el.rating}</p>
                                        <img src="./assets/photo_2025-05-21_17-49-51.jpg" alt="">
                                    </span>
                                    <span class="prices">
                                        <p class="newprice">${el.price}</p>
                                        <del class="del">${el.discountPrice}</del>
                                    </span>
                                    <a class="bestseller" href="#">Bestseller</a>
                                </li>
                `)
        });
    }
    

function bus(arrr){
        arrr.forEach(el => {
            part6.insertAdjacentHTML("beforeend",`
                <li class="title__item">
                                    <img src="${el.img}" alt="" class="item__img">
                                    <h3 class="item__h4">${el.title}</h3>
    
    
                                    <p class="item__text">
                                        ${el.author}
                                    </p>
    
                                    <span class="otsenka">
                                        <p class="otsenka__text">${el.rating}</p>
                                        <img src="./assets/photo_2025-05-21_17-49-51.jpg" alt="">
                                    </span>
                                    <span class="prices">
                                        <p class="newprice">${el.price}</p>
                                        <del class="del">${el.discountPrice}</del>
                                    </span>
                                    <a class="bestseller" href="#">Bestseller</a>
                                </li>
                `)
        });
    }

function it(arrr){
        arrr.forEach(el => {
            part7.insertAdjacentHTML("beforeend",`
                <li class="title__item">
                                    <img src="${el.img}" alt="" class="item__img">
                                    <h3 class="item__h4">${el.title}</h3>
    
    
                                    <p class="item__text">
                                        ${el.author}
                                    </p>
    
                                    <span class="otsenka">
                                        <p class="otsenka__text">${el.rating}</p>
                                        <img src="./assets/photo_2025-05-21_17-49-51.jpg" alt="">
                                    </span>
                                    <span class="prices">
                                        <p class="newprice">${el.price}</p>
                                        <del class="del">${el.discountPrice}</del>
                                    </span>
                                    <a class="bestseller" href="#">Bestseller</a>
                                </li>
                `)
        });
    }


function development(arrr){
        arrr.forEach(el => {
            part8.insertAdjacentHTML("beforeend",`
                <li class="title__item">
                                    <img src="${el.img}" alt="" class="item__img">
                                    <h3 class="item__h4">${el.title}</h3>
    
    
                                    <p class="item__text">
                                        ${el.author}
                                    </p>
    
                                    <span class="otsenka">
                                        <p class="otsenka__text">${el.rating}</p>
                                        <img src="./assets/photo_2025-05-21_17-49-51.jpg" alt="">
                                    </span>
                                    <span class="prices">
                                        <p class="newprice">${el.price}</p>
                                        <del class="del">${el.discountPrice}</del>
                                    </span>
                                    <a class="bestseller" href="#">Bestseller</a>
                                </li>
                `)
        });
    }

function wod(arrr){
        arrr.forEach(el => {
            part9.insertAdjacentHTML("beforeend",`
                <li class="title__item">
                                    <img src="${el.img}" alt="" class="item__img">
                                    <h3 class="item__h4">${el.title}</h3>
    
    
                                    <p class="item__text">
                                        ${el.author}
                                    </p>
    
                                    <span class="otsenka">
                                        <p class="otsenka__text">${el.rating}</p>
                                        <img src="./assets/photo_2025-05-21_17-49-51.jpg" alt="">
                                    </span>
                                    <span class="prices">
                                        <p class="newprice">${el.price}</p>
                                        <del class="del">${el.discountPrice}</del>
                                    </span>
                                    <a class="bestseller" href="#">Bestseller</a>
                                </li>
                `)
        });
    }

toper(courses)
bus(courses)
it(courses)
development(courses)
wod(courses)
Carouse(courses)
arrays(courses)
arr(courses)
hay(courses)