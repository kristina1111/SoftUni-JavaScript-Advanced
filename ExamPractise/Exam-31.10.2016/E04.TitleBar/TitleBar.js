class TitleBar{
    constructor(title){
        this.navigation = '';
        this.header = title;
    }
    get navigation(){
        return this._navigation;
    }
    set navigation(empty){
        this._navigation = $('<nav>').addClass('menu');
    }
    appendTo(selector){
        $(selector).prepend(
            this.header
        )
    }
    addLink(href, name){
        $(this.navigation).append(
            $('<a>')
                .addClass('menu-link')
                .attr('href', href)
                .text(name)
        );
    }

    get header(){
        return this._header;
    }
    set header(title){
        let navigation = this.navigation;
        this._header = $('<header>').addClass('header')
            .append(
                $('<div>').addClass('header-row')
                    .append(
                        $('<a>')
                            .addClass('button')
                            .html('&#9776;')
                            .on('click', function (event) {
                                event.preventDefault();
                                $('.drawer').toggle();
                            })
                    )
                    .append(
                        $('<span>').addClass('title').text(title)
                    )
            )
            .append(
                $('<div>').addClass('drawer').css({display: 'none'})
                    .append(
                        navigation
                    )
            );
    }
}

let header = new TitleBar('Title Bar Problem');
header.addLink('/', 'Home');
header.addLink('about', 'About');
header.addLink('results', 'Results');
header.addLink('faq', 'FAQ');
header.appendTo('#container');