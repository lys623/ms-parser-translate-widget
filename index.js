var buildWidget = require('./lib/buildWidget.js');
var jdf = require('./lib/jdf.js');
module.exports = function (content, file, options) {
    global.baseUrl=file;
    global.cssHash=false;
    var settings=fis.config.get('settings')||{};
    global.settings=settings;
    if(!settings){
        console.log('fis3 warnning : please write fis.config.set("settings",{}) in fis-conf.js file');
        return ;
    }
    jdf.currentDir=file.fullname.replace(file.subpath,'');
    //var isProd=process.argv.indexOf('prod')>-1;
    var type;
    type='build'
    var result=false;
    buildWidget.init(file.fullname,content,type,function(data){
        result=data.tpl;

        //return result;
    })
    return result;
};