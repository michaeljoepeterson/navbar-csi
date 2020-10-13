function App(){
    this.navbarSimp = null;
}


App.prototype.init = function(){
    console.log('test');
    var simpOptions = {
        navId:'nav-container',
        links:[
            {
                title:'Simple Nav',
                url:'#',
                //temp prop
                source:'simple',
                links:[
                    {
                        title:'sub link 1',
                        url:'#'
                    },
                    {
                        title:'sub link 2',
                        url:'#'
                    },
                    {
                        title:'sub link 3',
                        url:'#'
                    }
                ]
            },
            {
                title:'Left Animate Nav',
                url:'#',
                //temp prop
                source:'left',
                links:[
                    {
                        title:'sub link 1',
                        url:'#'
                    },
                    {
                        title:'sub link 2',
                        url:'#'
                    },
                    {
                        title:'sub link 3',
                        url:'#'
                    }
                ]
            },
            {
                title:'Fade Animate Nav',
                url:'#',
                //temp prop
                source:'fade',
                links:[
                    {
                        title:'sub link 1',
                        url:'#'
                    },
                    {
                        title:'sub link 2',
                        url:'#'
                    },
                    {
                        title:'sub link 3',
                        url:'#'
                    }
                ]
            },
            /*
            {
                title:'Large with image',
                url:'#',
                //temp prop
                source:'large',
                links:[
                    {
                        title:'sub link 1',
                        url:'#'
                    },
                    {
                        title:'sub link 2',
                        url:'#'
                    },
                    {
                        title:'sub link 3',
                        url:'#'
                    }
                ]
            },
            */
            {
                title:'no sublist',
                url:'#'
            }
        ]
    };
    this.navbarSimp = new NavbarSimple(simpOptions);
}

var app = new App();

$(app.init);