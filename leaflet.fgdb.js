L.FileGDB =L.GeoJSON.extend({
    initialize: function (file, options) {
        if(typeof cw !== 'undefined'){
            this.worker = cw(function(data,cb){
                importScripts('fgdb.js');
	            fgdb(data).then(cb);
            });
        }
        L.GeoJSON.prototype.initialize.call(this,{features:[]},options);
        this.loading = false;
        this.addFileData(file);
    },
    addFileData:function(file){
        var self = this;
        self.loading = true;
        self.fire('data:loading');
        if(typeof file !== 'string' && !('byteLength' in file)){
            return self.addData(file);
        }
        function after(data){
            for(var key in data){
                self.addData(data[key]);
            }
            self.fire('data:loaded');
            self.loading = false;
        }
        function onError(a){
            console.error(a);
            self.fire('data:loaded');
            self.loading = false;
        }
        if(self.worker){
            self.worker.data((typeof file === 'string')?cw.makeUrl(file):file).then(after,onError);
        }else{
            fgdb(file).then(after,onError);
        }
        return this;
    }
});

L.fileGDB= function(a,b){
    return new L.FileGDB(a,b);
}