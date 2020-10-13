function NavbarSimple(options){
    this.navId = null;
    this.navContainer = null;
    this.sources = {
        simple:'nav-simple',
        fade:'nav-fade',
        large:'nav-large',
        left:'nav-left'
    }
    //link.links for child
    this.links = [];
    this.constructor(options);
}

NavbarSimple.prototype.constructor = function(options){
    try{
        this.navId = options.navId;
        this.navContainer = $('#' + this.navId);
        this.links = options.links ? options.links : [];
        console.log(this.navContainer);
        this.initNav();
    }
    catch(e){
        console.log('error initializing simple nav: ',e);
    }
}

NavbarSimple.prototype.initNav = function(){
    try{
        this.emptyNav();
        var template = this.buildTemplate(); 
        var nav = $(this.navContainer[0])[0];
        console.log(template);
        var navContent = $(template);
        $(nav).append(navContent);
    }
    catch(e){
        console.log('error initializing simple nav: ',e);
    }
}

NavbarSimple.prototype.emptyNav = function(){
    try{
        var nav = $(this.navContainer[0])[0];
        $(nav).empty();
    }
    catch(e){
        console.log('error initializing simple nav: ',e);
    }
}

NavbarSimple.prototype.buildTemplate = function(){
    try{
        var template = '<ul>'; 
        for(var i = 0;i < this.links.length;i++){
            var link = this.links[i];
            var className = this.sources[link.source] ? this.sources[link.source] : 'nav-link';
            if(link.links){
                var li = '<li class="'+ className +'"><a href=' + link.url + '>' + link.title + '</a></li><ul>';

                for(var k = 0;k < link.links.length;k++){
                    let sublink = link.links[k];
                    li += '<li>' + sublink.title + '</li>';
                }
                li += '</ul>';
                template += li;
            }
            else{
                var li = '<li class="'+ className +'"><a href=' + link.url + '>' + link.title + '</a></li>';
                template += li;
            }

        }
        template += '</ul>';
        return template;
    }
    catch(e){
        console.log('error initializing simple nav: ',e);
    }
}