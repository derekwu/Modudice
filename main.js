var CELL_WIDTH = 100;
var CELL_HEIGHT = 100;
var ROWS = 5;
var COLS = 5;


//These can be retrieved without hard-coding. However, I think that adds extra complexity.
var BOARD_IMAGE_WIDTH = 512;
var BOARD_IMAGE_HEIGHT = 512;

var GAME_WIDTH = ROWS*CELL_WIDTH;
var GAME_HEIGHT = COLS*CELL_HEIGHT;

var test_board = [[1,2,3,4,5],
                  [1,2,3,4,5],
                  [1,2,3,4,5],
                  [1,2,3,4,5],
                  [5,4,3,2,1]]
function Dice() {
    /* 
    Standard dice orientation: Key is top value, Array is [back, right, front, left]
    */
    var DICE_ORIENTATION_DICT = {1:[5, 3, 2, 4],
                                 2:[1, 3, 6, 4],
                                 3:[5, 6, 1, 2],
                                 4:[5, 1, 2, 6],
                                 5:[6, 3, 1, 4],
                                 6:[5, 4, 2, 3]}
    var top;
    var bottom;
    var left;
    var right;
    var front;
    var back;
    resetDice();

    /* set 6 variables randomly, using dict*/
    function resetDice() {}

    /* these four functions will update the 6 variables appropriately */
    function rollUp() {}

    function rollDown() {}

    function rollLeft() {}

    function rollRight() {}

    /* we also need getter functions */


}

window.onload = function() {

    var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, '', { preload: preload, create: create });
    
    var board_img_dict = {'1':'board_1',
                          '2':'board_2',
                          '3':'board_3',
                          '4':'board_4',
                          '5':'board_5',
                          '6':'board_6'}
    
    
    function preload () {
        game.load.image('board_1', 'Assets/board_1.png');
        game.load.image('board_2', 'Assets/board_2.png');
        game.load.image('board_3', 'Assets/board_3.png');
        game.load.image('board_4', 'Assets/board_4.png');
        game.load.image('board_5', 'Assets/board_5.png');
        game.load.image('board_6', 'Assets/board_6.png');
    }

    function create () {
        
        this.game.board_sprites = draw_Board(test_board,board_img_dict)
    }
    
    
    //Creates a sprite for the cell at (x,y) corresponding to the given value. 
    function draw_Cell(value, locX, locY, img_dict){
        var cell = game.add.sprite(locX*CELL_WIDTH,locY*CELL_HEIGHT, img_dict[value])
        cell.scale.x = CELL_WIDTH / BOARD_IMAGE_WIDTH
        cell.scale.y = CELL_HEIGHT / BOARD_IMAGE_HEIGHT
        return cell
    }
    
    //Creates the whole board given an of the values.
    //board_array: 2d array.
    function draw_Board(board_array, img_dict){
        sprites_array = []
        board_array.forEach(function(row, col_index){
            sprite_row = []
            row.forEach(function(value, row_index){
                sprite_row.push(draw_Cell(value, row_index, col_index, img_dict))
            })
            sprites_array.push(sprite_row)
        })
        return sprites_array
    }
    
    //Replaces the image of a cell after the value changes.
    //Does not create a new sprite, therefore should save resources.
    function update_Cell(value, locX, locY, img_dict){
        cell = game.board_sprites[locX][locY]
        cell.loadTexture(img_dict[value])
    }

};