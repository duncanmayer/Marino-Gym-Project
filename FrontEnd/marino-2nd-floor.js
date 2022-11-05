fetch('http://54.152.20.175:5000/')
    .then((response) => response.json())
    .then((json) => {
        console.log('JSON: ', json, json.length);

        let sun = json.filter((item) => item.Location === 'Marino Second Floor'
                              // && item.Weekday === 'Sunday'
        );
        let mon = json.filter((item) => item.Location === 'Marino Second Floor'
                              // && item.Weekday === 'Monday'
        );
        let tue = json.filter((item) => item.Location === 'Marino Second Floor'
                              // && item.Weekday === 'Tuesday'
        );
        let wed = json.filter((item) => item.Location === 'Marino Second Floor'
                              // && item.Weekday === 'Wednesday'
        );
        let thu = json.filter((item) => item.Location === 'Marino Second Floor'
                              // && item.Weekday === 'Thursday'
        );
        let fri = json.filter((item) => item.Location === 'Marino Second Floor'
                              // && item.Weekday === 'Friday'
        );
        let sat = json.filter((item) => item.Location === 'Marino Second Floor'
                              // && item.Weekday === 'Saturday'
        );

        let sun12am = sun.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'AM'
        );
        let sun1am = sun.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'AM'
        );
        let sun2am = sun.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'AM'
        );
        let sun3am = sun.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'AM'
        );
        let sun4am = sun.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'AM'
        );
        let sun5am = sun.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'AM'
        );
        let sun6am = sun.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'AM'
        );
        let sun7am = sun.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'AM'
        );
        let sun8am = sun.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'AM'
        );
        let sun9am = sun.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'AM'
        );
        let sun10am = sun.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'AM'
        );
        let sun11am = sun.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'AM'
        );
        let sun12pm = sun.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'PM'
        );
        let sun1pm = sun.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'PM'
        );
        let sun2pm = sun.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'PM'
        );
        let sun3pm = sun.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'PM'
        );
        let sun4pm = sun.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'PM'
        );
        let sun5pm = sun.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'PM'
        );
        let sun6pm = sun.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'PM'
        );
        let sun7pm = sun.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'PM'
        );
        let sun8pm = sun.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'PM'
        );
        let sun9pm = sun.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'PM'
        );
        let sun10pm = sun.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'PM'
        );
        let sun11pm = sun.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'PM'
        );

        console.log('sun', sun, sun.length);

        console.log('sun 12am', sun12am, sun12am.length);
        let sun12amTotal = 0;
        sun12am.forEach((item) => (sun12amTotal += JSON.parse(item.Count)));
        let sun12amAvg = sun12amTotal / sun12am.length;
        console.log('sun 12am Average: ', sun12amAvg);

        console.log('sun 1am', sun1am, sun1am.length);
        let sun1amTotal = 0;
        sun1am.forEach((item) => (sun1amTotal += JSON.parse(item.Count)));
        let sun1amAvg = sun1amTotal / sun1am.length;
        console.log('sun 1am Average: ', sun1amAvg);

        console.log('sun 2am', sun2am, sun2am.length);
        let sun2amTotal = 0;
        sun2am.forEach((item) => (sun2amTotal += JSON.parse(item.Count)));
        let sun2amAvg = sun2amTotal / sun2am.length;
        console.log('sun 2am Average: ', sun2amAvg);

        console.log('sun 3am', sun3am, sun3am.length);
        let sun3amTotal = 0;
        sun3am.forEach((item) => (sun3amTotal += JSON.parse(item.Count)));
        let sun3amAvg = sun3amTotal / sun3am.length;
        console.log('sun 3am Average: ', sun3amAvg);

        console.log('sun 4am', sun4am, sun4am.length);
        let sun4amTotal = 0;
        sun4am.forEach((item) => (sun4amTotal += JSON.parse(item.Count)));
        let sun4amAvg = sun4amTotal / sun4am.length;
        console.log('sun 4am Average: ', sun4amAvg);

        console.log('sun 5am', sun5am, sun5am.length);
        let sun5amTotal = 0;
        sun5am.forEach((item) => (sun5amTotal += JSON.parse(item.Count)));
        let sun5amAvg = sun5amTotal / sun5am.length;
        console.log('sun 5am Average: ', sun5amAvg);

        console.log('sun 6am', sun6am, sun6am.length);
        let sun6amTotal = 0;
        sun6am.forEach((item) => (sun6amTotal += JSON.parse(item.Count)));
        let sun6amAvg = sun6amTotal / sun6am.length;
        console.log('sun 6am Average: ', sun6amAvg);

        console.log('sun 7am', sun7am, sun7am.length);
        let sun7amTotal = 0;
        sun7am.forEach((item) => (sun7amTotal += JSON.parse(item.Count)));
        let sun7amAvg = sun7amTotal / sun7am.length;
        console.log('sun 7am Average: ', sun7amAvg);

        console.log('sun 8am', sun8am, sun8am.length);
        let sun8amTotal = 0;
        sun8am.forEach((item) => (sun8amTotal += JSON.parse(item.Count)));
        let sun8amAvg = sun8amTotal / sun8am.length;
        console.log('sun 8am Average: ', sun8amAvg);

        console.log('sun 9am', sun9am, sun9am.length);
        let sun9amTotal = 0;
        sun9am.forEach((item) => (sun9amTotal += JSON.parse(item.Count)));
        let sun9amAvg = sun9amTotal / sun9am.length;
        console.log('sun 9am Average: ', sun9amAvg);

        console.log('sun 10am', sun10am, sun10am.length);
        let sun10amTotal = 0;
        sun10am.forEach((item) => (sun10amTotal += JSON.parse(item.Count)));
        let sun10amAvg = sun10amTotal / sun10am.length;
        console.log('sun 10am Average: ', sun10amAvg);

        console.log('sun 11am', sun11am, sun11am.length);
        let sun11amTotal = 0;
        sun11am.forEach((item) => (sun11amTotal += JSON.parse(item.Count)));
        let sun11amAvg = sun11amTotal / sun11am.length;
        console.log('sun 11am Average: ', sun11amAvg);

        console.log('sun 12pm', sun12pm, sun12pm.length);
        let sun12pmTotal = 0;
        sun12pm.forEach((item) => (sun12pmTotal += JSON.parse(item.Count)));
        let sun12pmAvg = sun12pmTotal / sun12pm.length;
        console.log('sun 12pm Average: ', sun12pmAvg);

        console.log('sun 1pm', sun1pm, sun1pm.length);
        let sun1pmTotal = 0;
        sun1pm.forEach((item) => (sun1pmTotal += JSON.parse(item.Count)));
        let sun1pmAvg = sun1pmTotal / sun1pm.length;
        console.log('sun 1pm Average: ', sun1pmAvg);

        console.log('sun 2pm', sun2pm, sun2pm.length);
        let sun2pmTotal = 0;
        sun2pm.forEach((item) => (sun2pmTotal += JSON.parse(item.Count)));
        let sun2pmAvg = sun2pmTotal / sun2pm.length;
        console.log('sun 2pm Average: ', sun2pmAvg);

        console.log('sun 3pm', sun3pm, sun3pm.length);
        let sun3pmTotal = 0;
        sun3pm.forEach((item) => (sun3pmTotal += JSON.parse(item.Count)));
        let sun3pmAvg = sun3pmTotal / sun3pm.length;
        console.log('sun 3pm Average: ', sun3pmAvg);

        console.log('sun 4pm', sun4pm, sun4pm.length);
        let sun4pmTotal = 0;
        sun4pm.forEach((item) => (sun4pmTotal += JSON.parse(item.Count)));
        let sun4pmAvg = sun4pmTotal / sun4pm.length;
        console.log('sun 4pm Average: ', sun4pmAvg);

        console.log('sun 5pm', sun5pm, sun5pm.length);
        let sun5pmTotal = 0;
        sun5pm.forEach((item) => (sun5pmTotal += JSON.parse(item.Count)));
        let sun5pmAvg = sun5pmTotal / sun5pm.length;
        console.log('sun 5pm Average: ', sun5pmAvg);

        console.log('sun 6pm', sun6pm, sun6pm.length);
        let sun6pmTotal = 0;
        sun6pm.forEach((item) => (sun6pmTotal += JSON.parse(item.Count)));
        let sun6pmAvg = sun6pmTotal / sun6pm.length;
        console.log('sun 6pm Average: ', sun6pmAvg);

        console.log('sun 7pm', sun7pm, sun7pm.length);
        let sun7pmTotal = 0;
        sun7pm.forEach((item) => (sun7pmTotal += JSON.parse(item.Count)));
        let sun7pmAvg = sun7pmTotal / sun7pm.length;
        console.log('sun 7pm Average: ', sun7pmAvg);

        console.log('sun 8pm', sun8pm, sun8pm.length);
        let sun8pmTotal = 0;
        sun8pm.forEach((item) => (sun8pmTotal += JSON.parse(item.Count)));
        let sun8pmAvg = sun8pmTotal / sun8pm.length;
        console.log('sun 8pm Average: ', sun8pmAvg);

        console.log('sun 9pm', sun9pm, sun9pm.length);
        let sun9pmTotal = 0;
        sun9pm.forEach((item) => (sun9pmTotal += JSON.parse(item.Count)));
        let sun9pmAvg = sun9pmTotal / sun9pm.length;
        console.log('sun 9pm Average: ', sun9pmAvg);

        console.log('sun 10pm', sun10pm, sun10pm.length);
        let sun10pmTotal = 0;
        sun10pm.forEach((item) => (sun10pmTotal += JSON.parse(item.Count)));
        let sun10pmAvg = sun10pmTotal / sun10pm.length;
        console.log('sun 10pm Average: ', sun10pmAvg);

        console.log('sun 11pm', sun11pm, sun11pm.length);
        let sun11pmTotal = 0;
        sun11pm.forEach((item) => (sun11pmTotal += JSON.parse(item.Count)));
        let sun11pmAvg = sun11pmTotal / sun11pm.length;
        console.log('sun 11pm Average: ', sun11pmAvg);

        let mon12am = mon.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'AM'
        );
        let mon1am = mon.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'AM'
        );
        let mon2am = mon.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'AM'
        );
        let mon3am = mon.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'AM'
        );
        let mon4am = mon.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'AM'
        );
        let mon5am = mon.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'AM'
        );
        let mon6am = mon.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'AM'
        );
        let mon7am = mon.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'AM'
        );
        let mon8am = mon.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'AM'
        );
        let mon9am = mon.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'AM'
        );
        let mon10am = mon.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'AM'
        );
        let mon11am = mon.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'AM'
        );
        let mon12pm = mon.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'PM'
        );
        let mon1pm = mon.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'PM'
        );
        let mon2pm = mon.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'PM'
        );
        let mon3pm = mon.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'PM'
        );
        let mon4pm = mon.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'PM'
        );
        let mon5pm = mon.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'PM'
        );
        let mon6pm = mon.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'PM'
        );
        let mon7pm = mon.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'PM'
        );
        let mon8pm = mon.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'PM'
        );
        let mon9pm = mon.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'PM'
        );
        let mon10pm = mon.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'PM'
        );
        let mon11pm = mon.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'PM'
        );

        console.log('mon', mon, mon.length);

        console.log('mon 12am', mon12am, mon12am.length);
        let mon12amTotal = 0;
        mon12am.forEach((item) => (mon12amTotal += JSON.parse(item.Count)));
        let mon12amAvg = mon12amTotal / mon12am.length;
        console.log('Mon 12am Average: ', mon12amAvg);

        console.log('mon 1am', mon1am, mon1am.length);
        let mon1amTotal = 0;
        mon1am.forEach((item) => (mon1amTotal += JSON.parse(item.Count)));
        let mon1amAvg = mon1amTotal / mon1am.length;
        console.log('Mon 1am Average: ', mon1amAvg);

        console.log('mon 2am', mon2am, mon2am.length);
        let mon2amTotal = 0;
        mon2am.forEach((item) => (mon2amTotal += JSON.parse(item.Count)));
        let mon2amAvg = mon2amTotal / mon2am.length;
        console.log('Mon 2am Average: ', mon2amAvg);

        console.log('mon 3am', mon3am, mon3am.length);
        let mon3amTotal = 0;
        mon3am.forEach((item) => (mon3amTotal += JSON.parse(item.Count)));
        let mon3amAvg = mon3amTotal / mon3am.length;
        console.log('Mon 3am Average: ', mon3amAvg);

        console.log('mon 4am', mon4am, mon4am.length);
        let mon4amTotal = 0;
        mon4am.forEach((item) => (mon4amTotal += JSON.parse(item.Count)));
        let mon4amAvg = mon4amTotal / mon4am.length;
        console.log('Mon 4am Average: ', mon4amAvg);

        console.log('mon 5am', mon5am, mon5am.length);
        let mon5amTotal = 0;
        mon5am.forEach((item) => (mon5amTotal += JSON.parse(item.Count)));
        let mon5amAvg = mon5amTotal / mon5am.length;
        console.log('Mon 5am Average: ', mon5amAvg);

        console.log('mon 6am', mon6am, mon6am.length);
        let mon6amTotal = 0;
        mon6am.forEach((item) => (mon6amTotal += JSON.parse(item.Count)));
        let mon6amAvg = mon6amTotal / mon6am.length;
        console.log('Mon 6am Average: ', mon6amAvg);

        console.log('mon 7am', mon7am, mon7am.length);
        let mon7amTotal = 0;
        mon7am.forEach((item) => (mon7amTotal += JSON.parse(item.Count)));
        let mon7amAvg = mon7amTotal / mon7am.length;
        console.log('Mon 7am Average: ', mon7amAvg);

        console.log('mon 8am', mon8am, mon8am.length);
        let mon8amTotal = 0;
        mon8am.forEach((item) => (mon8amTotal += JSON.parse(item.Count)));
        let mon8amAvg = mon8amTotal / mon8am.length;
        console.log('Mon 8am Average: ', mon8amAvg);

        console.log('mon 9am', mon9am, mon9am.length);
        let mon9amTotal = 0;
        mon9am.forEach((item) => (mon9amTotal += JSON.parse(item.Count)));
        let mon9amAvg = mon9amTotal / mon9am.length;
        console.log('Mon 9am Average: ', mon9amAvg);

        console.log('mon 10am', mon10am, mon10am.length);
        let mon10amTotal = 0;
        mon10am.forEach((item) => (mon10amTotal += JSON.parse(item.Count)));
        let mon10amAvg = mon10amTotal / mon10am.length;
        console.log('Mon 10am Average: ', mon10amAvg);

        console.log('mon 11am', mon11am, mon11am.length);
        let mon11amTotal = 0;
        mon11am.forEach((item) => (mon11amTotal += JSON.parse(item.Count)));
        let mon11amAvg = mon11amTotal / mon11am.length;
        console.log('Mon 11am Average: ', mon11amAvg);

        console.log('mon 12pm', mon12pm, mon12pm.length);
        let mon12pmTotal = 0;
        mon12pm.forEach((item) => (mon12pmTotal += JSON.parse(item.Count)));
        let mon12pmAvg = mon12pmTotal / mon12pm.length;
        console.log('Mon 12pm Average: ', mon12pmAvg);

        console.log('mon 1pm', mon1pm, mon1pm.length);
        let mon1pmTotal = 0;
        mon1pm.forEach((item) => (mon1pmTotal += JSON.parse(item.Count)));
        let mon1pmAvg = mon1pmTotal / mon1pm.length;
        console.log('Mon 1pm Average: ', mon1pmAvg);

        console.log('mon 2pm', mon2pm, mon2pm.length);
        let mon2pmTotal = 0;
        mon2pm.forEach((item) => (mon2pmTotal += JSON.parse(item.Count)));
        let mon2pmAvg = mon2pmTotal / mon2pm.length;
        console.log('Mon 2pm Average: ', mon2pmAvg);

        console.log('mon 3pm', mon3pm, mon3pm.length);
        let mon3pmTotal = 0;
        mon3pm.forEach((item) => (mon3pmTotal += JSON.parse(item.Count)));
        let mon3pmAvg = mon3pmTotal / mon3pm.length;
        console.log('Mon 3pm Average: ', mon3pmAvg);

        console.log('mon 4pm', mon4pm, mon4pm.length);
        let mon4pmTotal = 0;
        mon4pm.forEach((item) => (mon4pmTotal += JSON.parse(item.Count)));
        let mon4pmAvg = mon4pmTotal / mon4pm.length;
        console.log('Mon 4pm Average: ', mon4pmAvg);

        console.log('mon 5pm', mon5pm, mon5pm.length);
        let mon5pmTotal = 0;
        mon5pm.forEach((item) => (mon5pmTotal += JSON.parse(item.Count)));
        let mon5pmAvg = mon5pmTotal / mon5pm.length;
        console.log('Mon 5pm Average: ', mon5pmAvg);

        console.log('mon 6pm', mon6pm, mon6pm.length);
        let mon6pmTotal = 0;
        mon6pm.forEach((item) => (mon6pmTotal += JSON.parse(item.Count)));
        let mon6pmAvg = mon6pmTotal / mon6pm.length;
        console.log('Mon 6pm Average: ', mon6pmAvg);

        console.log('mon 7pm', mon7pm, mon7pm.length);
        let mon7pmTotal = 0;
        mon7pm.forEach((item) => (mon7pmTotal += JSON.parse(item.Count)));
        let mon7pmAvg = mon7pmTotal / mon7pm.length;
        console.log('Mon 7pm Average: ', mon7pmAvg);

        console.log('mon 8pm', mon8pm, mon8pm.length);
        let mon8pmTotal = 0;
        mon8pm.forEach((item) => (mon8pmTotal += JSON.parse(item.Count)));
        let mon8pmAvg = mon8pmTotal / mon8pm.length;
        console.log('Mon 8pm Average: ', mon8pmAvg);

        console.log('mon 9pm', mon9pm, mon9pm.length);
        let mon9pmTotal = 0;
        mon9pm.forEach((item) => (mon9pmTotal += JSON.parse(item.Count)));
        let mon9pmAvg = mon9pmTotal / mon9pm.length;
        console.log('Mon 9pm Average: ', mon9pmAvg);

        console.log('mon 10pm', mon10pm, mon10pm.length);
        let mon10pmTotal = 0;
        mon10pm.forEach((item) => (mon10pmTotal += JSON.parse(item.Count)));
        let mon10pmAvg = mon10pmTotal / mon10pm.length;
        console.log('Mon 10pm Average: ', mon10pmAvg);

        console.log('mon 11pm', mon11pm, mon11pm.length);
        let mon11pmTotal = 0;
        mon11pm.forEach((item) => (mon11pmTotal += JSON.parse(item.Count)));
        let mon11pmAvg = mon11pmTotal / mon11pm.length;
        console.log('Mon 11pm Average: ', mon11pmAvg);

        let tue12am = tue.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'AM'
        );
        let tue1am = tue.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'AM'
        );
        let tue2am = tue.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'AM'
        );
        let tue3am = tue.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'AM'
        );
        let tue4am = tue.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'AM'
        );
        let tue5am = tue.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'AM'
        );
        let tue6am = tue.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'AM'
        );
        let tue7am = tue.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'AM'
        );
        let tue8am = tue.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'AM'
        );
        let tue9am = tue.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'AM'
        );
        let tue10am = tue.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'AM'
        );
        let tue11am = tue.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'AM'
        );
        let tue12pm = tue.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'PM'
        );
        let tue1pm = tue.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'PM'
        );
        let tue2pm = tue.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'PM'
        );
        let tue3pm = tue.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'PM'
        );
        let tue4pm = tue.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'PM'
        );
        let tue5pm = tue.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'PM'
        );
        let tue6pm = tue.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'PM'
        );
        let tue7pm = tue.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'PM'
        );
        let tue8pm = tue.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'PM'
        );
        let tue9pm = tue.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'PM'
        );
        let tue10pm = tue.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'PM'
        );
        let tue11pm = tue.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'PM'
        );

        console.log('tue', tue, tue.length);

        console.log('tue 12am', tue12am, tue12am.length);
        let tue12amTotal = 0;
        tue12am.forEach((item) => (tue12amTotal += JSON.parse(item.Count)));
        let tue12amAvg = tue12amTotal / tue12am.length;
        console.log('tue 12am Average: ', tue12amAvg);

        console.log('tue 1am', tue1am, tue1am.length);
        let tue1amTotal = 0;
        tue1am.forEach((item) => (tue1amTotal += JSON.parse(item.Count)));
        let tue1amAvg = tue1amTotal / tue1am.length;
        console.log('tue 1am Average: ', tue1amAvg);

        console.log('tue 2am', tue2am, tue2am.length);
        let tue2amTotal = 0;
        tue2am.forEach((item) => (tue2amTotal += JSON.parse(item.Count)));
        let tue2amAvg = tue2amTotal / tue2am.length;
        console.log('tue 2am Average: ', tue2amAvg);

        console.log('tue 3am', tue3am, tue3am.length);
        let tue3amTotal = 0;
        tue3am.forEach((item) => (tue3amTotal += JSON.parse(item.Count)));
        let tue3amAvg = tue3amTotal / tue3am.length;
        console.log('tue 3am Average: ', tue3amAvg);

        console.log('tue 4am', tue4am, tue4am.length);
        let tue4amTotal = 0;
        tue4am.forEach((item) => (tue4amTotal += JSON.parse(item.Count)));
        let tue4amAvg = tue4amTotal / tue4am.length;
        console.log('tue 4am Average: ', tue4amAvg);

        console.log('tue 5am', tue5am, tue5am.length);
        let tue5amTotal = 0;
        tue5am.forEach((item) => (tue5amTotal += JSON.parse(item.Count)));
        let tue5amAvg = tue5amTotal / tue5am.length;
        console.log('tue 5am Average: ', tue5amAvg);

        console.log('tue 6am', tue6am, tue6am.length);
        let tue6amTotal = 0;
        tue6am.forEach((item) => (tue6amTotal += JSON.parse(item.Count)));
        let tue6amAvg = tue6amTotal / tue6am.length;
        console.log('tue 6am Average: ', tue6amAvg);

        console.log('tue 7am', tue7am, tue7am.length);
        let tue7amTotal = 0;
        tue7am.forEach((item) => (tue7amTotal += JSON.parse(item.Count)));
        let tue7amAvg = tue7amTotal / tue7am.length;
        console.log('tue 7am Average: ', tue7amAvg);

        console.log('tue 8am', tue8am, tue8am.length);
        let tue8amTotal = 0;
        tue8am.forEach((item) => (tue8amTotal += JSON.parse(item.Count)));
        let tue8amAvg = tue8amTotal / tue8am.length;
        console.log('tue 8am Average: ', tue8amAvg);

        console.log('tue 9am', tue9am, tue9am.length);
        let tue9amTotal = 0;
        tue9am.forEach((item) => (tue9amTotal += JSON.parse(item.Count)));
        let tue9amAvg = tue9amTotal / tue9am.length;
        console.log('tue 9am Average: ', tue9amAvg);

        console.log('tue 10am', tue10am, tue10am.length);
        let tue10amTotal = 0;
        tue10am.forEach((item) => (tue10amTotal += JSON.parse(item.Count)));
        let tue10amAvg = tue10amTotal / tue10am.length;
        console.log('tue 10am Average: ', tue10amAvg);

        console.log('tue 11am', tue11am, tue11am.length);
        let tue11amTotal = 0;
        tue11am.forEach((item) => (tue11amTotal += JSON.parse(item.Count)));
        let tue11amAvg = tue11amTotal / tue11am.length;
        console.log('tue 11am Average: ', tue11amAvg);

        console.log('tue 12pm', tue12pm, tue12pm.length);
        let tue12pmTotal = 0;
        tue12pm.forEach((item) => (tue12pmTotal += JSON.parse(item.Count)));
        let tue12pmAvg = tue12pmTotal / tue12pm.length;
        console.log('tue 12pm Average: ', tue12pmAvg);

        console.log('tue 1pm', tue1pm, tue1pm.length);
        let tue1pmTotal = 0;
        tue1pm.forEach((item) => (tue1pmTotal += JSON.parse(item.Count)));
        let tue1pmAvg = tue1pmTotal / tue1pm.length;
        console.log('tue 1pm Average: ', tue1pmAvg);

        console.log('tue 2pm', tue2pm, tue2pm.length);
        let tue2pmTotal = 0;
        tue2pm.forEach((item) => (tue2pmTotal += JSON.parse(item.Count)));
        let tue2pmAvg = tue2pmTotal / tue2pm.length;
        console.log('tue 2pm Average: ', tue2pmAvg);

        console.log('tue 3pm', tue3pm, tue3pm.length);
        let tue3pmTotal = 0;
        tue3pm.forEach((item) => (tue3pmTotal += JSON.parse(item.Count)));
        let tue3pmAvg = tue3pmTotal / tue3pm.length;
        console.log('tue 3pm Average: ', tue3pmAvg);

        console.log('tue 4pm', tue4pm, tue4pm.length);
        let tue4pmTotal = 0;
        tue4pm.forEach((item) => (tue4pmTotal += JSON.parse(item.Count)));
        let tue4pmAvg = tue4pmTotal / tue4pm.length;
        console.log('tue 4pm Average: ', tue4pmAvg);

        console.log('tue 5pm', tue5pm, tue5pm.length);
        let tue5pmTotal = 0;
        tue5pm.forEach((item) => (tue5pmTotal += JSON.parse(item.Count)));
        let tue5pmAvg = tue5pmTotal / tue5pm.length;
        console.log('tue 5pm Average: ', tue5pmAvg);

        console.log('tue 6pm', tue6pm, tue6pm.length);
        let tue6pmTotal = 0;
        tue6pm.forEach((item) => (tue6pmTotal += JSON.parse(item.Count)));
        let tue6pmAvg = tue6pmTotal / tue6pm.length;
        console.log('tue 6pm Average: ', tue6pmAvg);

        console.log('tue 7pm', tue7pm, tue7pm.length);
        let tue7pmTotal = 0;
        tue7pm.forEach((item) => (tue7pmTotal += JSON.parse(item.Count)));
        let tue7pmAvg = tue7pmTotal / tue7pm.length;
        console.log('tue 7pm Average: ', tue7pmAvg);

        console.log('tue 8pm', tue8pm, tue8pm.length);
        let tue8pmTotal = 0;
        tue8pm.forEach((item) => (tue8pmTotal += JSON.parse(item.Count)));
        let tue8pmAvg = tue8pmTotal / tue8pm.length;
        console.log('tue 8pm Average: ', tue8pmAvg);

        console.log('tue 9pm', tue9pm, tue9pm.length);
        let tue9pmTotal = 0;
        tue9pm.forEach((item) => (tue9pmTotal += JSON.parse(item.Count)));
        let tue9pmAvg = tue9pmTotal / tue9pm.length;
        console.log('tue 9pm Average: ', tue9pmAvg);

        console.log('tue 10pm', tue10pm, tue10pm.length);
        let tue10pmTotal = 0;
        tue10pm.forEach((item) => (tue10pmTotal += JSON.parse(item.Count)));
        let tue10pmAvg = tue10pmTotal / tue10pm.length;
        console.log('tue 10pm Average: ', tue10pmAvg);

        console.log('tue 11pm', tue11pm, tue11pm.length);
        let tue11pmTotal = 0;
        tue11pm.forEach((item) => (tue11pmTotal += JSON.parse(item.Count)));
        let tue11pmAvg = tue11pmTotal / tue11pm.length;
        console.log('tue 11pm Average: ', tue11pmAvg);

        let wed12am = wed.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'AM'
        );
        let wed1am = wed.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'AM'
        );
        let wed2am = wed.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'AM'
        );
        let wed3am = wed.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'AM'
        );
        let wed4am = wed.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'AM'
        );
        let wed5am = wed.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'AM'
        );
        let wed6am = wed.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'AM'
        );
        let wed7am = wed.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'AM'
        );
        let wed8am = wed.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'AM'
        );
        let wed9am = wed.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'AM'
        );
        let wed10am = wed.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'AM'
        );
        let wed11am = wed.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'AM'
        );
        let wed12pm = wed.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'PM'
        );
        let wed1pm = wed.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'PM'
        );
        let wed2pm = wed.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'PM'
        );
        let wed3pm = wed.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'PM'
        );
        let wed4pm = wed.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'PM'
        );
        let wed5pm = wed.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'PM'
        );
        let wed6pm = wed.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'PM'
        );
        let wed7pm = wed.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'PM'
        );
        let wed8pm = wed.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'PM'
        );
        let wed9pm = wed.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'PM'
        );
        let wed10pm = wed.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'PM'
        );
        let wed11pm = wed.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'PM'
        );

        console.log('wed', wed, wed.length);

        console.log('wed 12am', wed12am, wed12am.length);
        let wed12amTotal = 0;
        wed12am.forEach((item) => (wed12amTotal += JSON.parse(item.Count)));
        let wed12amAvg = wed12amTotal / wed12am.length;
        console.log('wed 12am Average: ', wed12amAvg);

        console.log('wed 1am', wed1am, wed1am.length);
        let wed1amTotal = 0;
        wed1am.forEach((item) => (wed1amTotal += JSON.parse(item.Count)));
        let wed1amAvg = wed1amTotal / wed1am.length;
        console.log('wed 1am Average: ', wed1amAvg);

        console.log('wed 2am', wed2am, wed2am.length);
        let wed2amTotal = 0;
        wed2am.forEach((item) => (wed2amTotal += JSON.parse(item.Count)));
        let wed2amAvg = wed2amTotal / wed2am.length;
        console.log('wed 2am Average: ', wed2amAvg);

        console.log('wed 3am', wed3am, wed3am.length);
        let wed3amTotal = 0;
        wed3am.forEach((item) => (wed3amTotal += JSON.parse(item.Count)));
        let wed3amAvg = wed3amTotal / wed3am.length;
        console.log('wed 3am Average: ', wed3amAvg);

        console.log('wed 4am', wed4am, wed4am.length);
        let wed4amTotal = 0;
        wed4am.forEach((item) => (wed4amTotal += JSON.parse(item.Count)));
        let wed4amAvg = wed4amTotal / wed4am.length;
        console.log('wed 4am Average: ', wed4amAvg);

        console.log('wed 5am', wed5am, wed5am.length);
        let wed5amTotal = 0;
        wed5am.forEach((item) => (wed5amTotal += JSON.parse(item.Count)));
        let wed5amAvg = wed5amTotal / wed5am.length;
        console.log('wed 5am Average: ', wed5amAvg);

        console.log('wed 6am', wed6am, wed6am.length);
        let wed6amTotal = 0;
        wed6am.forEach((item) => (wed6amTotal += JSON.parse(item.Count)));
        let wed6amAvg = wed6amTotal / wed6am.length;
        console.log('wed 6am Average: ', wed6amAvg);

        console.log('wed 7am', wed7am, wed7am.length);
        let wed7amTotal = 0;
        wed7am.forEach((item) => (wed7amTotal += JSON.parse(item.Count)));
        let wed7amAvg = wed7amTotal / wed7am.length;
        console.log('wed 7am Average: ', wed7amAvg);

        console.log('wed 8am', wed8am, wed8am.length);
        let wed8amTotal = 0;
        wed8am.forEach((item) => (wed8amTotal += JSON.parse(item.Count)));
        let wed8amAvg = wed8amTotal / wed8am.length;
        console.log('wed 8am Average: ', wed8amAvg);

        console.log('wed 9am', wed9am, wed9am.length);
        let wed9amTotal = 0;
        wed9am.forEach((item) => (wed9amTotal += JSON.parse(item.Count)));
        let wed9amAvg = wed9amTotal / wed9am.length;
        console.log('wed 9am Average: ', wed9amAvg);

        console.log('wed 10am', wed10am, wed10am.length);
        let wed10amTotal = 0;
        wed10am.forEach((item) => (wed10amTotal += JSON.parse(item.Count)));
        let wed10amAvg = wed10amTotal / wed10am.length;
        console.log('wed 10am Average: ', wed10amAvg);

        console.log('wed 11am', wed11am, wed11am.length);
        let wed11amTotal = 0;
        wed11am.forEach((item) => (wed11amTotal += JSON.parse(item.Count)));
        let wed11amAvg = wed11amTotal / wed11am.length;
        console.log('wed 11am Average: ', wed11amAvg);

        console.log('wed 12pm', wed12pm, wed12pm.length);
        let wed12pmTotal = 0;
        wed12pm.forEach((item) => (wed12pmTotal += JSON.parse(item.Count)));
        let wed12pmAvg = wed12pmTotal / wed12pm.length;
        console.log('wed 12pm Average: ', wed12pmAvg);

        console.log('wed 1pm', wed1pm, wed1pm.length);
        let wed1pmTotal = 0;
        wed1pm.forEach((item) => (wed1pmTotal += JSON.parse(item.Count)));
        let wed1pmAvg = wed1pmTotal / wed1pm.length;
        console.log('wed 1pm Average: ', wed1pmAvg);

        console.log('wed 2pm', wed2pm, wed2pm.length);
        let wed2pmTotal = 0;
        wed2pm.forEach((item) => (wed2pmTotal += JSON.parse(item.Count)));
        let wed2pmAvg = wed2pmTotal / wed2pm.length;
        console.log('wed 2pm Average: ', wed2pmAvg);

        console.log('wed 3pm', wed3pm, wed3pm.length);
        let wed3pmTotal = 0;
        wed3pm.forEach((item) => (wed3pmTotal += JSON.parse(item.Count)));
        let wed3pmAvg = wed3pmTotal / wed3pm.length;
        console.log('wed 3pm Average: ', wed3pmAvg);

        console.log('wed 4pm', wed4pm, wed4pm.length);
        let wed4pmTotal = 0;
        wed4pm.forEach((item) => (wed4pmTotal += JSON.parse(item.Count)));
        let wed4pmAvg = wed4pmTotal / wed4pm.length;
        console.log('wed 4pm Average: ', wed4pmAvg);

        console.log('wed 5pm', wed5pm, wed5pm.length);
        let wed5pmTotal = 0;
        wed5pm.forEach((item) => (wed5pmTotal += JSON.parse(item.Count)));
        let wed5pmAvg = wed5pmTotal / wed5pm.length;
        console.log('wed 5pm Average: ', wed5pmAvg);

        console.log('wed 6pm', wed6pm, wed6pm.length);
        let wed6pmTotal = 0;
        wed6pm.forEach((item) => (wed6pmTotal += JSON.parse(item.Count)));
        let wed6pmAvg = wed6pmTotal / wed6pm.length;
        console.log('wed 6pm Average: ', wed6pmAvg);

        console.log('wed 7pm', wed7pm, wed7pm.length);
        let wed7pmTotal = 0;
        wed7pm.forEach((item) => (wed7pmTotal += JSON.parse(item.Count)));
        let wed7pmAvg = wed7pmTotal / wed7pm.length;
        console.log('wed 7pm Average: ', wed7pmAvg);

        console.log('wed 8pm', wed8pm, wed8pm.length);
        let wed8pmTotal = 0;
        wed8pm.forEach((item) => (wed8pmTotal += JSON.parse(item.Count)));
        let wed8pmAvg = wed8pmTotal / wed8pm.length;
        console.log('wed 8pm Average: ', wed8pmAvg);

        console.log('wed 9pm', wed9pm, wed9pm.length);
        let wed9pmTotal = 0;
        wed9pm.forEach((item) => (wed9pmTotal += JSON.parse(item.Count)));
        let wed9pmAvg = wed9pmTotal / wed9pm.length;
        console.log('wed 9pm Average: ', wed9pmAvg);

        console.log('wed 10pm', wed10pm, wed10pm.length);
        let wed10pmTotal = 0;
        wed10pm.forEach((item) => (wed10pmTotal += JSON.parse(item.Count)));
        let wed10pmAvg = wed10pmTotal / wed10pm.length;
        console.log('wed 10pm Average: ', wed10pmAvg);

        console.log('wed 11pm', wed11pm, wed11pm.length);
        let wed11pmTotal = 0;
        wed11pm.forEach((item) => (wed11pmTotal += JSON.parse(item.Count)));
        let wed11pmAvg = wed11pmTotal / wed11pm.length;
        console.log('wed 11pm Average: ', wed11pmAvg);

        let thu12am = thu.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'AM'
        );
        let thu1am = thu.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'AM'
        );
        let thu2am = thu.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'AM'
        );
        let thu3am = thu.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'AM'
        );
        let thu4am = thu.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'AM'
        );
        let thu5am = thu.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'AM'
        );
        let thu6am = thu.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'AM'
        );
        let thu7am = thu.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'AM'
        );
        let thu8am = thu.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'AM'
        );
        let thu9am = thu.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'AM'
        );
        let thu10am = thu.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'AM'
        );
        let thu11am = thu.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'AM'
        );
        let thu12pm = thu.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'PM'
        );
        let thu1pm = thu.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'PM'
        );
        let thu2pm = thu.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'PM'
        );
        let thu3pm = thu.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'PM'
        );
        let thu4pm = thu.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'PM'
        );
        let thu5pm = thu.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'PM'
        );
        let thu6pm = thu.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'PM'
        );
        let thu7pm = thu.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'PM'
        );
        let thu8pm = thu.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'PM'
        );
        let thu9pm = thu.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'PM'
        );
        let thu10pm = thu.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'PM'
        );
        let thu11pm = thu.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'PM'
        );

        console.log('thu', thu, thu.length);

        console.log('thu 12am', thu12am, thu12am.length);
        let thu12amTotal = 0;
        thu12am.forEach((item) => (thu12amTotal += JSON.parse(item.Count)));
        let thu12amAvg = thu12amTotal / thu12am.length;
        console.log('thu 12am Average: ', thu12amAvg);

        console.log('thu 1am', thu1am, thu1am.length);
        let thu1amTotal = 0;
        thu1am.forEach((item) => (thu1amTotal += JSON.parse(item.Count)));
        let thu1amAvg = thu1amTotal / thu1am.length;
        console.log('thu 1am Average: ', thu1amAvg);

        console.log('thu 2am', thu2am, thu2am.length);
        let thu2amTotal = 0;
        thu2am.forEach((item) => (thu2amTotal += JSON.parse(item.Count)));
        let thu2amAvg = thu2amTotal / thu2am.length;
        console.log('thu 2am Average: ', thu2amAvg);

        console.log('thu 3am', thu3am, thu3am.length);
        let thu3amTotal = 0;
        thu3am.forEach((item) => (thu3amTotal += JSON.parse(item.Count)));
        let thu3amAvg = thu3amTotal / thu3am.length;
        console.log('thu 3am Average: ', thu3amAvg);

        console.log('thu 4am', thu4am, thu4am.length);
        let thu4amTotal = 0;
        thu4am.forEach((item) => (thu4amTotal += JSON.parse(item.Count)));
        let thu4amAvg = thu4amTotal / thu4am.length;
        console.log('thu 4am Average: ', thu4amAvg);

        console.log('thu 5am', thu5am, thu5am.length);
        let thu5amTotal = 0;
        thu5am.forEach((item) => (thu5amTotal += JSON.parse(item.Count)));
        let thu5amAvg = thu5amTotal / thu5am.length;
        console.log('thu 5am Average: ', thu5amAvg);

        console.log('thu 6am', thu6am, thu6am.length);
        let thu6amTotal = 0;
        thu6am.forEach((item) => (thu6amTotal += JSON.parse(item.Count)));
        let thu6amAvg = thu6amTotal / thu6am.length;
        console.log('thu 6am Average: ', thu6amAvg);

        console.log('thu 7am', thu7am, thu7am.length);
        let thu7amTotal = 0;
        thu7am.forEach((item) => (thu7amTotal += JSON.parse(item.Count)));
        let thu7amAvg = thu7amTotal / thu7am.length;
        console.log('thu 7am Average: ', thu7amAvg);

        console.log('thu 8am', thu8am, thu8am.length);
        let thu8amTotal = 0;
        thu8am.forEach((item) => (thu8amTotal += JSON.parse(item.Count)));
        let thu8amAvg = thu8amTotal / thu8am.length;
        console.log('thu 8am Average: ', thu8amAvg);

        console.log('thu 9am', thu9am, thu9am.length);
        let thu9amTotal = 0;
        thu9am.forEach((item) => (thu9amTotal += JSON.parse(item.Count)));
        let thu9amAvg = thu9amTotal / thu9am.length;
        console.log('thu 9am Average: ', thu9amAvg);

        console.log('thu 10am', thu10am, thu10am.length);
        let thu10amTotal = 0;
        thu10am.forEach((item) => (thu10amTotal += JSON.parse(item.Count)));
        let thu10amAvg = thu10amTotal / thu10am.length;
        console.log('thu 10am Average: ', thu10amAvg);

        console.log('thu 11am', thu11am, thu11am.length);
        let thu11amTotal = 0;
        thu11am.forEach((item) => (thu11amTotal += JSON.parse(item.Count)));
        let thu11amAvg = thu11amTotal / thu11am.length;
        console.log('thu 11am Average: ', thu11amAvg);

        console.log('thu 12pm', thu12pm, thu12pm.length);
        let thu12pmTotal = 0;
        thu12pm.forEach((item) => (thu12pmTotal += JSON.parse(item.Count)));
        let thu12pmAvg = thu12pmTotal / thu12pm.length;
        console.log('thu 12pm Average: ', thu12pmAvg);

        console.log('thu 1pm', thu1pm, thu1pm.length);
        let thu1pmTotal = 0;
        thu1pm.forEach((item) => (thu1pmTotal += JSON.parse(item.Count)));
        let thu1pmAvg = thu1pmTotal / thu1pm.length;
        console.log('thu 1pm Average: ', thu1pmAvg);

        console.log('thu 2pm', thu2pm, thu2pm.length);
        let thu2pmTotal = 0;
        thu2pm.forEach((item) => (thu2pmTotal += JSON.parse(item.Count)));
        let thu2pmAvg = thu2pmTotal / thu2pm.length;
        console.log('thu 2pm Average: ', thu2pmAvg);

        console.log('thu 3pm', thu3pm, thu3pm.length);
        let thu3pmTotal = 0;
        thu3pm.forEach((item) => (thu3pmTotal += JSON.parse(item.Count)));
        let thu3pmAvg = thu3pmTotal / thu3pm.length;
        console.log('thu 3pm Average: ', thu3pmAvg);

        console.log('thu 4pm', thu4pm, thu4pm.length);
        let thu4pmTotal = 0;
        thu4pm.forEach((item) => (thu4pmTotal += JSON.parse(item.Count)));
        let thu4pmAvg = thu4pmTotal / thu4pm.length;
        console.log('thu 4pm Average: ', thu4pmAvg);

        console.log('thu 5pm', thu5pm, thu5pm.length);
        let thu5pmTotal = 0;
        thu5pm.forEach((item) => (thu5pmTotal += JSON.parse(item.Count)));
        let thu5pmAvg = thu5pmTotal / thu5pm.length;
        console.log('thu 5pm Average: ', thu5pmAvg);

        console.log('thu 6pm', thu6pm, thu6pm.length);
        let thu6pmTotal = 0;
        thu6pm.forEach((item) => (thu6pmTotal += JSON.parse(item.Count)));
        let thu6pmAvg = thu6pmTotal / thu6pm.length;
        console.log('thu 6pm Average: ', thu6pmAvg);

        console.log('thu 7pm', thu7pm, thu7pm.length);
        let thu7pmTotal = 0;
        thu7pm.forEach((item) => (thu7pmTotal += JSON.parse(item.Count)));
        let thu7pmAvg = thu7pmTotal / thu7pm.length;
        console.log('thu 7pm Average: ', thu7pmAvg);

        console.log('thu 8pm', thu8pm, thu8pm.length);
        let thu8pmTotal = 0;
        thu8pm.forEach((item) => (thu8pmTotal += JSON.parse(item.Count)));
        let thu8pmAvg = thu8pmTotal / thu8pm.length;
        console.log('thu 8pm Average: ', thu8pmAvg);

        console.log('thu 9pm', thu9pm, thu9pm.length);
        let thu9pmTotal = 0;
        thu9pm.forEach((item) => (thu9pmTotal += JSON.parse(item.Count)));
        let thu9pmAvg = thu9pmTotal / thu9pm.length;
        console.log('thu 9pm Average: ', thu9pmAvg);

        console.log('thu 10pm', thu10pm, thu10pm.length);
        let thu10pmTotal = 0;
        thu10pm.forEach((item) => (thu10pmTotal += JSON.parse(item.Count)));
        let thu10pmAvg = thu10pmTotal / thu10pm.length;
        console.log('thu 10pm Average: ', thu10pmAvg);

        console.log('thu 11pm', thu11pm, thu11pm.length);
        let thu11pmTotal = 0;
        thu11pm.forEach((item) => (thu11pmTotal += JSON.parse(item.Count)));
        let thu11pmAvg = thu11pmTotal / thu11pm.length;
        console.log('thu 11pm Average: ', thu11pmAvg);

        let fri12am = fri.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'AM'
        );
        let fri1am = fri.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'AM'
        );
        let fri2am = fri.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'AM'
        );
        let fri3am = fri.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'AM'
        );
        let fri4am = fri.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'AM'
        );
        let fri5am = fri.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'AM'
        );
        let fri6am = fri.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'AM'
        );
        let fri7am = fri.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'AM'
        );
        let fri8am = fri.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'AM'
        );
        let fri9am = fri.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'AM'
        );
        let fri10am = fri.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'AM'
        );
        let fri11am = fri.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'AM'
        );
        let fri12pm = fri.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'PM'
        );
        let fri1pm = fri.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'PM'
        );
        let fri2pm = fri.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'PM'
        );
        let fri3pm = fri.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'PM'
        );
        let fri4pm = fri.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'PM'
        );
        let fri5pm = fri.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'PM'
        );
        let fri6pm = fri.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'PM'
        );
        let fri7pm = fri.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'PM'
        );
        let fri8pm = fri.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'PM'
        );
        let fri9pm = fri.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'PM'
        );
        let fri10pm = fri.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'PM'
        );
        let fri11pm = fri.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'PM'
        );

        console.log('fri', fri, fri.length);

        console.log('fri 12am', fri12am, fri12am.length);
        let fri12amTotal = 0;
        fri12am.forEach((item) => (fri12amTotal += JSON.parse(item.Count)));
        let fri12amAvg = fri12amTotal / fri12am.length;
        console.log('fri 12am Average: ', fri12amAvg);

        console.log('fri 1am', fri1am, fri1am.length);
        let fri1amTotal = 0;
        fri1am.forEach((item) => (fri1amTotal += JSON.parse(item.Count)));
        let fri1amAvg = fri1amTotal / fri1am.length;
        console.log('fri 1am Average: ', fri1amAvg);

        console.log('fri 2am', fri2am, fri2am.length);
        let fri2amTotal = 0;
        fri2am.forEach((item) => (fri2amTotal += JSON.parse(item.Count)));
        let fri2amAvg = fri2amTotal / fri2am.length;
        console.log('fri 2am Average: ', fri2amAvg);

        console.log('fri 3am', fri3am, fri3am.length);
        let fri3amTotal = 0;
        fri3am.forEach((item) => (fri3amTotal += JSON.parse(item.Count)));
        let fri3amAvg = fri3amTotal / fri3am.length;
        console.log('fri 3am Average: ', fri3amAvg);

        console.log('fri 4am', fri4am, fri4am.length);
        let fri4amTotal = 0;
        fri4am.forEach((item) => (fri4amTotal += JSON.parse(item.Count)));
        let fri4amAvg = fri4amTotal / fri4am.length;
        console.log('fri 4am Average: ', fri4amAvg);

        console.log('fri 5am', fri5am, fri5am.length);
        let fri5amTotal = 0;
        fri5am.forEach((item) => (fri5amTotal += JSON.parse(item.Count)));
        let fri5amAvg = fri5amTotal / fri5am.length;
        console.log('fri 5am Average: ', fri5amAvg);

        console.log('fri 6am', fri6am, fri6am.length);
        let fri6amTotal = 0;
        fri6am.forEach((item) => (fri6amTotal += JSON.parse(item.Count)));
        let fri6amAvg = fri6amTotal / fri6am.length;
        console.log('fri 6am Average: ', fri6amAvg);

        console.log('fri 7am', fri7am, fri7am.length);
        let fri7amTotal = 0;
        fri7am.forEach((item) => (fri7amTotal += JSON.parse(item.Count)));
        let fri7amAvg = fri7amTotal / fri7am.length;
        console.log('fri 7am Average: ', fri7amAvg);

        console.log('fri 8am', fri8am, fri8am.length);
        let fri8amTotal = 0;
        fri8am.forEach((item) => (fri8amTotal += JSON.parse(item.Count)));
        let fri8amAvg = fri8amTotal / fri8am.length;
        console.log('fri 8am Average: ', fri8amAvg);

        console.log('fri 9am', fri9am, fri9am.length);
        let fri9amTotal = 0;
        fri9am.forEach((item) => (fri9amTotal += JSON.parse(item.Count)));
        let fri9amAvg = fri9amTotal / fri9am.length;
        console.log('fri 9am Average: ', fri9amAvg);

        console.log('fri 10am', fri10am, fri10am.length);
        let fri10amTotal = 0;
        fri10am.forEach((item) => (fri10amTotal += JSON.parse(item.Count)));
        let fri10amAvg = fri10amTotal / fri10am.length;
        console.log('fri 10am Average: ', fri10amAvg);

        console.log('fri 11am', fri11am, fri11am.length);
        let fri11amTotal = 0;
        fri11am.forEach((item) => (fri11amTotal += JSON.parse(item.Count)));
        let fri11amAvg = fri11amTotal / fri11am.length;
        console.log('fri 11am Average: ', fri11amAvg);

        console.log('fri 12pm', fri12pm, fri12pm.length);
        let fri12pmTotal = 0;
        fri12pm.forEach((item) => (fri12pmTotal += JSON.parse(item.Count)));
        let fri12pmAvg = fri12pmTotal / fri12pm.length;
        console.log('fri 12pm Average: ', fri12pmAvg);

        console.log('fri 1pm', fri1pm, fri1pm.length);
        let fri1pmTotal = 0;
        fri1pm.forEach((item) => (fri1pmTotal += JSON.parse(item.Count)));
        let fri1pmAvg = fri1pmTotal / fri1pm.length;
        console.log('fri 1pm Average: ', fri1pmAvg);

        console.log('fri 2pm', fri2pm, fri2pm.length);
        let fri2pmTotal = 0;
        fri2pm.forEach((item) => (fri2pmTotal += JSON.parse(item.Count)));
        let fri2pmAvg = fri2pmTotal / fri2pm.length;
        console.log('fri 2pm Average: ', fri2pmAvg);

        console.log('fri 3pm', fri3pm, fri3pm.length);
        let fri3pmTotal = 0;
        fri3pm.forEach((item) => (fri3pmTotal += JSON.parse(item.Count)));
        let fri3pmAvg = fri3pmTotal / fri3pm.length;
        console.log('fri 3pm Average: ', fri3pmAvg);

        console.log('fri 4pm', fri4pm, fri4pm.length);
        let fri4pmTotal = 0;
        fri4pm.forEach((item) => (fri4pmTotal += JSON.parse(item.Count)));
        let fri4pmAvg = fri4pmTotal / fri4pm.length;
        console.log('fri 4pm Average: ', fri4pmAvg);

        console.log('fri 5pm', fri5pm, fri5pm.length);
        let fri5pmTotal = 0;
        fri5pm.forEach((item) => (fri5pmTotal += JSON.parse(item.Count)));
        let fri5pmAvg = fri5pmTotal / fri5pm.length;
        console.log('fri 5pm Average: ', fri5pmAvg);

        console.log('fri 6pm', fri6pm, fri6pm.length);
        let fri6pmTotal = 0;
        fri6pm.forEach((item) => (fri6pmTotal += JSON.parse(item.Count)));
        let fri6pmAvg = fri6pmTotal / fri6pm.length;
        console.log('fri 6pm Average: ', fri6pmAvg);

        console.log('fri 7pm', fri7pm, fri7pm.length);
        let fri7pmTotal = 0;
        fri7pm.forEach((item) => (fri7pmTotal += JSON.parse(item.Count)));
        let fri7pmAvg = fri7pmTotal / fri7pm.length;
        console.log('fri 7pm Average: ', fri7pmAvg);

        console.log('fri 8pm', fri8pm, fri8pm.length);
        let fri8pmTotal = 0;
        fri8pm.forEach((item) => (fri8pmTotal += JSON.parse(item.Count)));
        let fri8pmAvg = fri8pmTotal / fri8pm.length;
        console.log('fri 8pm Average: ', fri8pmAvg);

        console.log('fri 9pm', fri9pm, fri9pm.length);
        let fri9pmTotal = 0;
        fri9pm.forEach((item) => (fri9pmTotal += JSON.parse(item.Count)));
        let fri9pmAvg = fri9pmTotal / fri9pm.length;
        console.log('fri 9pm Average: ', fri9pmAvg);

        console.log('fri 10pm', fri10pm, fri10pm.length);
        let fri10pmTotal = 0;
        fri10pm.forEach((item) => (fri10pmTotal += JSON.parse(item.Count)));
        let fri10pmAvg = fri10pmTotal / fri10pm.length;
        console.log('fri 10pm Average: ', fri10pmAvg);

        console.log('fri 11pm', fri11pm, fri11pm.length);
        let fri11pmTotal = 0;
        fri11pm.forEach((item) => (fri11pmTotal += JSON.parse(item.Count)));
        let fri11pmAvg = fri11pmTotal / fri11pm.length;
        console.log('fri 11pm Average: ', fri11pmAvg);

        let sat12am = sat.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'AM'
        );
        let sat1am = sat.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'AM'
        );
        let sat2am = sat.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'AM'
        );
        let sat3am = sat.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'AM'
        );
        let sat4am = sat.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'AM'
        );
        let sat5am = sat.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'AM'
        );
        let sat6am = sat.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'AM'
        );
        let sat7am = sat.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'AM'
        );
        let sat8am = sat.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'AM'
        );
        let sat9am = sat.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'AM'
        );
        let sat10am = sat.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'AM'
        );
        let sat11am = sat.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'AM'
        );
        let sat12pm = sat.filter((item) => item.Time.substring(0, 2) === '12'
                                           && item.Time.substring(6) === 'PM'
        );
        let sat1pm = sat.filter((item) => item.Time.substring(0, 2) === '01'
                                          && item.Time.substring(6) === 'PM'
        );
        let sat2pm = sat.filter((item) => item.Time.substring(0, 2) === '02'
                                          && item.Time.substring(6) === 'PM'
        );
        let sat3pm = sat.filter((item) => item.Time.substring(0, 2) === '03'
                                          && item.Time.substring(6) === 'PM'
        );
        let sat4pm = sat.filter((item) => item.Time.substring(0, 2) === '04'
                                          && item.Time.substring(6) === 'PM'
        );
        let sat5pm = sat.filter((item) => item.Time.substring(0, 2) === '05'
                                          && item.Time.substring(6) === 'PM'
        );
        let sat6pm = sat.filter((item) => item.Time.substring(0, 2) === '06'
                                          && item.Time.substring(6) === 'PM'
        );
        let sat7pm = sat.filter((item) => item.Time.substring(0, 2) === '07'
                                          && item.Time.substring(6) === 'PM'
        );
        let sat8pm = sat.filter((item) => item.Time.substring(0, 2) === '08'
                                          && item.Time.substring(6) === 'PM'
        );
        let sat9pm = sat.filter((item) => item.Time.substring(0, 2) === '09'
                                          && item.Time.substring(6) === 'PM'
        );
        let sat10pm = sat.filter((item) => item.Time.substring(0, 2) === '10'
                                           && item.Time.substring(6) === 'PM'
        );
        let sat11pm = sat.filter((item) => item.Time.substring(0, 2) === '11'
                                           && item.Time.substring(6) === 'PM'
        );

        console.log('sat', sat, sat.length);

        console.log('sat 12am', sat12am, sat12am.length);
        let sat12amTotal = 0;
        sat12am.forEach((item) => (sat12amTotal += JSON.parse(item.Count)));
        let sat12amAvg = sat12amTotal / sat12am.length;
        console.log('sat 12am Average: ', sat12amAvg);

        console.log('sat 1am', sat1am, sat1am.length);
        let sat1amTotal = 0;
        sat1am.forEach((item) => (sat1amTotal += JSON.parse(item.Count)));
        let sat1amAvg = sat1amTotal / sat1am.length;
        console.log('sat 1am Average: ', sat1amAvg);

        console.log('sat 2am', sat2am, sat2am.length);
        let sat2amTotal = 0;
        sat2am.forEach((item) => (sat2amTotal += JSON.parse(item.Count)));
        let sat2amAvg = sat2amTotal / sat2am.length;
        console.log('sat 2am Average: ', sat2amAvg);

        console.log('sat 3am', sat3am, sat3am.length);
        let sat3amTotal = 0;
        sat3am.forEach((item) => (sat3amTotal += JSON.parse(item.Count)));
        let sat3amAvg = sat3amTotal / sat3am.length;
        console.log('sat 3am Average: ', sat3amAvg);

        console.log('sat 4am', sat4am, sat4am.length);
        let sat4amTotal = 0;
        sat4am.forEach((item) => (sat4amTotal += JSON.parse(item.Count)));
        let sat4amAvg = sat4amTotal / sat4am.length;
        console.log('sat 4am Average: ', sat4amAvg);

        console.log('sat 5am', sat5am, sat5am.length);
        let sat5amTotal = 0;
        sat5am.forEach((item) => (sat5amTotal += JSON.parse(item.Count)));
        let sat5amAvg = sat5amTotal / sat5am.length;
        console.log('sat 5am Average: ', sat5amAvg);

        console.log('sat 6am', sat6am, sat6am.length);
        let sat6amTotal = 0;
        sat6am.forEach((item) => (sat6amTotal += JSON.parse(item.Count)));
        let sat6amAvg = sat6amTotal / sat6am.length;
        console.log('sat 6am Average: ', sat6amAvg);

        console.log('sat 7am', sat7am, sat7am.length);
        let sat7amTotal = 0;
        sat7am.forEach((item) => (sat7amTotal += JSON.parse(item.Count)));
        let sat7amAvg = sat7amTotal / sat7am.length;
        console.log('sat 7am Average: ', sat7amAvg);

        console.log('sat 8am', sat8am, sat8am.length);
        let sat8amTotal = 0;
        sat8am.forEach((item) => (sat8amTotal += JSON.parse(item.Count)));
        let sat8amAvg = sat8amTotal / sat8am.length;
        console.log('sat 8am Average: ', sat8amAvg);

        console.log('sat 9am', sat9am, sat9am.length);
        let sat9amTotal = 0;
        sat9am.forEach((item) => (sat9amTotal += JSON.parse(item.Count)));
        let sat9amAvg = sat9amTotal / sat9am.length;
        console.log('sat 9am Average: ', sat9amAvg);

        console.log('sat 10am', sat10am, sat10am.length);
        let sat10amTotal = 0;
        sat10am.forEach((item) => (sat10amTotal += JSON.parse(item.Count)));
        let sat10amAvg = sat10amTotal / sat10am.length;
        console.log('sat 10am Average: ', sat10amAvg);

        console.log('sat 11am', sat11am, sat11am.length);
        let sat11amTotal = 0;
        sat11am.forEach((item) => (sat11amTotal += JSON.parse(item.Count)));
        let sat11amAvg = sat11amTotal / sat11am.length;
        console.log('sat 11am Average: ', sat11amAvg);

        console.log('sat 12pm', sat12pm, sat12pm.length);
        let sat12pmTotal = 0;
        sat12pm.forEach((item) => (sat12pmTotal += JSON.parse(item.Count)));
        let sat12pmAvg = sat12pmTotal / sat12pm.length;
        console.log('sat 12pm Average: ', sat12pmAvg);

        console.log('sat 1pm', sat1pm, sat1pm.length);
        let sat1pmTotal = 0;
        sat1pm.forEach((item) => (sat1pmTotal += JSON.parse(item.Count)));
        let sat1pmAvg = sat1pmTotal / sat1pm.length;
        console.log('sat 1pm Average: ', sat1pmAvg);

        console.log('sat 2pm', sat2pm, sat2pm.length);
        let sat2pmTotal = 0;
        sat2pm.forEach((item) => (sat2pmTotal += JSON.parse(item.Count)));
        let sat2pmAvg = sat2pmTotal / sat2pm.length;
        console.log('sat 2pm Average: ', sat2pmAvg);

        console.log('sat 3pm', sat3pm, sat3pm.length);
        let sat3pmTotal = 0;
        sat3pm.forEach((item) => (sat3pmTotal += JSON.parse(item.Count)));
        let sat3pmAvg = sat3pmTotal / sat3pm.length;
        console.log('sat 3pm Average: ', sat3pmAvg);

        console.log('sat 4pm', sat4pm, sat4pm.length);
        let sat4pmTotal = 0;
        sat4pm.forEach((item) => (sat4pmTotal += JSON.parse(item.Count)));
        let sat4pmAvg = sat4pmTotal / sat4pm.length;
        console.log('sat 4pm Average: ', sat4pmAvg);

        console.log('sat 5pm', sat5pm, sat5pm.length);
        let sat5pmTotal = 0;
        sat5pm.forEach((item) => (sat5pmTotal += JSON.parse(item.Count)));
        let sat5pmAvg = sat5pmTotal / sat5pm.length;
        console.log('sat 5pm Average: ', sat5pmAvg);

        console.log('sat 6pm', sat6pm, sat6pm.length);
        let sat6pmTotal = 0;
        sat6pm.forEach((item) => (sat6pmTotal += JSON.parse(item.Count)));
        let sat6pmAvg = sat6pmTotal / sat6pm.length;
        console.log('sat 6pm Average: ', sat6pmAvg);

        console.log('sat 7pm', sat7pm, sat7pm.length);
        let sat7pmTotal = 0;
        sat7pm.forEach((item) => (sat7pmTotal += JSON.parse(item.Count)));
        let sat7pmAvg = sat7pmTotal / sat7pm.length;
        console.log('sat 7pm Average: ', sat7pmAvg);

        console.log('sat 8pm', sat8pm, sat8pm.length);
        let sat8pmTotal = 0;
        sat8pm.forEach((item) => (sat8pmTotal += JSON.parse(item.Count)));
        let sat8pmAvg = sat8pmTotal / sat8pm.length;
        console.log('sat 8pm Average: ', sat8pmAvg);

        console.log('sat 9pm', sat9pm, sat9pm.length);
        let sat9pmTotal = 0;
        sat9pm.forEach((item) => (sat9pmTotal += JSON.parse(item.Count)));
        let sat9pmAvg = sat9pmTotal / sat9pm.length;
        console.log('sat 9pm Average: ', sat9pmAvg);

        console.log('sat 10pm', sat10pm, sat10pm.length);
        let sat10pmTotal = 0;
        sat10pm.forEach((item) => (sat10pmTotal += JSON.parse(item.Count)));
        let sat10pmAvg = sat10pmTotal / sat10pm.length;
        console.log('sat 10pm Average: ', sat10pmAvg);

        console.log('sat 11pm', sat11pm, sat11pm.length);
        let sat11pmTotal = 0;
        sat11pm.forEach((item) => (sat11pmTotal += JSON.parse(item.Count)));
        let sat11pmAvg = sat11pmTotal / sat11pm.length;
        console.log('sat 11pm Average: ', sat11pmAvg);

        var data = [
            {
                x: ['5 am', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm',
                    '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm', '11 pm',
                    '12 am'],
                y: ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
                z: [[sat5amAvg, sat6amAvg, sat7amAvg, sat8amAvg, sat9amAvg, sat10amAvg, sat11amAvg,
                     sat12pmAvg, sat1pmAvg, sat2pmAvg, sat3pmAvg, sat4pmAvg, sat5pmAvg, sat6pmAvg,
                     sat7pmAvg, sat8pmAvg, sat9pmAvg, sat10pmAvg, sat11pmAvg, sat12amAvg],
                    [fri5amAvg, fri6amAvg, fri7amAvg, fri8amAvg, fri9amAvg, fri10amAvg, fri11amAvg,
                     fri12pmAvg, fri1pmAvg, fri2pmAvg, fri3pmAvg, fri4pmAvg, fri5pmAvg, fri6pmAvg,
                     fri7pmAvg, fri8pmAvg, fri9pmAvg, fri10pmAvg, fri11pmAvg, fri12amAvg],
                    [thu5amAvg, thu6amAvg, thu7amAvg, thu8amAvg, thu9amAvg, thu10amAvg, thu11amAvg,
                     thu12pmAvg, thu1pmAvg, thu2pmAvg, thu3pmAvg, thu4pmAvg, thu5pmAvg, thu6pmAvg,
                     thu7pmAvg, thu8pmAvg, thu9pmAvg, thu10pmAvg, thu11pmAvg, thu12amAvg],
                    [wed5amAvg, wed6amAvg, wed7amAvg, wed8amAvg, wed9amAvg, wed10amAvg, wed11amAvg,
                     wed12pmAvg, wed1pmAvg, wed2pmAvg, wed3pmAvg, wed4pmAvg, wed5pmAvg, wed6pmAvg,
                     wed7pmAvg, wed8pmAvg, wed9pmAvg, wed10pmAvg, wed11pmAvg, wed12amAvg],
                    [tue5amAvg, tue6amAvg, tue7amAvg, tue8amAvg, tue9amAvg, tue10amAvg, tue11amAvg,
                     tue12pmAvg, tue1pmAvg, tue2pmAvg, tue3pmAvg, tue4pmAvg, tue5pmAvg, tue6pmAvg,
                     tue7pmAvg, tue8pmAvg, tue9pmAvg, tue10pmAvg, tue11pmAvg, tue12amAvg],
                    [mon5amAvg, mon6amAvg, mon7amAvg, mon8amAvg, mon9amAvg, mon10amAvg, mon11amAvg,
                     mon12pmAvg, mon1pmAvg, mon2pmAvg, mon3pmAvg, mon4pmAvg, mon5pmAvg, mon6pmAvg,
                     mon7pmAvg, mon8pmAvg, mon9pmAvg, mon10pmAvg, mon11pmAvg, mon12amAvg],
                    [sun5amAvg, sun6amAvg, sun7amAvg, sun8amAvg, sun9amAvg, sun10amAvg, sun11amAvg,
                     sun12pmAvg, sun1pmAvg, sun2pmAvg, sun3pmAvg, sun4pmAvg, sun5pmAvg, sun6pmAvg,
                     sun7pmAvg, sun8pmAvg, sun9pmAvg, sun10pmAvg, sun11pmAvg, sun12amAvg],
                ],
                type: 'heatmap'
            }
        ];

        var layout = {
            title: 'Marino Center- 2nd Floor',
            autosize: true
        };

        Plotly.newPlot('marino-2nd-floor', data, layout);
    });