$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let yourAP = 100
let mushHP = 100


function onReady() {
    
    // Attack butotn listener/handlers
    $('.attack-btn').on('click', handleAttack);

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    // call render

}
// Arcane Button click function
function handleAttack() {
    if ($(this).hasClass('arcane-scepter')) {
        yourAP -= 12;
        mushHP -= 14;
    } else if ($(this).hasClass('entangle')) {
        yourAP -= 23;
        mushHP -= 9;
    } else if ($(this).hasClass('dragon-blade')) {
        yourAP -= 38;
        mushHP -= 47;
    } else if ($(this).hasClass('star-fire')) {
        yourAP -= 33;
        mushHP -= 25;
    } 

    // render new AP and HP
    render ();
}

function render() {
    // check to see if AP or HP are below 0
    if (mushHP <= 0) {
        $('.ap-text').text(`
        0 AP
    `);
        $('.freaky-fungus').addClass('dead').removeClass('walk');
        $('.attack-btn').attr('disabled', true);
    } else if (mushHP > 0) {
        $('.hp-text').text(`
        ${mushHP} HP
    `)
    } if (yourAP <= 0) {
        $('.ap-text').text(`
        0 AP
    `);
        $('.freaky-fungus').addClass('jump').removeClass('walk');
        $('.attack-btn').attr('disabled', true);
    } else if (yourAP > 0) {
        $('.ap-text').text(`
        ${yourAP} AP
    `)
    }

}