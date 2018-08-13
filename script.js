// $('.top_menu div').on('click', function() {
//     $(this).find('svg').find('path').toggleClass('activated_top_button');
//     console.log('pelo menos foi')
// })


// var topIcons = document.querySelectorAll('.top_menu div svg')

// topIcons.addEventListener("click", function() {
//     console.log('NOKSADMKSDKAMKP')
// })


// FULLSCREEN REQUEST

function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;
  
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  
    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
    }
    else {
      cancelFullScreen.call(doc);
    }
  }

var windowWidth = document.body.clientWidth;

    console.log('aiaiai')
    document.querySelector('#PROFILE svg').classList.add('activated_top_button')



// SUBWINDOW CHANGE
var friendsIcon = document.querySelector('#friends')
var msgIcon = document.querySelector('#messages')
var combinationsIcon = document.querySelector('#combinations')

// BOTÕES SUPERIORES
var profileButton = document.querySelector('#PROFILE')
var playmatchButton = document.querySelector('#PLAYMATCH')
var partyButton = document.querySelector('#PARTY')
var connectionsButton = document.querySelector('#CONNECTIONS')

// ARRAY DOS BOTÕES
var topButtons = [profileButton, playmatchButton, partyButton, connectionsButton]

// TAMANHO DA JANELA
var screenSize = window.innerWidth;

//MAIN TAG
var mainTag = document.querySelector('main')

function topButtonClick() {
    if(this == profileButton) {
        this.querySelector('svg').classList.add('activated_top_button')

        playmatchButton.querySelector('svg').classList.remove('activated_top_button')
        partyButton.querySelector('svg').classList.remove('activated_top_button')
        connectionsButton.querySelector('svg').classList.remove('activated_top_button')

        mainTag.style.transform = "translateX(0vw)"
    }

    else if(this == playmatchButton) {
        this.querySelector('svg').classList.add('activated_top_button')

        profileButton.querySelector('svg').classList.remove('activated_top_button')
        partyButton.querySelector('svg').classList.remove('activated_top_button')
        connectionsButton.querySelector('svg').classList.remove('activated_top_button')
        profile_window.classList.remove('show_hidden_profile')
        
        mainTag.style.transform = "translateX(-100vw)"
    }

    else if(this == partyButton) {
        this.querySelector('svg').classList.add('activated_top_button')

        profileButton.querySelector('svg').classList.remove('activated_top_button')
        playmatchButton.querySelector('svg').classList.remove('activated_top_button')
        connectionsButton.querySelector('svg').classList.remove('activated_top_button')

        mainTag.style.transform = "translateX(-200vw)"
        
    }

    else if(this == connectionsButton) {
        this.querySelector('svg').classList.add('activated_top_button')

        profileButton.querySelector('svg').classList.remove('activated_top_button')
        partyButton.querySelector('svg').classList.remove('activated_top_button')
        playmatchButton.querySelector('svg').classList.remove('activated_top_button')

        
        mainTag.style.transform = "translateX(-300vw)"
    }
}

topButtons[0].addEventListener("click", topButtonClick);
topButtons[1].addEventListener("click", topButtonClick);
topButtons[2].addEventListener("click", topButtonClick);
topButtons[3].addEventListener("click", topButtonClick);













// // FILA DE FOTOS NO PERFIL DE TERCEIROS
// let filaFotos = document.querySelector('.photo_line')
// let filaFotosArray = document.querySelectorAll('.photo_line img')
// let fotoContador = 0;

// let fotoPosicao = filaFotosArray[fotoContador]

// function moverFilaFotos() {

//     fotoContador++;
//     console.log(fotoContador);

//     switch(fotoContador) {
//         case(1):
//             filaFotos.style.transform="translateX(-90vw)";
//             break;
//         case(2):
//             filaFotos.style.transform="translateX(-180vw)";
//             break;
//         case(3):
//             filaFotos.style.transform="translateX(-270vw)";
//             break;
//         case(4):
//             filaFotos.style.transform="translateX(0vw)";
//             fotoContador = 0;
//             break;

//     }

// }

// filaFotos.addEventListener('click', moverFilaFotos)











// LIKE E UNLIKE
var likeButton = document.querySelector('.like_container')
var unlikeButton = document.querySelector('.unlike_container')

likeButton.addEventListener('click', function() {
    if(!this.querySelector('img').classList.contains('like_container_move')) {
        this.querySelector('img').classList.add('like_container_move');
    } else {
        this.querySelector('img').classList.remove('like_container_move');
    }
})

unlikeButton.addEventListener('click', function() {

    if(!this.querySelector('img').classList.contains('unlike_container_move')) {
        this.querySelector('img').classList.add('unlike_container_move');
    } else {
        this.querySelector('img').classList.remove('unlike_container_move');
    }
})















// SEE PROFILE BUTTON

let see_profile = document.querySelector('.see_more')
let profile_window = document.querySelector('.hidden_profile')
let voltar_playmatch = document.querySelector('.return')

see_profile.addEventListener('click', function() {
    profile_window.classList.add('show_hidden_profile')
})

voltar_playmatch.addEventListener('click', function() {
    profile_window.classList.remove('show_hidden_profile')
})













// UNLIKE/LIKE CLICK ANIMATIONS

let playMiddle = document.querySelector('.playmatch_middle')
let compatibility = document.querySelector('.compatibility')
let compatibilityLevel = document.querySelector('.level_container')
let compatibilityH2 = document.querySelector('.compatibility h2')

function unlikePressed() {

    if(!playMiddle.classList.contains('playmatch_middle_unlike_animation')) {
        playMiddle.classList.add('playmatch_middle_unlike_animation')
        compatibility.classList.add('compatibility_unlike_animation')
        compatibilityLevel.classList.add('level_container_unlike_animation')
        compatibilityH2.classList.add('compatibility_h2_unlike_animation')
    } else {
        playMiddle.classList.remove('playmatch_middle_unlike_animation')
        compatibility.classList.remove('compatibility_unlike_animation')
        compatibilityLevel.classList.remove('level_container_unlike_animation')
        compatibilityH2.classList.remove('compatibility_h2_unlike_animation')
    }

}

unlikeButton.addEventListener('click', unlikePressed)
















// CLICK OPTIONS - CONNECTIONS

let clickOptions = document.querySelectorAll('.friends_container article')
let escapeArea = document.querySelector('.around_escape')

for(subclickOptions in clickOptions) {
    clickOptions[subclickOptions].addEventListener('click', function() {
        if(!this.querySelector('.click_options').classList.contains('click_option_appear')) {
            this.querySelector('.click_options').classList.add('click_option_appear')
            escapeArea.classList.add('around_escape_appear')
        } else {
            this.querySelector('.click_options').classList.remove('click_option_appear')
            escapeArea.classList.remove('around_escape_appear')
        }
    })
}

