
function timN() {
    var content1= document.getElementById('txtNotify')
    var sum = 0;
    var n= 0;
    while (sum<10000) {
        n++;
        sum +=n;
    }
    
    content1.innerHTML = "so nho nhat : " + n;
    
}


function tinhTong() {
    var n = document.getElementById('soN2').value;
    // var x =  document.getElementById('soX2').value;
    var content2= document.getElementById('txtNotify2')
    var sum =0;
    for (let i = 0; i <= n; i++) {
        sum =sum +  5^i;
        
     } 
     content2.innerHTML = "tổng dãy số: " + sum;
}


function tinhGiaiThua() {
    var content3= document.getElementById('txtNotify3')
    var n = document.getElementById("so").value ;
    var S= 1;
    for (let i = 1; i <= n; i++) {
        S *=i;
       
    }  content3.innerHTML =" giai thừa tính được: " + S;
     
    
}

function taoDiv() {
for (let i = 1; i <= 10; i++) {
    
if(i%2==0){
    var html = '<div style="background:red; margin: 5px; padding:5px; color:#FFF">'+"a"+'</div>';
    document.getElementById('result').insertAdjacentHTML('afterend', html);
} else{
    var html = '<div style="background:blue; margin: 5px; padding:5px; color:#FFF">'+"a"+'</div>';
    document.getElementById('result').insertAdjacentHTML('afterend', html);
}
}    
}