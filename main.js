
function onScroll (){
    onScrollMenu()
    onScrollToTop()
}

function onScrollMenu () {

const scroll = document.getElementById('navigation');

    if (scrollY > 0) {
        scroll.classList.add('scroll')
    } else {
        scroll.classList.remove('scroll')
    }
}

function onScrollToTop (){
    const scrollToTop = document.getElementById('buttonFloat')

    if (scrollY > 400) {
        scrollToTop.classList.add('show')
    } else {   
        scrollToTop.classList.remove('show')}
}

function openMenu () {
document.body.classList.add('menu-expanded')}
function closeMenu () {
    document.body.classList.remove('menu-expanded')}

    ScrollReveal({
        origin: 'top',
        distance: '3px',
        duration: 1500,

    }).reveal(
        `#homePage,
        #homePage h4,
        #homePage h1,
        #homePage h3,
        #homePage img,
        #homePage #buttonTop,
        #homePage .containerInfo,
        #homePage .artigos,
        #homePage .about,
        buttonFloat`);


        ScrollReveal({
            origin: 'top',
            distance: '3px',
            duration: 5000,
    
        }).reveal(
            `#homePage p,
            #homePage imageSobreNos,
            #homePage button
           `);