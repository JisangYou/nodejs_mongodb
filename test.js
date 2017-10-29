var mongo = require("mongodb").MongoClient;
var dbname = "bbsdb";
var dburl = "mongodb://localhost:27017/"+dbname;
var table = "bbs";

var users = ["aaa","hong","go","michael","jordan","curry","zico","gdragon","dokki","young-b"];

var content="지난 6일 서울 한 유명 식당 대표가 가수 겸 배우 최시원씨의 반려견에게 물린 뒤 사망하면서 반려견 관리에 대한 문제가 화두로 떠오르고 있다. 이 사고를 계기로 맹견 사고 방지를 위한 입법이 공론화됐다.";
    content += "그렇다면 목줄을 제대로 하지 않은 반려동물이 다른 반려동물을 물어 다치게 하거나 죽였을 때는 어떤 처벌을 받게 될까. 이 경우 반려동물이 사람을 공격했을 때와 달리 형사처벌조차 어려운 실정이다. ";
    content += "이른바 '반려동물 1000만 시대'에 반려동물이 사람을 공격하는 일뿐 아니라 반려동물끼리 공격을 하는 경우가 늘어나고 있는 만큼 보다 현실적인 법률 제정이 필요하다는 지적이 나온다. ";
    content += "지난 1일 대구 수성구 범어동 한 공원에서 목줄을 하지 않은 풍산개가 푸들을 문 사건이 일어났다. 24일 소설네트워크서비스(SNS) 스마트폰 앱 인스타그램에 한 네티즌이 '저와 저의 반려견 푸들 루이가 뒤쪽에서 갑자기 나타난 풍산개에게 무자비하게 공격을 당했다'고 했다. 풍산개는 무게가 35~40㎏로 추정되는 크기였다. ";
var len = content.length;

function randomContent(){
    var start = Math.floor((Math.random() * (len-51))); // 0 ~ 49까지의 정수
    var end = start + 50; // 50 ~ 100
    
    return content.substring(start,end);
}

mongo.connect(dburl, function(error, db){
    // 배열 선언
    for(i=0; i<100; i++){
        var array = [];
        for(j=0; j<1000; j++){
            var bbs = {
                title : randomContent(),    // 랜덤한 텍스트를 조합해서 입력
                content : "내용입니다",
                user_id : users[j%10],  // 10개를 미리 정해놓고 random 입력
                date : new Date()+""      
            };
            array[j] = bbs;
        }
        // 
        db.collection(table).insertMany(array,function(error,inserted){
            if(error){

            }else{
                console.log(content);
            }
        });
    }
});