const createBoard = () => {
    const size = 15;
    
    let row = 1,
        col = 1;
        
    let $div = $(`<div class="cell"><span class="sub-cell-1"></span><span class="sub-cell-2"></span><span class="sub-cell-3"></span><span class="sub-cell-4"></span></div>`);
    let $wrapper = $('<div>').addClass("wrapper");
    
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            $wrapper.append( $div.clone() )
        }
    }

    let $container = $("#container");
    $container.append($wrapper);
}

const addCircle = ($parent, colorStonePlayer) => {
    let $circle = $(`<span class="circle"></span>`).addClass(colorStonePlayer);
    $parent.append($circle);
    console.log("parent = ", $parent)
}

const nextStepPlayer2 = () => {
    let $cells = $('.cell').filter(() => $(this).find("span.circle") .length == 0);
    let randomCell = $cells[Math.floor(Math.random() * ($cells.length))];

console.log("randomCell = ", randomCell)

    addCircle($(randomCell), colorStonePlayer2);
}

createBoard();

let colorStonePlayer1 = $(".color-stones > a.active").attr("color-stone");
let colorStonePlayer2 = $(".color-stones > a:not(.active)").attr("color-stone");

$('.wrapper').on('click', '.cell', (el) => {
    let $parent = $(el.target).parent();

    if ($parent.find(".circle").length == 0) {
        addCircle($parent, colorStonePlayer1);
        nextStepPlayer2();
    }
});

$(".color-stones > a").on("click", (el) => {
    el.preventDefault();
    
    let $parent = $(el.target).parent();

    $($parent.find(".active")).removeClass("active");
    
    $(el.target).addClass("active");
})


