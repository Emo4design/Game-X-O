let title = document.querySelector('.title');
let turn='X';
let boxes=[];
function end(num1,num2,num3){
    title.innerHTML= boxes[num1] +" is the winner";
    document.getElementById('item-'+num1).style.backgroundColor='#000';
    document.getElementById('item-'+num2).style.backgroundColor='#000';
    document.getElementById('item-'+num3).style.backgroundColor='#000';
    setInterval(function(){title.innerHTML+="."},400);
    setTimeout(function(){location.reload()},1400);
};

function win(){



    for( i=1 ; i<10 ; i++)
{
    boxes[i] = document.getElementById('item-'+i).innerHTML;
};


    
if (boxes[1] == boxes[2] && boxes[2] == boxes[3] && boxes[1]!=''){

    end(1,2,3);
    }

else if (boxes[4] == boxes[5] && boxes[5] == boxes[6] && boxes[4]!=''){
    end(4,5,6);
    }

else if (boxes[7] == boxes[8] && boxes[8] == boxes[9] && boxes[9]!=''){
    end(7,8,9);
    }

else if (boxes[1] == boxes[4] && boxes[4] == boxes[7] && boxes[1]!=''){
    end(1,4,7);
    }  

else if (boxes[2] == boxes[5] && boxes[5] == boxes[8] && boxes[2]!=''){
    end(2,5,8);
    }

else if (boxes[3] == boxes[6] && boxes[6] == boxes[9] && boxes[3]!=''){
    end(3,6,9);
    }

else if (boxes[1] == boxes[5] && boxes[5] == boxes[9] && boxes[1]!=''){
    end(1,5,9);
    }

else if (boxes[3] == boxes[5] && boxes[5] == boxes[7] && boxes[3]!=''){
    end(3,5,7);
    
    }
    else if(boxes[1]!='' && boxes[2]!='' && boxes[3]!='' && boxes[4]!='' && boxes[5]!='' && boxes[6]!='' && boxes[7]!='' && boxes[8]!='' && boxes[9]!=''){
        title.innerHTML=" No Body win ";
        setInterval(function(){title.innerHTML+="."},1000);
        setTimeout(function(){location.reload()},4000);
    }

};



function game(id){

let box = document.getElementById(id);

    if(turn === 'X' && box.innerHTML=='')
    {
        box.innerHTML='X';
        turn='O';
        title.innerHTML='O';
    }
    else if(turn ==='O' && box.innerHTML=='')
    {
        box.innerHTML='O';
        turn='X';
        title.innerHTML='X';
        
    }
    win();
};
