function recursive(max){
    if(max >= 12427 ) return;

    max++;
    console.log(max);
    recursive(max);
}
recursive(0);