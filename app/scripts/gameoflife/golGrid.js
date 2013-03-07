var golGrid = function(args) {

    var height = args.height || 40;
    var width  = args.width  || 40;

    var gol_grid          = [];
    var previous_gol_grid = [];

    var cellStatus = function(x, y) {
        return (previous_gol_grid[x] && previous_gol_grid[x][y]) ? 
            previous_gol_grid[x][y] : "dead";
    };

    var neighbours = function(x, y) {
        var count = { dead : 0, alive : 0 };
        var i,j;
        for (i = -1; i < 2 ; i++) {
            for (j = -1; j < 2 ; j++) {
                if (!((i === 0 ) && (j === i))) { 
                    switch(cellStatus((x+i), (y+j))) {
                        case "dead": count.dead++; break;
                        case "alive": count.alive++; break;
                    }
                }    
            }
        }
        return count;
    };

    var cycle = function() {
        var i,j = 0;
        var locals = {};
        previous_gol_grid = [];
        for (i=0; i<gol_grid.length; i++) {
            previous_gol_grid[previous_gol_grid.length] = [];
            for (j=0; j<gol_grid[i].length; j++) {
                previous_gol_grid[i][previous_gol_grid[i].length] = gol_grid[i][j].getAttribute("class");
            }
        }

        for (i=0; i<previous_gol_grid.length; i++) {
            for (j=0; j<previous_gol_grid[i].length; j++) {
                locals = neighbours(i,j);
                switch(previous_gol_grid[i][j]) {
                    case "alive":
                        if ((locals.alive < 2) || (locals.alive > 3)) {
                            gol_grid[i][j].setAttribute("class", "dead");
                        }
                    break;
                    case "dead":
                        if (locals.alive == 3) {
                            gol_grid[i][j].setAttribute("class", "alive");
                        }
                    break;
                }
            }
        }

        counterNode.innerHTML = counter++;
    };

    this.cycle = function() {
        cycle();
    }

    this.randomize = function() {
        var i,j;
        for (i=0; i<gol_grid.length; i++) {
            for (j=0; j<gol_grid[i].length; j++) {
                gol_grid[i][j] =
                    (Math.floor((Math.random() * 10)) % 3 === 0) ? 
                "alive" : "dead"
            }
        }
    }

}




var MxLife = function() {

    this.templateString   = dojo.cache("golGrid.widget","templates/golGrid.html");

    this.height           = 20;
    this.width            = 40;
    this.runinterval      = 500;
    this.runnerNode       = null;
    this.gridNode         = null;
    this.countNode        = null;

    var hitch             = dojo.hitch;
    var root, counterNode = null;
    var gol_grid            = [];
    var previous_gol_grid           = [];
    var counter           = 0;
    var interval          = null;

    var builder           = mxui.dom;
    var height, width     = null;

    var running           = false;

    this.postCreate = function() {
        mxui.dom.disableSelection(this.domNode);
        if (mx.isIE) {
            mxui.dom.insertCss("../ui/golGrid.css");
        }
        root = builder.pre();
        this.gridNode.appendChild(root);
        counterNode = this.countNode;
        height      = this.height;
        width       = this.width;
        interval    = this.runinterval;

        var txt = null;
        var i,j = 0;
        for (i=0; i<height; i++) {
            gol_grid.push([]);
            for (j=0; j<width; j++) {
                txt = builder.span('X');
                txt.setAttribute("class", "dead");
                gol_grid[i].push(txt);
                root.appendChild(txt);
            }
            root.appendChild(builder.br());
        }
        this.connect(root, "onclick", "eventNodeClicked");
        this.loaded();
    };


    this.eventNodeClicked = function(e) {
        var node = e.originalTarget;
        node.setAttribute("class",
            (node.getAttribute("class") == "alive") ?  "dead" : "alive"
        );
    };

    this.eventNext = function(e) {
        var j,i = 0;
        if (e.target.getAttribute("cycle")) {
            i = parseInt(e.target.getAttribute("cycle"), 10);
        }
        for (j=0;j<=i; j++) { cycle(); }
    };

    var runner = function() {
        if (running) {
            cycle();
            setTimeout(arguments.callee, interval);
        }
    };

    this.eventToggleRun = function(e) {
        if (running) {
            running = false;
            this.runnerNode.innerHTML = '[Start running]';
        } else {
            this.runnerNode.innerHTML = '[Stop running]';
            running = true;
            runner();
        }
    };

    this.eventRandomize = function(e) {
    };

    this.uninitialize = function() {
        running = false;
    };

};


