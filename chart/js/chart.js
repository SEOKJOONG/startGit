
function pieChart(data){
    var data = JSON.parse(data);
    var color = JSON.parse('["rgb(200, 255, 150)","rgb(20, 255, 0)","rgb(200, 25, 10)","rgb(200, 0, 150)","rgb(200, 255, 0)","rgb(0, 255, 150)"]');
    var start = 0;
    var end = 0;
    var sum = 0;

    var s = 0;

    var cv= document.getElementById("myCanvas");
    var ctx = cv.getContext("2d");


    for(var i in data){
        sum += data[i]["value"];
    }

    console.log(sum);

    for(var i in data){


        value = data[i]["value"];
        end += value/sum*360;
        console.log("start-"+start);

        console.log("end-"+end);

        ctx.beginPath();
        
        ctx.moveTo(300, 300);
        ctx.fillStyle = color[i];

        ctx.arc(300,300,200,(Math.PI/180)*start, (Math.PI/180)*end,false);
        ctx.closePath();
        ctx.fill();
        
        ctx.fillStyle = "black";

        ctx.fillText(data[i]["name"],300-start,300+end);

        start = end;
    }
        

    
    

}
