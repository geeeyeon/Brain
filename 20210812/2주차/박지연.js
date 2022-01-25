function solution(scores) {
    let answer = '';
    let scoreArr = [];
    for(let i=0; i<scores.length; i++){
        let tmpArr=[];
        for(let j=0; j<scores.length; j++){
            tmpArr.push(scores[j][i]);
        }
        scoreArr[i] = tmpArr;
    }   
    
    scoreArr.map((val,idx)=>{
        let sum=0;
        let count = val.length;   

        if(val[idx] === Math.max(...val) || val[idx] === Math.min(...val)){
            count -- ;
        }else{
            console.log('--->',val[idx]);
            sum+=val[idx];
        }
 
        
        // console.log(sum,count)
        
    })
    // console.log(scoreArr)
    return answer;
}

solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]])