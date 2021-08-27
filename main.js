function dropdown() {

    let menu = document.getElementById("myLinks")
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        menu.style.visibility = 'hidden'

    }
    else {
        menu.style.display = 'block';
        menu.style.visibility = 'visible'

    }

}
let apiKey=""
let apiKey2=""
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                let json = JSON.parse(allText);
                let d = new Date();
                let h=d.getHours();
                if(h>=0 && h<4){
                    apiKey=json.key[0].apiKey
                    apiKey2=json.key[0].apiKey2
                }
                else if(h>=4 && h<8){
                    apiKey=json.key[1].apiKey
                    apiKey2=json.key[1].apiKey2
                }
                else if(h>=8 && h<12){
                    apiKey=json.key[2].apiKey
                    apiKey2=json.key[2].apiKey2
                }
                else if(h>=12 && h<16){
                    apiKey=json.key[3].apiKey
                    apiKey2=json.key[3].apiKey2
                }
                else if(h>=16 && h<20){
                    apiKey=json.key[4].apiKey
                    apiKey2=json.key[4].apiKey2
                }
                else if(h>=20 && h<=23){
                    apiKey=json.key[5].apiKey
                    apiKey2=json.key[5].apiKey2
                }
            }
        }
    }
    rawFile.send(null);
}

readTextFile('/WeeklyNews/file.txt')


// Initialize the news api parameters
// let apiKey = '13499aa96ebe4bd9b5bfc25e5eeeadba'
// let apiKey2 = '6a148719867c4e3ebb1e689092214c28'
// let apiKey2 = '5c79f6936d5d453d965c664689b70f55'
// let apiKey='fb0a4afddc3246d8ab2462a14d111add'

// Grab the news container
let newsAccordion = document.getElementById('container');

// Create an ajax get request
const xhr = new XMLHttpRequest();
const xhr2 = new XMLHttpRequest();



// What to do when response is ready
let newsHtml = "";


xhr.open('GET', `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}&pageSize=50`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        document.getElementById("loader_container").style.display = "none"
        document.getElementById("loader_container").style.visibility = "hidden"
        // console.log(articles[0].content);
        articles.forEach(function (element, index) {
            //     console.log(element, index)
            if (element.urlToImage !== null && element.description !== null) {
                let news = `<div class="subcontainer">
              <img src='${element.urlToImage}' alt="" onerror="this.onerror=null;this.src='Wnews.jpeg';">
              <a href='${element.url}' target="_blank" aria-label="News_Title" rel="noopener" class="title"><div>${element.title}</div></a>
              <hr class="under_title">
              <div class="description">${element.description}</div>
              <div class="source">Source:${element.source.name}</div>
              <a href="${element.url}" aria-label="News_Link" target="_blank" class="down_arrow"></a>
            </div>`;
                newsHtml += news;
            }
        });
        newsAccordion.innerHTML = newsHtml + newsHtml2;

    }
    else {
        console.log("Some error occured")
    }
}
xhr.send()



let newsHtml2 = "";

xhr2.open('GET', `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey2}&pageSize=50&page=2`, true);

xhr2.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        document.getElementById("loader_container").style.display = "none"
        document.getElementById("loader_container").style.visibility = "hidden"
        // console.log(articles[0].content);
        articles.forEach(function (element, index) {
            //     console.log(element, index)

            if (element.urlToImage !== null && element.description !== null) {
                let news = `<div class="subcontainer">
              <img src='${element.urlToImage}' alt="" onerror="this.onerror=null;this.src='Wnews.jpeg';">
              <a href='${element.url}' aria-label="News_Title" rel="noopener" target="_blank" class="title"><div>${element.title}</div></a>
              <hr class="under_title">
              <div class="description">${element.description}</div>
              <div class="source">Source:${element.source.name}</div>
              <a href="${element.url}" aria-label="News_Link" target="_blank" class="down_arrow"></a>
            </div>`;
                newsHtml2 += news;
            }
        });
        newsAccordion.innerHTML = newsHtml + newsHtml2;
    }
    else {
        console.log("Some error occured")
    }
}

xhr2.send()
let sw = 1
let pop = 1
function DarkMode() {
    if (sw == 1) {
        sw = 0;
        document.body.style.backgroundColor = "#000606d4"
        document.body.style.color = "white"
        document.getElementById("underline").style.color = "transparent"
        document.getElementById("usort").style.color = "transparent"
        document.getElementById("heading").style.textShadow = "black 1px 1px, black 1px 1px, black 1px 1px, black 1px 1px";
        document.getElementById("heading").style.letterSpacing = "1px"
        document.getElementById("mode").style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23C4A231'%3E%3Cpath d='M22 12l-3-1.9L20.7 7l-3.5-.1-.2-3.6L13.9 5 12 2l-1.9 3L7 3.3l-.1 3.6-3.6.1L5 10.1 2 12l3 1.9L3.3 17l3.5.1.2 3.6 3.1-1.7 1.9 3 1.9-3 3.1 1.7.1-3.5 3.5-.1-1.6-3.2 3-1.9zm-10 6c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='5'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")`;
        document.getElementById("logo_menu").style.backgroundColor = "transparent"
        document.getElementById("magni").style.backgroundColor = "transparent"
        document.getElementById("under_navigator").style.border = "1px solid #4a505a59"
        document.getElementById("un_nav").style.border = "1px solid #4a505a"
        document.getElementById("footer").style.backgroundColor = "#000606d4"
        if (pop === 0) {
            document.getElementById("popular").style.color = "white";
            document.getElementById("popular").style.textShadow = "black 1px 1px, black 1px 1px, black 1px 1px, black 1px 1px";
            document.getElementById("popular").style.letterSpacing = "2px";
        }
        if (pop === 1) {
            document.getElementById("latest").style.color = "white";
            document.getElementById("latest").style.textShadow = "black 1px 1px, black 1px 1px, black 1px 1px, black 1px 1px";
            document.getElementById("latest").style.letterSpacing = "2px";
        }


        var elems1 = document.querySelectorAll('#navigator a');
        var index1 = 0, length1 = elems1.length;
        for (; index1 < length1; index1++) {
            elems1[index1].style.color = "white";
            elems1[index1].style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
            elems1[index1].style.letterSpacing = "1px";
        }
        var elems2 = document.querySelectorAll('#pip');
        var index2 = 0, length2 = elems2.length;
        for (; index2 < length2; index2++) {
            elems2[index2].style.color = "white";
        }
        var elems3 = document.querySelectorAll('.title div');
        var index3 = 0, length3 = elems3.length;
        for (; index3 < length3; index3++) {
            elems3[index3].style.color = "white";
            elems3[index3].style.textShadow = "black 1px 1px, black 1px 1px, black 1px 1px, black 1px 1px";
        }
        var elems = document.querySelectorAll('.subcontainer');
        var index = 0, length = elems.length;
        for (; index < length; index++) {
            elems[index].style.border = "1px solid #415a69f55";
            elems[index].style.boxShadow = "4px 4px 8px #00000011";
        }
        var elems = document.querySelectorAll('.navbar');
        var index = 0, length = elems.length;
        for (; index < length; index++) {
            elems[index].style.backgroundColor = "#00000085";
        }

        var elems = document.querySelectorAll('.down_arrow');
        var index = 0, length = elems.length;
        for (; index < length; index++) {
            elems[index].style.backgroundColor = "transparent";
        }
        // var elems = document.querySelectorAll('#sort a');
        // var index = 0, length = elems.length;
        // for (; index < length; index++) {
        //     elems[index].style.color = "white";
        //     elems[index].style.textShadow = "black 1px 1px, black 1px 1px, black 1px 1px, black 1px 1px";
        //     elems[index].style.letterSpacing = "2px";
        // }
    }
    else {
        sw = 1
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        document.getElementById("underline").style.color = "transparent"
        document.getElementById("pip2").style.color = "#767b7d"
        document.getElementById("heading").style.textShadow = "0px 0px white, 0 0px white, 0px 0 white, 0 0px white";
        document.getElementById("heading").style.letterSpacing = "0px"
        document.getElementById("mode").style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23C79F1A'%3E%3Cpath d='M16.5 16C11.8 16 8 12.2 8 7.5c0-2 0.7-3.8 1.8-5.3C5.4 3.2 2 7.2 2 12c0 5.5 4.5 10 10 10c4.8 0 8.8-3.4 9.8-7.8  C20.3 15.3 18.5 16 16.5 16z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`;
        document.getElementById("logo_menu").style.backgroundColor = "#343a40"
        document.getElementById("magni").style.backgroundColor = "#343a40"
        document.getElementById("under_navigator").style.border = "1px inset rgb(217 231 236)"
        document.getElementById("footer").style.backgroundColor = "#343a40"
        if (pop === 0) {
            document.getElementById("popular").style.color = "#343a40";
            document.getElementById("popular").style.textShadow = "0px 0px white, 0 0px white, 0px 0 white, 0 0px white";
            document.getElementById("popular").style.letterSpacing = "1px";
        }
        if (pop === 1) {
            document.getElementById("latest").style.color = "#343a40";
            document.getElementById("latest").style.textShadow = "0px 0px white, 0 0px white, 0px 0 white, 0 0px white";
            document.getElementById("latest").style.letterSpacing = "1px";
        }

        var elems = document.querySelectorAll('#navigator a');
        var index = 0, length = elems.length;
        for (; index < length; index++) {
            elems[index].style.color = "#343a40";
            elems[index].style.textShadow = "0px 0px white, 0 0px white, 0px 0 white, 0 0px white";
            elems[index].style.letterSpacing = "0px";
        }
        var elems = document.querySelectorAll('#pip');
        var index = 0, length = elems.length;
        for (; index < length; index++) {
            elems[index].style.color = "#767b7d";
        }
        var elems = document.querySelectorAll('.title div');
        var index = 0, length = elems.length;
        for (; index < length; index++) {
            elems[index].style.color = "black";
            elems[index].style.textShadow = "0px 0px white, 0 0px white, 0px 0 white, 0 0px white";
        }
        var elems = document.querySelectorAll('.subcontainer');
        var index = 0, length = elems.length;
        for (; index < length; index++) {
            elems[index].style.border = "1px solid #767b7d18";
            elems[index].style.boxShadow = "4px 4px 8px #00000011";
        }
        var elems = document.querySelectorAll('.navbar');
        var index = 0, length = elems.length;
        for (; index < length; index++) {
            elems[index].style.backgroundColor = "#343a40";
        }
        var elems = document.querySelectorAll('.down_arrow');
        var index = 0, length = elems.length;
        for (; index < length; index++) {
            elems[index].style.backgroundColor = "white";
        }
        // var elems = document.querySelectorAll('#sort a');
        // var index = 0, length = elems.length;
        // for (; index < length; index++) {
        //     elems[index].style.color = "#343a40";
        //     elems[index].style.textShadow = "0px 0px white, 0 0px white, 0px 0 white, 0 0px white";
        //     elems[index].style.letterSpacing = "1px";
        // }
    }
}

function search() {
    let search_value = document.getElementById('searching').value.trim();
    // console.log(search_value)
    if (search_value !== "") {
        let menu = document.getElementById("myLinks")
        menu.style.display = 'none';
        menu.style.visibility = 'hidden'
        let menu2 = document.getElementById("sort")
        menu2.style.display = 'none';
        menu2.style.visibility = 'hidden'
        let menu3 = document.getElementById("usort")
        menu3.style.display = 'none';
        menu3.style.visibility = 'hidden'
        let menu4 = document.getElementById("inner2")
        menu4.style.display = 'none';
        menu4.style.visibility = 'hidden'
        newsAccordion.innerHTML = ""
        document.getElementById("loader_container").style.display = "flex"
        document.getElementById("loader_container").style.visibility = "visible"
        let newsHtml = "";
        let newsHtml2 = "";
        document.getElementById("heading").innerHTML = `Search Results : ${search_value}`
        xhr.open('GET', `https://newsapi.org/v2/everything?language=en&apiKey=${apiKey}&pageSize=50&q=${search_value}`, true);
        xhr.onload = function () {
            if (this.status === 200) {
                let json = JSON.parse(this.responseText);
                let articles = json.articles;
                if (articles.length == 0)
                    document.getElementById("heading").innerHTML = `No Search Result Found : ${search_value}`
                document.getElementById("loader_container").style.display = "none"
                document.getElementById("loader_container").style.visibility = "hidden"
                // console.log(articles[0].content);
                articles.forEach(function (element, index) {
                    //     console.log(element, index)
                    if (element.urlToImage !== null && element.description !== null) {
                        let news = `<div class="subcontainer">
              <img src='${element.urlToImage}' alt="" alt="" onerror="this.onerror=null;this.src='Wnews.jpeg';">
              <a href='${element.url}' target="_blank" aria-label="News_Title" rel="noopener" class="title"><div>${element.title}</div></a>
              <hr class="under_title">
              <div class="description">${element.description}</div>
              <div class="source">Source:${element.source.name}</div>
              <a href="${element.url}" aria-label="News_Link" target="_blank" class="down_arrow"></a>
            </div>`;
                        newsHtml += news;
                    }
                });
                newsAccordion.innerHTML = newsHtml + newsHtml2;
            }
            else {
                console.log("Some error occured")
            }
        }

        xhr.send()



        xhr2.open('GET', `https://newsapi.org/v2/everything?language=en&apiKey=${apiKey2}&pageSize=50&page=2&q=${search_value}`, true);
        xhr2.onload = function () {
            if (this.status === 200) {
                let json = JSON.parse(this.responseText);
                let articles = json.articles;
                document.getElementById("loader_container").style.display = "none"
                document.getElementById("loader_container").style.visibility = "hidden"
                // console.log(articles[0].content);
                articles.forEach(function (element, index) {
                    //     console.log(element, index)

                    if (element.urlToImage !== null && element.description !== null) {
                        let news = `<div class="subcontainer">
              <img src='${element.urlToImage}' alt="" onerror="this.onerror=null;this.src='Wnews.jpeg';">
              <a href='${element.url}' aria-label="News_Title" rel="noopener" target="_blank" class="title"><div>${element.title}</div></a>
              <hr class="under_title">
              <div class="description">${element.description}</div>
              <div class="source">Source:${element.source.name}</div>
              <a href="${element.url}" aria-label="News_Link" target="_blank" class="down_arrow"></a>
            </div>`;
                        newsHtml2 += news;
                    }
                });
                newsAccordion.innerHTML = newsHtml + newsHtml2;
            }
            else {
                console.log("Some error occured")
            }
        }
        xhr2.send()
    }

}

function magni_search() {

    if (window.innerWidth <= 700) {
        let menu = document.getElementById("myLinks")
        menu.style.display = 'block';
        menu.style.visibility = 'visible'
        let c = document.getElementById('searching2');
        c.click();
    }
    else {
        let search_value = document.getElementById('searching2').value.trim();
        // console.log(search_value)
        if (search_value !== "") {
            let menu = document.getElementById("myLinks")
            menu.style.display = 'none';
            menu.style.visibility = 'hidden'
            let menu2 = document.getElementById("sort")
            menu2.style.display = 'none';
            menu2.style.visibility = 'hidden'
            let menu3 = document.getElementById("usort")
            menu3.style.display = 'none';
            menu3.style.visibility = 'hidden'
            let menu4 = document.getElementById("inner2")
            menu4.style.display = 'none';
            menu4.style.visibility = 'hidden'
            newsAccordion.innerHTML = ""
            document.getElementById("loader_container").style.display = "flex"
            document.getElementById("loader_container").style.visibility = "visible"
            let newsHtml = "";
            let newsHtml2 = "";
            document.getElementById("heading").innerHTML = `Search Results : ${search_value}`
            xhr.open('GET', `https://newsapi.org/v2/everything?language=en&apiKey=${apiKey}&pageSize=50&q=${search_value}`, true);
            xhr.onload = function () {
                if (this.status === 200) {
                    let json = JSON.parse(this.responseText);
                    let articles = json.articles;
                    if (articles.length == 0)
                        document.getElementById("heading").innerHTML = `No Search Result Found : ${search_value}`
                    document.getElementById("loader_container").style.display = "none"
                    document.getElementById("loader_container").style.visibility = "hidden"
                    // console.log(articles[0].content);
                    articles.forEach(function (element, index) {
                        //     console.log(element, index)
                        if (element.urlToImage !== null && element.description !== null) {
                            let news = `<div class="subcontainer">
                        <img src='${element.urlToImage}' alt="" alt="" onerror="this.onerror=null;this.src='Wnews.jpeg';">
                        <a href='${element.url}' target="_blank" aria-label="News_Title" rel="noopener" class="title"><div>${element.title}</div></a>
                        <hr class="under_title">
                        <div class="description">${element.description}</div>
                        <div class="source">Source:${element.source.name}</div>
                        <a href="${element.url}" aria-label="News_Link" target="_blank" class="down_arrow"></a>
                        </div>`;
                            newsHtml += news;
                        }
                    });
                    newsAccordion.innerHTML = newsHtml + newsHtml2;
                }
                else {
                    console.log("Some error occured")
                }
            }

            xhr.send()




            xhr2.open('GET', `https://newsapi.org/v2/everything?language=en&apiKey=${apiKey2}&pageSize=50&page=2&q=${search_value}`, true);
            xhr2.onload = function () {
                if (this.status === 200) {
                    let json = JSON.parse(this.responseText);
                    let articles = json.articles;
                    document.getElementById("loader_container").style.display = "none"
                    document.getElementById("loader_container").style.visibility = "hidden"
                    // console.log(articles[0].content);
                    articles.forEach(function (element, index) {
                        //     console.log(element, index)

                        if (element.urlToImage !== null && element.description !== null) {

                            let news = `<div class="subcontainer">
                        <img src='${element.urlToImage}' alt="" onerror="this.onerror=null;this.src='Wnews.jpeg';">
                        <a href='${element.url}' aria-label="News_Title" rel="noopener" target="_blank" class="title"><div>${element.title}</div></a>
                        <hr class="under_title">
                        <div class="description">${element.description}</div>
                        <div class="source">Source:${element.source.name}</div>
                        <a href="${element.url}" aria-label="News_Link" target="_blank" class="down_arrow"></a>
                        </div>`;
                            newsHtml2 += news;
                        }
                    });
                    newsAccordion.innerHTML = newsHtml + newsHtml2;
                }
                else {
                    console.log("Some error occured")
                }
            }
            xhr2.send()


        }
    }
}

function enter() {
    document.getElementById("searching").addEventListener('keyup', function (e) {
        if (e.keyCode === 13)
            search()
    })
    document.getElementById("searching2").addEventListener('keyup', function (e) {
        if (e.keyCode === 13)
            magni_search()
    })
}

function Country_search() {
    // console.log(document.getElementById("select-option").value);
    let search_value2 = document.getElementById("select-option").value.trim();
    // console.log(search_value)

    let menu = document.getElementById("myLinks")
    menu.style.display = 'none';
    menu.style.visibility = 'hidden'
    let menu2 = document.getElementById("sort")
    menu2.style.display = 'none';
    menu2.style.visibility = 'hidden'
    let menu3 = document.getElementById("usort")
    menu3.style.display = 'none';
    menu3.style.visibility = 'hidden'
    newsAccordion.innerHTML = ""
    document.getElementById("loader_container").style.display = "flex"
    document.getElementById("loader_container").style.visibility = "visible"
    let newsHtml = "";
    let newsHtml2 = "";
    document.getElementById("heading").innerHTML = `Top News Headlines`
    if (search_value2 == 0)
        xhr.open('GET', `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}&pageSize=50`, true);
    else
        xhr.open('GET', `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&pageSize=50&country=${search_value2}`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            if (articles.length == 0)
                document.getElementById("heading").innerHTML = `No Search Result Found `
            else if (search_value2 !== '0')
                document.getElementById("heading").innerHTML = `Top News Headlines of ${document.getElementById(search_value2).innerHTML}`
            document.getElementById("loader_container").style.display = "none"
            document.getElementById("loader_container").style.visibility = "hidden"
            // console.log(articles[0].content);
            articles.forEach(function (element, index) {
                //     console.log(element, index)
                if (element.urlToImage !== null && element.description !== null) {
                    let news = `<div class="subcontainer">
                  <img src='${element.urlToImage}' alt="" alt="" onerror="this.onerror=null;this.src='Wnews.jpeg';">
                  <a href='${element.url}' target="_blank" aria-label="News_Title" rel="noopener" class="title"><div>${element.title}</div></a>
                  <hr class="under_title">
                  <div class="description">${element.description}</div>
                  <div class="source">Source:${element.source.name}</div>
                  <a href="${element.url}" aria-label="News_Link" target="_blank" class="down_arrow"></a>
                </div>`;
                    newsHtml += news;
                }
            });
            newsAccordion.innerHTML = newsHtml + newsHtml2;
        }
        else {
            console.log("Some error occured")
        }
    }

    xhr.send()




    if (search_value2 == 0)
        xhr2.open('GET', `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey2}&pageSize=50&page=2`, true);
    else
        xhr2.open('GET', `https://newsapi.org/v2/top-headlines?apiKey=${apiKey2}&pageSize=50&page=2&country=${search_value2}`, true);
    xhr2.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;

            // console.log(articles[0].content);
            articles.forEach(function (element, index) {
                //     console.log(element, index)

                if (element.urlToImage !== null && element.description !== null) {
                    let news = `<div class="subcontainer">
                  <img src='${element.urlToImage}' alt="" onerror="this.onerror=null;this.src='Wnews.jpeg';">
                  <a href='${element.url}' aria-label="News_Title" rel="noopener" target="_blank" class="title"><div>${element.title}</div></a>
                  <hr class="under_title">
                  <div class="description">${element.description}</div>
                  <div class="source">Source:${element.source.name}</div>
                  <a href="${element.url}" aria-label="News_Link" target="_blank" class="down_arrow"></a>
                </div>`;
                    newsHtml2 += news;
                }
            });
            newsAccordion.innerHTML = newsHtml + newsHtml2;
        }
        else {
            console.log("Some error occured")
        }
    }

    xhr2.send()
}

function latest_news(category) {
    pop = 0
    document.getElementById("latest").style.color = "red";
    if (sw === 1) {
        document.getElementById("popular").style.color = "#343a40";
        document.getElementById("popular").style.textShadow = "0px 0px white, 0 0px white, 0px 0 white, 0 0px white";
        document.getElementById("popular").style.letterSpacing = "1px";
    }
    if (sw === 0) {
        document.getElementById("popular").style.color = "white";
        document.getElementById("popular").style.textShadow = "black 1px 1px, black 1px 1px, black 1px 1px, black 1px 1px";
        document.getElementById("popular").style.letterSpacing = "2px";
    }
    document.getElementById("ulatest").style.visibility = "visible";
    document.getElementById("upopular").style.visibility = "hidden";
    newsAccordion.innerHTML = ""
    document.getElementById("loader_container").style.display = "flex"
    document.getElementById("loader_container").style.visibility = "visible"
    let newsHtml = "";
    let newsHtml2 = "";

    xhr.open('GET', `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&pageSize=50&page=1&sources=the-times-of-india,wired,abc-news,axios,bbc-news,cnn,engadget,entertainment-weekly,fox-news,hacker-news,national-geographic,new-scientist,next-big-future,techcrunch,techradar,the-hindu`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            document.getElementById("loader_container").style.display = "none"
            document.getElementById("loader_container").style.visibility = "hidden"
            // console.log(articles[0].content);
            articles.forEach(function (element, index) {
                //     console.log(element, index)
                if (element.urlToImage !== null && element.description !== null) {
                    let news = `<div class="subcontainer">
              <img src='${element.urlToImage}' alt="" onerror="this.onerror=null;this.src='Wnews.jpeg';">
              <a href='${element.url}' target="_blank" aria-label="News_Title" rel="noopener" class="title"><div>${element.title}</div></a>
              <hr class="under_title">
              <div class="description">${element.description}</div>
              <div class="source">Source:${element.source.name}</div>
              <a href="${element.url}" aria-label="News_Link" target="_blank" class="down_arrow"></a>
            </div>`;
                    newsHtml += news;
                }
            });
            newsAccordion.innerHTML = newsHtml + newsHtml2;

        }
        else {
            console.log("Some error occured")
        }
    }
    xhr.send()





    xhr2.open('GET', `https://newsapi.org/v2/top-headlines?apiKey=${apiKey2}&pageSize=50&page=2&sources=the-times-of-india,wired,abc-news,axios,bbc-news,cnn,engadget,entertainment-weekly,fox-news,hacker-news,national-geographic,new-scientist,next-big-future,techcrunch,techradar,the-hindu`, true);

    xhr2.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            document.getElementById("loader_container").style.display = "none"
            document.getElementById("loader_container").style.visibility = "hidden"
            // console.log(articles[0].content);
            articles.forEach(function (element, index) {
                //     console.log(element, index)

                if (element.urlToImage !== null && element.description !== null) {
                    let news = `<div class="subcontainer">
              <img src='${element.urlToImage}' alt="" onerror="this.onerror=null;this.src='Wnews.jpeg';">
              <a href='${element.url}' aria-label="News_Title" rel="noopener" target="_blank" class="title"><div>${element.title}</div></a>
              <hr class="under_title">
              <div class="description">${element.description}</div>
              <div class="source">Source:${element.source.name}</div>
              <a href="${element.url}" aria-label="News_Link" target="_blank" class="down_arrow"></a>
            </div>`;
                    newsHtml2 += news;
                }
            });
            newsAccordion.innerHTML = newsHtml + newsHtml2;
        }
        else {
            console.log("Some error occured")
        }
    }

    xhr2.send()
}


function popular_news(){
    let newsHtml = "";
    pop = 0
    document.getElementById("popular").style.color = "red";
    if (sw === 1) {
        document.getElementById("latest").style.color = "#343a40";
        document.getElementById("latest").style.textShadow = "0px 0px white, 0 0px white, 0px 0 white, 0 0px white";
        document.getElementById("latest").style.letterSpacing = "1px";
    }
    if (sw === 0) {
        document.getElementById("latest").style.color = "white";
        document.getElementById("latest").style.textShadow = "black 1px 1px, black 1px 1px, black 1px 1px, black 1px 1px";
        document.getElementById("latest").style.letterSpacing = "2px";
    }
    document.getElementById("ulatest").style.visibility = "hidden";
    document.getElementById("upopular").style.visibility = "visible";
    newsAccordion.innerHTML = ""
    document.getElementById("loader_container").style.display = "flex"
    document.getElementById("loader_container").style.visibility = "visible"
xhr.open('GET', `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey}&pageSize=50`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        document.getElementById("loader_container").style.display = "none"
        document.getElementById("loader_container").style.visibility = "hidden"
        // console.log(articles[0].content);
        articles.forEach(function (element, index) {
            //     console.log(element, index)
            if (element.urlToImage !== null && element.description !== null) {
                let news = `<div class="subcontainer">
              <img src='${element.urlToImage}' alt="" onerror="this.onerror=null;this.src='Wnews.jpeg';">
              <a href='${element.url}' target="_blank" aria-label="News_Title" rel="noopener" class="title"><div>${element.title}</div></a>
              <hr class="under_title">
              <div class="description">${element.description}</div>
              <div class="source">Source:${element.source.name}</div>
              <a href="${element.url}" aria-label="News_Link" target="_blank" class="down_arrow"></a>
            </div>`;
                newsHtml += news;
            }
        });
        newsAccordion.innerHTML = newsHtml + newsHtml2;

    }
    else {
        console.log("Some error occured")
    }
}
xhr.send()



let newsHtml2 = "";

xhr2.open('GET', `https://newsapi.org/v2/top-headlines?language=en&apiKey=${apiKey2}&pageSize=50&page=2`, true);

xhr2.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        document.getElementById("loader_container").style.display = "none"
        document.getElementById("loader_container").style.visibility = "hidden"
        // console.log(articles[0].content);
        articles.forEach(function (element, index) {
            //     console.log(element, index)

            if (element.urlToImage !== null && element.description !== null) {
                let news = `<div class="subcontainer">
              <img src='${element.urlToImage}' alt="" onerror="this.onerror=null;this.src='Wnews.jpeg';">
              <a href='${element.url}' aria-label="News_Title" rel="noopener" target="_blank" class="title"><div>${element.title}</div></a>
              <hr class="under_title">
              <div class="description">${element.description}</div>
              <div class="source">Source:${element.source.name}</div>
              <a href="${element.url}" aria-label="News_Link" target="_blank" class="down_arrow"></a>
            </div>`;
                newsHtml2 += news;
            }
        });
        newsAccordion.innerHTML = newsHtml + newsHtml2;
    }
    else {
        console.log("Some error occured")
    }
}

xhr2.send()
}
