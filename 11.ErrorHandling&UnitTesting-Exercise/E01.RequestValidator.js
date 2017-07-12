function requestValidator(requestObj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const regexURI = /^[a-zA-Z0-9.*]+$/;
    const regexMessage = /^[^<>\\&'"\r\n]*$/;

    if(requestObj.hasOwnProperty('method')){
        if(!validMethods.includes(requestObj.method)){
            throw new Error('Invalid request header: Invalid Method');
        }
    }else{
        throw new Error('Invalid request header: Invalid Method');
    }

    if(requestObj.hasOwnProperty('uri')){
        if(!requestObj.uri.match(regexURI)){
            throw new Error('Invalid request header: Invalid URI');
        }
    }else{
        throw new Error('Invalid request header: Invalid URI');
    }

    if(requestObj.hasOwnProperty('version')){
        if(!validVersion.includes(requestObj.version)){
            throw new Error('Invalid request header: Invalid Version');
        }
    }else{
        throw new Error('Invalid request header: Invalid Version');
    }

    if(requestObj.hasOwnProperty('message')){
        if(!requestObj.message.match(regexMessage) && requestObj.message !== ""){
            throw new Error('Invalid request header: Invalid Message');
        }
    }else{
        throw new Error('Invalid request header: Invalid Message');
    }

    return requestObj;
}


// requestValidator({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// });
// requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });
// requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// });

