import {isMonday} from "date-fns";

fetch('http://54.152.20.175:5000/')
    .then((response) => response.json())
    .then((json) => {
        console.log('JSON: ', json, json.length);

        let marino2ndFloorM12am = json.filter((item) => item.location == 'Marino Second Floor' && isMonday(item.Date)  );

        console.log('Marino 2nd Floor- Monday 12 am: ', facility, facility.length);

        let html = '';

        facility.forEach((item) => (html += `<p>ID: ${item.id}</p>`));

        console.log('HTML: ', html);

        appDiv.innerHTML = html;
    });