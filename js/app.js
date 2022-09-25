window.addEventListener('load',()=>{
    let browserAgent=window.navigator.userAgent
    switch (true) {
        case /edg/gi.test(browserAgent):{
            let target=document.querySelector('.edge')
            target.style.opacity='100%'
        }
        break
        case /firefox/gi.test(browserAgent):{
            let target=document.querySelector('.firefox')
            target.style.opacity='100%'

        }
        break
        case /opr/gi.test(browserAgent):{
            let target=document.querySelector('.opera')
            target.style.opacity='100%'

        }
        break
        case /chrome/gi.test(browserAgent):{
            let target=document.querySelector('.chrome')
            target.style.opacity='100%'

        }
        break
        case /safari/gi.test(browserAgent):{
            let target=document.querySelector('.chrome')
            target.style.opacity='100%'

        }
        break

    }
})
