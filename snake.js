//全局变量
var map_target = document.querySelector("#map");
console.dir(map_target);
var snakeX = Math.floor(Math.random()*10);
var snakeY = Math.floor(Math.random()*18);
var snakeArray = [{x:snakeX,y:snakeY}];
var arrow = "ArrowRight";

//产生随机食物
function showFood(){
    var foodX = Math.floor(Math.random()*10);
    var foodY = Math.floor(Math.random()*18);
    var food = map_target.children[foodX].children[foodY];
    food.className = "food";
    console.log(map_target.querySelectorAll(".food"));
}

//生成随机位置的蛇
snakeArray.forEach(function(item, index) {
    // 随机格子元素，表示蛇的位置，同上
    var snakeElement = map_target.children[item.x].children[item.y];
    // 生成蛇 - 数组的第一个元素是蛇头
    if (index === 0) {
        snakeElement.className = "snake snake-head";
    } else {
        snakeElement.className = "snake snake-body";
    }
});

//监听键盘方向
document.addEventListener('keydown',function(event){
   arrow = event.key;
   moveSnake();

});

//吃到食物后
// function eatFood(){
//     //判断蛇是否吃到食物
//     if(map_target.querySelectorAll(".food").length == 0){
//         showFood();
//         snakeTail = snakeArray[snakeArray.length-1]
//         snakeArray.push({
//             x: snakeTail.x - 1,
//             y: snakeTail.y
//         }     
//         );

//     }
// }

//蛇上下左右移动
function moveSnake(){
    var snakeHead = snakeArray[0];
    // 如果按的是 上
    if (arrow === "ArrowUp") {
        var snakeArray2 = [];
        snakeArray.forEach(function(item,index){
            if(index == 0){
                snakeArray2.push({
                    x:snakeArray[index].x - 1,
                    y:snakeArray[index].y
                });
            }else{
                snakeArray2.push({
                    //每块更新位置为前一块的位置
                    x:snakeArray[index - 1].x,
                    y:snakeArray[index - 1].y
                });
            }
        });
        snakeArray = snakeArray2;

        //如果蛇吃到食物，增加一块
        if(map_target.querySelectorAll(".food").length == 0){
            snakeTail = snakeArray[snakeArray.length-1];
            snakeArray.push({
                x: snakeTail.x - 1,
                y: snakeTail.y
            });
            showFood();
        }
    } 
    // 如果按的是 下
    if (arrow === "ArrowDown") {
        // snakeHead.x += 1;
        var snakeArray2 = [];
        snakeArray.forEach(function(item,index){
            if(index == 0){
                snakeArray2.push({
                    x:snakeArray[index].x + 1,
                    y:snakeArray[index].y
                });
            }else{
                snakeArray2.push({
                    //每块更新位置为前一块的位置
                    x:snakeArray[index - 1].x,
                    y:snakeArray[index - 1].y
                });
            }
        });
        snakeArray = snakeArray2;

        if(map_target.querySelectorAll(".food").length == 0){
            snakeTail = snakeArray[snakeArray.length-1];
            snakeArray.push({
                x: snakeTail.x + 1,
                y: snakeTail.y
            });
            showFood();
        }
    }
    // 如果按的是 左
    if (arrow === "ArrowLeft") {
        // snakeHead.y -= 1;
        var snakeArray2 = [];
        snakeArray.forEach(function(item,index){
            if(index == 0){
                snakeArray2.push({
                    x:snakeArray[index].x,
                    y:snakeArray[index].y - 1
                });
            }else{
                snakeArray2.push({
                    //每块更新位置为前一块的位置
                    x:snakeArray[index - 1].x,
                    y:snakeArray[index - 1].y
                });
            }
        });
        snakeArray = snakeArray2;
        if(map_target.querySelectorAll(".food").length == 0){
            snakeTail = snakeArray[snakeArray.length-1];
            snakeArray.push({
                x: snakeTail.x,
                y: snakeTail.y + 1
            });
            showFood();
        }      
    }
    // 如果按的是 右
    if (arrow === "ArrowRight") {
        // snakeHead.y += 1;
        var snakeArray2 = [];
        snakeArray.forEach(function(item,index){
            if(index == 0){
                snakeArray2.push({
                    x:snakeArray[index].x,
                    y:snakeArray[index].y + 1
                });
            }else{
                snakeArray2.push({
                    //每块更新位置为前一块的位置
                    x:snakeArray[index - 1].x,
                    y:snakeArray[index - 1].y
                });
            }
        });
        snakeArray = snakeArray2;
        if(map_target.querySelectorAll(".food").length == 0){
            snakeTail = snakeArray[snakeArray.length-1];
            snakeArray.push({
                x: snakeTail.x,
                y: snakeTail.y - 1
            });
            showFood();
        }
    }
    //把之前的蛇占的位置className改为“span”,之前的蛇就消失了
    map_target.querySelectorAll(".snake").forEach(function(item){
        item.className = "span";
    });

    //用新的坐标点生成蛇
    snakeArray.forEach(function(item, index) {
        // 随机格子元素，表示蛇的位置，同上
        var snakeElement = map_target.children[item.x].children[item.y];
        // 生成蛇 - 数组的第一个元素是蛇头
        if (index === 0) {
            snakeElement.className = "snake snake-head";
        } else {
            snakeElement.className = "snake snake-body";
        }
    });
}

window.onload=function(){
    showFood();
    // setInterval(moveSnake,400);

}



