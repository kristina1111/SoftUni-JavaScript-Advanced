let bugTracker = (function () {
    let bugs = [];
    let id = 0;
    let selector = undefined;

    function report(author, description, reproducible, severity) {
        bugs[id] = {
            ID: id,
            author: author,
            description: description,
            reproducible: reproducible,
            severity: severity,
            status: 'open'
        };
        id++;
        if(selector){
            $(selector).html("");
            bugs.forEach(e=>{
                $(selector).append(buildHTML(e));
            })
        }
    }

    function setStatus(id, newStatus) {
        bugs[id].status = newStatus;
        if(selector){
            $(selector).html("");
            bugs.forEach(e=>{
                $(selector).append(buildHTML(e));
            })
        }
    }

    function remove(id) {
        bugs = bugs.filter(e=> e.ID !== id);
        if(selector){
            $(selector).html("");
            bugs.forEach(e=>{
                $(selector).append(buildHTML(e));
            })
        }
    }

    function sort(method) {
        bugs = bugs.sort((a, b)=> {
            switch (method) {
                case 'author':
                    return a.author.localeCompare(b.author);
                case 'severity':
                    return a.severity - b.severity;
                case 'id':
                    return a.ID - b.ID;
            }
        });
        if(selector){
            $(selector).html("");
            bugs.forEach(e=>{
                $(selector).append(buildHTML(e));
            })
        }
    }

    function output (sel) {
        selector = sel;
    }
    function show() {
        return bugs;
    }

    function buildHTML (bug){
        return $('<div>').attr('id', `report_${bug.ID}`).addClass('report')
            .append(
                $('<div>').addClass('body')
                    .append($('<p>').text(bug.description))
            )
            .append(
                $('<div>').addClass('title')
                    .append(
                        $('<span>').addClass('author').text(`Submitted by: ${bug.author}`)
                    )
                    .append(
                        $('<span>').addClass('status').text(`${bug.status} | ${bug.severity}`)
                    )
            )
    }

    return {
        report,
        setStatus,
        remove,
        sort,
        output,
        // show
    }

})();

// bugTracker.report('krisi', 'some bugs', false, 12);
// bugTracker.report('redi', 'some more more bugs', true, 9);
// bugTracker.report('megi', 'more bugs', true, 5);
// bugTracker.report('krasi', 'bugs bugs', true, 7);
// console.log(bugTracker.show());
// bugTracker.remove(0);
// console.log(bugTracker.show());