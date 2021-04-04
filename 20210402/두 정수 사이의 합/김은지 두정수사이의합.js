function solution(a, b) {
    var answer = 0;
    var c=0;
    var i=0;
    if(a>b){
            answer=b;
        for(i=1;i<=(a-b);i++){
        answer+=b+i;
    }
    }else if(a<b){
        answer=a;
        for(i=1;i<=(b-a);i++){
        answer+=a+i;
    }
    }else{
        answer=a;
    }
    
    
    return answer;
}