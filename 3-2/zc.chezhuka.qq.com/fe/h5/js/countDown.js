
function countDown(time, id,status){
    time = time.replace(/-/g,'\/');
    var endTime= new Date(time); //截止时间
    // alert('endTime-'+ endTime);
    // alert('endTimegettime-'+ endTime.getTime());
    var nowTime = new Date();
    // alert('nowTime-'+ nowTime);
    var lastTime =Math.floor((endTime.getTime() - nowTime.getTime())/1000);
    // alert('lastTime-'+ lastTime);
    var t = function(){
        lastTime = lastTime -1;
        if(lastTime<1){
            clearInterval(timer);
            if(status == 0){
                $(document.getElementById(id)).html("活动即将开始");
            }else if(status == 1){
                $(document.getElementById(id)).html("报名即将结束");
            }
        }else{
            var d=Math.floor(lastTime/60/60/24);
            var h=Math.floor(lastTime/60/60%24);
            var m=Math.floor(lastTime/60%60);
            var s=Math.floor(lastTime%60);

            $(document.getElementById(id).getElementsByTagName("span")[0]).html(d);
            $(document.getElementById(id).getElementsByTagName("span")[1]).html(h);
            $(document.getElementById(id).getElementsByTagName("span")[2]).html(m);
            $(document.getElementById(id).getElementsByTagName("span")[3]).html(s);
        }


    }
   var timer =  setInterval(t,1000)
}

