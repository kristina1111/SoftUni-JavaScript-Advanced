function wikiParser(selector) {
    const regexForItalic = /''([^'=\[]*?)''/g;
    const regexForBold = /'''([^'=\[]*?)'''/g;
    const regexForH1 = /=([^'=\[]*?)=/g;
    const regexForH2 = /==([^'=\[]*?)==/g;
    const regexForH3 = /===([^'=\[]*?)===/g;
    const regexForSimpleLink = /\[\[([^'=\[\|]*?)]]/g;
    const regexForNotSimpleLink = /(\[\[([^'=\[]*?)\|([^'=\[]*)]])/g;

    let tag = $(selector);
    let textToParse = tag.text();

    textToParse = textToParse.replace(regexForBold, '<b>$1</b>')
        .replace(regexForItalic, '<i>$1</i>')
        .replace(regexForH3, '<h3>$1</h3>')
        .replace(regexForH2, '<h2>$1</h2>')
        .replace(regexForH1, '<h1>$1</h1>')
        .replace(regexForSimpleLink, '<a href="/wiki/$1">$1</a>')
        .replace(regexForNotSimpleLink, '<a href="/wiki/$2">$3</a>');

    tag.html(textToParse);

}