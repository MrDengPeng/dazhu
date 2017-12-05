export function callNative(funcName, args){
        args = args || [];
        if( /iPhone/.test(navigator.userAgent) ){
            var url = "ss:"+funcName;
            if(args){
                url += "/";
                url += JSON.stringify(args);
            }
            location.href = url;
        }else{
            window.native[funcName](JSON.stringify(args));

        }
    }