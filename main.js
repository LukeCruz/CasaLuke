function onScroll (){

const scroll = document.getElementById('navigation');
    if (scrollY > 0) {
        scroll.classList.add('scroll')
    } else {
        scroll.classList.remove('scroll')
    }
}


function openMenu () {
document.body.classList.add('menu-expanded')}
function closeMenu () {
    document.body.classList.remove('menu-expanded')}

    ScrollReveal({
        origin: 'top',
        distance: '3px',
        duration: 700,

    }).reveal(
        `#homePage,
        #homePage h4,
        #homePage h1,
        #homePage img,`);
       // #homePage #buttonTop,
        //#homePage .containerInfo,
     //   #homePage .containerInfo .pi,
       // #homePage .containerInfo .numeros,
       // #homePage .artigos,
        //#homePage .about`);
