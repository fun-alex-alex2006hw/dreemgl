//Pure JS based composition
define.class('$server/composition', function(require, $server$, fileio, dataset, $ui$, screen, $widgets$, docprinter){
//Special composition that generates JSDuck-style documentation and writes into ./docs/.classdoc

    define.class(this, 'fileio', function($server$, fileio){
        var path = require('path')
        var fs = require('fs')
        this.name = 'fileio'

        function readRecurDir(base, inname, ignoreset){
            var local = path.join(base, inname)
            var dir = fs.readdirSync(local)
            var out = {name:inname, collapsed:1, children:[]}
            for(var i = 0; i < dir.length;i++){
                var name = dir[i]
                var mypath = path.join(local, name)
                if(ignoreset){
                    for(var j = 0; j < ignoreset.length; j++){
                        var item = ignoreset[j]
                        if(typeof item === 'string'){
                            if(mypath.indexOf(item) !== -1)  break
                        }
                        else{
                            if(mypath.match(item)) break
                        }
                    }
                    if(j < ignoreset.length) continue
                }
                var stat = fs.statSync(mypath)
                if(stat.isDirectory()){
                    out.children.push(readRecurDir(local, name, ignoreset))
                }
                else{
                    out.children.push({name:name, size:stat.size})
                }
            }
            return out
        }

        // recursively read all directories starting from a base path

        this.readAllPaths = function(ignoreset // files and directories to ignore while recursively expanding
        ){
            // lets read all paths.
            // lets read the directory and return it
            var root = {collapsed:0, children:[]}

            if(ignoreset) ignoreset = ignoreset.map(function(value){
                if(value.indexOf('@') == 0) return new RegExp(value.slice(1))
                return value
            })

            for(var key in define.paths){
                if(ignoreset.indexOf(key) !== -1) continue
                var ret = readRecurDir(define.expandVariables(define['$'+key]), '', ignoreset)
                ret.name = key
                root.children.push(ret)
            }
            return root
        }

        this.writeToPath = function(topath, data) {
            var fullpath = define.expandVariables('$root/docs/.classdoc/'+topath);

            function ensureDirectoryExistence(filePath) {
                var dirname = path.dirname(filePath);
                if (fs.existsSync(dirname)) {
                    return true;
                }
                ensureDirectoryExistence(dirname);
                fs.mkdirSync(dirname);
            }

            console.log('write to path', fullpath)

            ensureDirectoryExistence(fullpath)

            fs.writeFile(fullpath, data)

        }
    })

    this.render = function(){
        return [
            this.fileio(),
            screen({
                    init:function(){
                        // lets load the entire directory structure
                        this.rpc.fileio.readAllPaths(['resources','server.js','resources','cache','@/\\.','.git', '.gitignore']).then(function(result){
                            var filetree = this.find('filetree')
                            var tree = result.value
                            function wlk(obj, paths){
                                if (!paths) {
                                    paths = [];
                                }
                                if (!obj.parent) {
                                    obj.parent = {name:''}
                                }
                                var fullname = obj.name || '';
                                var p = obj.parent;
                                while (p) {
                                    if (p.name) {
                                        fullname = p.name + '/' + fullname;
                                    }
                                    p = p.parent
                                }
                                if (fullname.endsWith('.js') && fullname.indexOf('node_modules') < 0 && fullname.indexOf('docs/api') < 0) {
                                    paths.push(fullname)
                                }

                                if (obj.children) {
                                    for (var i=0; i<obj.children.length; i++) {
                                        var child = obj.children[i];
                                        child.parent = obj;
                                        wlk(child, paths);
                                    }
                                }

                                return paths;
                            }
                            var extracted = wlk(tree);

                            function fetch(paths) {
                                var path = paths.pop();
                                console.log('Fetch Path:', path)
                                require.async('$' + path).then(function(module){
                                    var rendered = this.find('docs').renderToJSDuck(module);
                                    this.rpc.fileio.writeToPath(path, rendered).then(function(){
                                        console.log('Write complete:', path)
                                    });
                                }.bind(this), function(err) {
                                    console.log('Write Fail?', path, ":", err);
                                }.bind(this))
                                if (paths.length) {
                                    setTimeout(function(){
                                        fetch.bind(this)(paths)
                                    }.bind(this), 50)
                                }
                            }

                            extracted = extracted.filter(function(arg){ return arg.indexOf('example') < 0 }).sort();
                            try {
                                fetch.bind(this)(extracted)
                            } catch (err) {
                                console.log('Uncaught exception:', err)
                            }

                        }.bind(this))

                    }},
                docprinter({name:'docs'})
            )
        ]}
})