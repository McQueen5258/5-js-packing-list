$(".to-pack-button").click(function(){
    let Goods = $(".to-pack-input").val();
    $(".packing-list").append("<li>"+Goods)
});

$(".renWu").click(function(){
    let toDo = $(".newTODO").val();
    $(".toDoList").append("<li>"+toDo)
});
