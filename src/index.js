module.exports = function check(str, bracketsConfig) {
  let stackArray = [];

    for( let i = 0; i < str.length; i++ ){
        for ( let brack of bracketsConfig ) {
            if( str[i] == brack[0]  && brack[0] == brack[1]
                && brack[0] == stackArray[stackArray.length - 1] ){
                stackArray.pop();
                break;
            }
            if ( str[i] == brack[0] ){
                stackArray.push( str[i] );
                break;
            }
            if( str[i] == brack[1] ){
                if( brack[0] != stackArray.pop() ){
                    return false;
                }
            }
        }
    }
    if( stackArray.length ) return false;
    return true;
}