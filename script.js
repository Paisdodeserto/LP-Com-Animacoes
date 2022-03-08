gsap.registerPlugin(ScrollTrigger); //registrar o plugin do site greensock.com para podermos utilizá-lo

gsap.from(".animate_inicial_texto", {
    duration: 0.6, //duração da animação
    opacity: 0,
    y: -150, //eixo de cima para baixo. Quantos px está para cima ou para baixo
    stagger: 0.3 //quantidade de segundos entre eles para carregar no site
})

gsap.from(".animate_inicial_img", {
    duration: 0.9, //duração da animação
    opacity: 0,
    x: 250
})

gsap.from(".animate_inicial_artigos", {
    duration: 0.6,
    opacity: 0,
    x: -100,
    stagger: 0.2,
    delay: 1 //aguardar um segundo antes de executar essas configurações
})

gsap.from(".animate_final", {
    scrollTrigger: ".animate_final", //aciona a animação quando chegarmos a essa classe.
    duration: 0.8,
    opacity: 0,
    y: -200,
    delay: 0.5,
    stagger: 0.3
});