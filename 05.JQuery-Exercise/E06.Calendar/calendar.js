function calendar(arrayDateTokens) {
    let date = new Date(Date.UTC(Number(arrayDateTokens[2]), Number(arrayDateTokens[1])-1, Number(arrayDateTokens[0])));
    // console.dir(date.toLocaleString("en-us", { month: "long" })); // get month name
    function getMonthName(monthIndex) {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][monthIndex];
    }

    let container = $('#content');
    createCalendar();
    function createCalendar() {
        let table = $('<table>')
            .append(
                $('<caption>').text(`${getMonthName(date.getMonth())} ${date.getFullYear()}`)
            );
        let tbody = $('<tbody>')
            .append(
                $('<tr>')
                    .append(
                        $('<th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th>')
                    )
            );
        createCalendarDays();
        table.append(tbody);

        function createCalendarDays() {
            let currentMonthStartDate = new Date(Date.UTC(Number(arrayDateTokens[2]), Number(arrayDateTokens[1])-1, 1));

            while (date.getMonth() == currentMonthStartDate.getMonth()) {
                tbody.append($('<tr>'));
                for (let day = 0; day < 7; day++) {
                    // console.log(monthDate.getDay() == day);
                    // getDay() 0-6 => Sun - Sat, and because I want the week to start from Mon, I do this below with %
                    if((currentMonthStartDate.getDay() + 6) % 7 == day && date.getMonth() === currentMonthStartDate.getMonth()){
                        if(currentMonthStartDate.getDate()== date.getDate()){
                            tbody.find('tr').last().append(
                                $('<td>').addClass('today').text(currentMonthStartDate.getDate())
                            );
                        }else{
                            tbody.find('tr').last().append(
                                $('<td>').text(currentMonthStartDate.getDate())
                            );
                        }

                        currentMonthStartDate.setDate(currentMonthStartDate.getDate() + 1);
                    }else{

                        tbody.find('tr').last().append(
                            $('<td>').text('')
                        )
                    }

                }

            }
        }

        container.append(table);
    }
}