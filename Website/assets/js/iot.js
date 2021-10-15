
imgFile1 = new Array("img/img_house_living.png","img/img_house_bathroom.png","img/img_house_room1.png","img/img_house_room2.png","img/img_house_attic.png");
imgCom1 = new Array("LIVING","BATHROOM","ROOM-1","ROOM-2","ATTIC");
count = 0;

function roomChanger(num) {
    //切替番号
    count += num;
    //画像の枚数確認
    if (count >= imgFile1.length) count = 0; //枚数を超えるとき
    if (count < 0) count = imgFile1.length - 1; //0番目より小さいとき
    //画像出力
    document.room.src =imgFile1[count];
    //コメント出力
    document.getElementById("comment").innerHTML = imgCom1[count];
}



imgFile2 = new Array("img/img_house_s_light1.png","img/img_house_s_light2.png","img/img_house_s_ac1.png","img/img_house_s_fridge.png","img/img_house_s_ih.png","img/img_house_s_light3.png","img/img_house_s_light4.png","img/img_house_s_ac2.png","img/img_house_s_light5.png","img/img_house_s_ac3.png","img/img_house_s_light6.png");
imgCom2 = new Array("LIGHT-1","LIGHT-2","A/C-1","FRIDGE","IH COOKER","LIGHT-3","LIGHT-4","A/C-2","LIGHT-5","A/C-3","LIGHT-6");
count = 0;

function selectChanger(num) {
    //切替番号
    count += num;
    //画像の枚数確認
    if (count >= imgFile2.length) count = 0; //枚数を超えるとき
    if (count < 0) count = imgFile2.length - 1; //0番目より小さいとき
    //画像出力
    document.select.src =imgFile2[count];
    //コメント出力
    document.getElementById("comment_s").innerHTML = imgCom2[count];
}
