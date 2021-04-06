var file = $("#file").val();
    var strFileName=file.replace(/^.+?\([^\]+?)(.[^.\]*?)?$/gi,"$1");  //正则表达式获取文件名，不带后缀
    var FileExt=file.replace(/.+./,"");   //正则表达式获取后缀


