class MailBox{
    constructor(){
        this.mailMessages = []
    }
    addMessage(subject, text){
        this.mailMessages.push(
            {
                subject: subject,
                text: text
            }
        );
        return this;
    }
    get messageCount(){
        return this.mailMessages.length;
    }
    deleteAllMessages(){
        this.mailMessages = [];
    }
    findBySubject(substr){
        if(substr!=''){
            return this.mailMessages.filter(function (e) {
                return e.subject.indexOf(substr) !== -1;
            });
        }
        return [];
    }
    toString(){
        if(this.mailMessages.length == 0){
            return ' * (empty mailbox)';
        }
        let output = '';
        this.mailMessages.forEach(e=>{
            output+= ' * [' + e.subject + '] ' + e.text +'\n';
        });
        return ' ' + output.trim();
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());