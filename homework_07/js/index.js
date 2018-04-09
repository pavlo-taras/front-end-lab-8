let classStonePlayer1 = $(".color-stones > a.active").attr("color-stone");
let classStonePlayer2 = $(".color-stones > a:not(.active)").attr("color-stone");

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

const addCircle = ($parent, classStonePlayer) => {
    let $circle = $(`<span class="circle"></span>`).addClass(classStonePlayer);
    $parent.append($circle);
}

const nextStepPlayer2 = () => {
    let $cells = $('.cell').filter(function (index) { return $(this).find("span.circle").length == 0 });
    let randomCell = $cells[Math.floor(Math.random() * ($cells.length))];

    addCircle($(randomCell), classStonePlayer2)

    if (statusGame(returnCellsCircle(classStonePlayer2))) {
        alert("Computer win!")
    }
}

const returnCellsCircle = classStonePlayer => $('.cell').map(function() {
    if ($(this).find(`span.circle.${classStonePlayer}`).length !== 0) return $(this).index();
});


createBoard();

$('.wrapper').on('click', '.cell', (el) => {
    let $parent = $(el.target).parent();

    if ($parent.find(".circle").length == 0) {
        addCircle($parent, classStonePlayer1);
        nextStepPlayer2();

        if (statusGame(returnCellsCircle(classStonePlayer1))) {
            alert("You win!")
        }
    }
});

$(".color-stones > a").on("click", (el) => {
    el.preventDefault();
    
    let $parent = $(el.target).parent();

    $($parent.find(".active")).removeClass("active");
    
    $(el.target).addClass("active");
})

// 1 - vertical, 2 - horizontal, 3 - left diagonal (up), 4 - right diagonal (down)
var checkRow = (arr, value, method) => {
    let step = (method > 1) ? 15 : 1;
    let filtered = jQuery.grep(arr, /*.find(*/function(el) {
        return el >= value && el <= (value + step * 4 - 1); 
    });

    if (filtered.length >= 4) {
        let item = 0;

        let temp = jQuery.grep(filtered, (el2) => {
            if (el2 == (value + step * item + ((method == 1 || method == 2) ? 0 : (method == 3 ? item : - item)))) {
                item++;
                return true;
            }
        })

        return temp.length == 4;
    }

    return false;
};

var statusGame = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];

        if (checkRow(arr, val, 1) || checkRow(arr, val, 2) || checkRow(arr, val, 3) || checkRow(arr, val, 4)) return true;
    }    
    
    return false;
}
