fetch('http://54.152.20.175:5000/')
    .then((response) => response.json())
    .then((json) => {
        let sun = json.filter((item) => item.Location === 'SquashBuster Fourth Floor'
                                        && item.Weekday === 'Sunday'
        );
        let mon = json.filter((item) => item.Location === 'SquashBuster Fourth Floor'
                                        && item.Weekday === 'Monday'
        );
        let tue = json.filter((item) => item.Location === 'SquashBuster Fourth Floor'
                                        && item.Weekday === 'Tuesday'
        );
        let wed = json.filter((item) => item.Location === 'SquashBuster Fourth Floor'
                                        && item.Weekday === 'Wednesday'
        );
        let thu = json.filter((item) => item.Location === 'SquashBuster Fourth Floor'
                                        && item.Weekday === 'Thursday'
        );
        let fri = json.filter((item) => item.Location === 'SquashBuster Fourth Floor'
                                        && item.Weekday === 'Friday'
        );
        let sat = json.filter((item) => item.Location === 'SquashBuster Fourth Floor'
                                        && item.Weekday === 'Saturday'
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

        let sun12amTotal = 0;
        sun12am.forEach((item) => (sun12amTotal += JSON.parse(item.Count)));
        let sun12amAvg = sun12amTotal / sun12am.length;

        let sun1amTotal = 0;
        sun1am.forEach((item) => (sun1amTotal += JSON.parse(item.Count)));
        let sun1amAvg = sun1amTotal / sun1am.length;

        let sun2amTotal = 0;
        sun2am.forEach((item) => (sun2amTotal += JSON.parse(item.Count)));
        let sun2amAvg = sun2amTotal / sun2am.length;

        let sun3amTotal = 0;
        sun3am.forEach((item) => (sun3amTotal += JSON.parse(item.Count)));
        let sun3amAvg = sun3amTotal / sun3am.length;

        let sun4amTotal = 0;
        sun4am.forEach((item) => (sun4amTotal += JSON.parse(item.Count)));
        let sun4amAvg = sun4amTotal / sun4am.length;

        let sun5amTotal = 0;
        sun5am.forEach((item) => (sun5amTotal += JSON.parse(item.Count)));
        let sun5amAvg = sun5amTotal / sun5am.length;

        let sun6amTotal = 0;
        sun6am.forEach((item) => (sun6amTotal += JSON.parse(item.Count)));
        let sun6amAvg = sun6amTotal / sun6am.length;

        let sun7amTotal = 0;
        sun7am.forEach((item) => (sun7amTotal += JSON.parse(item.Count)));
        let sun7amAvg = sun7amTotal / sun7am.length;

        let sun8amTotal = 0;
        sun8am.forEach((item) => (sun8amTotal += JSON.parse(item.Count)));
        let sun8amAvg = sun8amTotal / sun8am.length;

        let sun9amTotal = 0;
        sun9am.forEach((item) => (sun9amTotal += JSON.parse(item.Count)));
        let sun9amAvg = sun9amTotal / sun9am.length;

        let sun10amTotal = 0;
        sun10am.forEach((item) => (sun10amTotal += JSON.parse(item.Count)));
        let sun10amAvg = sun10amTotal / sun10am.length;

        let sun11amTotal = 0;
        sun11am.forEach((item) => (sun11amTotal += JSON.parse(item.Count)));
        let sun11amAvg = sun11amTotal / sun11am.length;

        let sun12pmTotal = 0;
        sun12pm.forEach((item) => (sun12pmTotal += JSON.parse(item.Count)));
        let sun12pmAvg = sun12pmTotal / sun12pm.length;

        let sun1pmTotal = 0;
        sun1pm.forEach((item) => (sun1pmTotal += JSON.parse(item.Count)));
        let sun1pmAvg = sun1pmTotal / sun1pm.length;

        let sun2pmTotal = 0;
        sun2pm.forEach((item) => (sun2pmTotal += JSON.parse(item.Count)));
        let sun2pmAvg = sun2pmTotal / sun2pm.length;

        let sun3pmTotal = 0;
        sun3pm.forEach((item) => (sun3pmTotal += JSON.parse(item.Count)));
        let sun3pmAvg = sun3pmTotal / sun3pm.length;

        let sun4pmTotal = 0;
        sun4pm.forEach((item) => (sun4pmTotal += JSON.parse(item.Count)));
        let sun4pmAvg = sun4pmTotal / sun4pm.length;

        let sun5pmTotal = 0;
        sun5pm.forEach((item) => (sun5pmTotal += JSON.parse(item.Count)));
        let sun5pmAvg = sun5pmTotal / sun5pm.length;

        let sun6pmTotal = 0;
        sun6pm.forEach((item) => (sun6pmTotal += JSON.parse(item.Count)));
        let sun6pmAvg = sun6pmTotal / sun6pm.length;

        let sun7pmTotal = 0;
        sun7pm.forEach((item) => (sun7pmTotal += JSON.parse(item.Count)));
        let sun7pmAvg = sun7pmTotal / sun7pm.length;

        let sun8pmTotal = 0;
        sun8pm.forEach((item) => (sun8pmTotal += JSON.parse(item.Count)));
        let sun8pmAvg = sun8pmTotal / sun8pm.length;

        let sun9pmTotal = 0;
        sun9pm.forEach((item) => (sun9pmTotal += JSON.parse(item.Count)));
        let sun9pmAvg = sun9pmTotal / sun9pm.length;

        let sun10pmTotal = 0;
        sun10pm.forEach((item) => (sun10pmTotal += JSON.parse(item.Count)));
        let sun10pmAvg = sun10pmTotal / sun10pm.length;

        let sun11pmTotal = 0;
        sun11pm.forEach((item) => (sun11pmTotal += JSON.parse(item.Count)));
        let sun11pmAvg = sun11pmTotal / sun11pm.length;

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

        let mon12amTotal = 0;
        mon12am.forEach((item) => (mon12amTotal += JSON.parse(item.Count)));
        let mon12amAvg = mon12amTotal / mon12am.length;

        let mon1amTotal = 0;
        mon1am.forEach((item) => (mon1amTotal += JSON.parse(item.Count)));
        let mon1amAvg = mon1amTotal / mon1am.length;

        let mon2amTotal = 0;
        mon2am.forEach((item) => (mon2amTotal += JSON.parse(item.Count)));
        let mon2amAvg = mon2amTotal / mon2am.length;

        let mon3amTotal = 0;
        mon3am.forEach((item) => (mon3amTotal += JSON.parse(item.Count)));
        let mon3amAvg = mon3amTotal / mon3am.length;

        let mon4amTotal = 0;
        mon4am.forEach((item) => (mon4amTotal += JSON.parse(item.Count)));
        let mon4amAvg = mon4amTotal / mon4am.length;

        let mon5amTotal = 0;
        mon5am.forEach((item) => (mon5amTotal += JSON.parse(item.Count)));
        let mon5amAvg = mon5amTotal / mon5am.length;

        let mon6amTotal = 0;
        mon6am.forEach((item) => (mon6amTotal += JSON.parse(item.Count)));
        let mon6amAvg = mon6amTotal / mon6am.length;

        let mon7amTotal = 0;
        mon7am.forEach((item) => (mon7amTotal += JSON.parse(item.Count)));
        let mon7amAvg = mon7amTotal / mon7am.length;

        let mon8amTotal = 0;
        mon8am.forEach((item) => (mon8amTotal += JSON.parse(item.Count)));
        let mon8amAvg = mon8amTotal / mon8am.length;

        let mon9amTotal = 0;
        mon9am.forEach((item) => (mon9amTotal += JSON.parse(item.Count)));
        let mon9amAvg = mon9amTotal / mon9am.length;

        let mon10amTotal = 0;
        mon10am.forEach((item) => (mon10amTotal += JSON.parse(item.Count)));
        let mon10amAvg = mon10amTotal / mon10am.length;

        let mon11amTotal = 0;
        mon11am.forEach((item) => (mon11amTotal += JSON.parse(item.Count)));
        let mon11amAvg = mon11amTotal / mon11am.length;

        let mon12pmTotal = 0;
        mon12pm.forEach((item) => (mon12pmTotal += JSON.parse(item.Count)));
        let mon12pmAvg = mon12pmTotal / mon12pm.length;

        let mon1pmTotal = 0;
        mon1pm.forEach((item) => (mon1pmTotal += JSON.parse(item.Count)));
        let mon1pmAvg = mon1pmTotal / mon1pm.length;

        let mon2pmTotal = 0;
        mon2pm.forEach((item) => (mon2pmTotal += JSON.parse(item.Count)));
        let mon2pmAvg = mon2pmTotal / mon2pm.length;

        let mon3pmTotal = 0;
        mon3pm.forEach((item) => (mon3pmTotal += JSON.parse(item.Count)));
        let mon3pmAvg = mon3pmTotal / mon3pm.length;

        let mon4pmTotal = 0;
        mon4pm.forEach((item) => (mon4pmTotal += JSON.parse(item.Count)));
        let mon4pmAvg = mon4pmTotal / mon4pm.length;

        let mon5pmTotal = 0;
        mon5pm.forEach((item) => (mon5pmTotal += JSON.parse(item.Count)));
        let mon5pmAvg = mon5pmTotal / mon5pm.length;

        let mon6pmTotal = 0;
        mon6pm.forEach((item) => (mon6pmTotal += JSON.parse(item.Count)));
        let mon6pmAvg = mon6pmTotal / mon6pm.length;

        let mon7pmTotal = 0;
        mon7pm.forEach((item) => (mon7pmTotal += JSON.parse(item.Count)));
        let mon7pmAvg = mon7pmTotal / mon7pm.length;

        let mon8pmTotal = 0;
        mon8pm.forEach((item) => (mon8pmTotal += JSON.parse(item.Count)));
        let mon8pmAvg = mon8pmTotal / mon8pm.length;

        let mon9pmTotal = 0;
        mon9pm.forEach((item) => (mon9pmTotal += JSON.parse(item.Count)));
        let mon9pmAvg = mon9pmTotal / mon9pm.length;

        let mon10pmTotal = 0;
        mon10pm.forEach((item) => (mon10pmTotal += JSON.parse(item.Count)));
        let mon10pmAvg = mon10pmTotal / mon10pm.length;

        let mon11pmTotal = 0;
        mon11pm.forEach((item) => (mon11pmTotal += JSON.parse(item.Count)));
        let mon11pmAvg = mon11pmTotal / mon11pm.length;

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

        let tue12amTotal = 0;
        tue12am.forEach((item) => (tue12amTotal += JSON.parse(item.Count)));
        let tue12amAvg = tue12amTotal / tue12am.length;

        let tue1amTotal = 0;
        tue1am.forEach((item) => (tue1amTotal += JSON.parse(item.Count)));
        let tue1amAvg = tue1amTotal / tue1am.length;

        let tue2amTotal = 0;
        tue2am.forEach((item) => (tue2amTotal += JSON.parse(item.Count)));
        let tue2amAvg = tue2amTotal / tue2am.length;

        let tue3amTotal = 0;
        tue3am.forEach((item) => (tue3amTotal += JSON.parse(item.Count)));
        let tue3amAvg = tue3amTotal / tue3am.length;

        let tue4amTotal = 0;
        tue4am.forEach((item) => (tue4amTotal += JSON.parse(item.Count)));
        let tue4amAvg = tue4amTotal / tue4am.length;

        let tue5amTotal = 0;
        tue5am.forEach((item) => (tue5amTotal += JSON.parse(item.Count)));
        let tue5amAvg = tue5amTotal / tue5am.length;

        let tue6amTotal = 0;
        tue6am.forEach((item) => (tue6amTotal += JSON.parse(item.Count)));
        let tue6amAvg = tue6amTotal / tue6am.length;

        let tue7amTotal = 0;
        tue7am.forEach((item) => (tue7amTotal += JSON.parse(item.Count)));
        let tue7amAvg = tue7amTotal / tue7am.length;

        let tue8amTotal = 0;
        tue8am.forEach((item) => (tue8amTotal += JSON.parse(item.Count)));
        let tue8amAvg = tue8amTotal / tue8am.length;

        let tue9amTotal = 0;
        tue9am.forEach((item) => (tue9amTotal += JSON.parse(item.Count)));
        let tue9amAvg = tue9amTotal / tue9am.length;

        let tue10amTotal = 0;
        tue10am.forEach((item) => (tue10amTotal += JSON.parse(item.Count)));
        let tue10amAvg = tue10amTotal / tue10am.length;

        let tue11amTotal = 0;
        tue11am.forEach((item) => (tue11amTotal += JSON.parse(item.Count)));
        let tue11amAvg = tue11amTotal / tue11am.length;

        let tue12pmTotal = 0;
        tue12pm.forEach((item) => (tue12pmTotal += JSON.parse(item.Count)));
        let tue12pmAvg = tue12pmTotal / tue12pm.length;

        let tue1pmTotal = 0;
        tue1pm.forEach((item) => (tue1pmTotal += JSON.parse(item.Count)));
        let tue1pmAvg = tue1pmTotal / tue1pm.length;

        let tue2pmTotal = 0;
        tue2pm.forEach((item) => (tue2pmTotal += JSON.parse(item.Count)));
        let tue2pmAvg = tue2pmTotal / tue2pm.length;

        let tue3pmTotal = 0;
        tue3pm.forEach((item) => (tue3pmTotal += JSON.parse(item.Count)));
        let tue3pmAvg = tue3pmTotal / tue3pm.length;

        let tue4pmTotal = 0;
        tue4pm.forEach((item) => (tue4pmTotal += JSON.parse(item.Count)));
        let tue4pmAvg = tue4pmTotal / tue4pm.length;

        let tue5pmTotal = 0;
        tue5pm.forEach((item) => (tue5pmTotal += JSON.parse(item.Count)));
        let tue5pmAvg = tue5pmTotal / tue5pm.length;

        let tue6pmTotal = 0;
        tue6pm.forEach((item) => (tue6pmTotal += JSON.parse(item.Count)));
        let tue6pmAvg = tue6pmTotal / tue6pm.length;

        let tue7pmTotal = 0;
        tue7pm.forEach((item) => (tue7pmTotal += JSON.parse(item.Count)));
        let tue7pmAvg = tue7pmTotal / tue7pm.length;

        let tue8pmTotal = 0;
        tue8pm.forEach((item) => (tue8pmTotal += JSON.parse(item.Count)));
        let tue8pmAvg = tue8pmTotal / tue8pm.length;

        let tue9pmTotal = 0;
        tue9pm.forEach((item) => (tue9pmTotal += JSON.parse(item.Count)));
        let tue9pmAvg = tue9pmTotal / tue9pm.length;

        let tue10pmTotal = 0;
        tue10pm.forEach((item) => (tue10pmTotal += JSON.parse(item.Count)));
        let tue10pmAvg = tue10pmTotal / tue10pm.length;

        let tue11pmTotal = 0;
        tue11pm.forEach((item) => (tue11pmTotal += JSON.parse(item.Count)));
        let tue11pmAvg = tue11pmTotal / tue11pm.length;

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

        let wed12amTotal = 0;
        wed12am.forEach((item) => (wed12amTotal += JSON.parse(item.Count)));
        let wed12amAvg = wed12amTotal / wed12am.length;

        let wed1amTotal = 0;
        wed1am.forEach((item) => (wed1amTotal += JSON.parse(item.Count)));
        let wed1amAvg = wed1amTotal / wed1am.length;

        let wed2amTotal = 0;
        wed2am.forEach((item) => (wed2amTotal += JSON.parse(item.Count)));
        let wed2amAvg = wed2amTotal / wed2am.length;

        let wed3amTotal = 0;
        wed3am.forEach((item) => (wed3amTotal += JSON.parse(item.Count)));
        let wed3amAvg = wed3amTotal / wed3am.length;

        let wed4amTotal = 0;
        wed4am.forEach((item) => (wed4amTotal += JSON.parse(item.Count)));
        let wed4amAvg = wed4amTotal / wed4am.length;

        let wed5amTotal = 0;
        wed5am.forEach((item) => (wed5amTotal += JSON.parse(item.Count)));
        let wed5amAvg = wed5amTotal / wed5am.length;

        let wed6amTotal = 0;
        wed6am.forEach((item) => (wed6amTotal += JSON.parse(item.Count)));
        let wed6amAvg = wed6amTotal / wed6am.length;

        let wed7amTotal = 0;
        wed7am.forEach((item) => (wed7amTotal += JSON.parse(item.Count)));
        let wed7amAvg = wed7amTotal / wed7am.length;

        let wed8amTotal = 0;
        wed8am.forEach((item) => (wed8amTotal += JSON.parse(item.Count)));
        let wed8amAvg = wed8amTotal / wed8am.length;

        let wed9amTotal = 0;
        wed9am.forEach((item) => (wed9amTotal += JSON.parse(item.Count)));
        let wed9amAvg = wed9amTotal / wed9am.length;

        let wed10amTotal = 0;
        wed10am.forEach((item) => (wed10amTotal += JSON.parse(item.Count)));
        let wed10amAvg = wed10amTotal / wed10am.length;

        let wed11amTotal = 0;
        wed11am.forEach((item) => (wed11amTotal += JSON.parse(item.Count)));
        let wed11amAvg = wed11amTotal / wed11am.length;

        let wed12pmTotal = 0;
        wed12pm.forEach((item) => (wed12pmTotal += JSON.parse(item.Count)));
        let wed12pmAvg = wed12pmTotal / wed12pm.length;

        let wed1pmTotal = 0;
        wed1pm.forEach((item) => (wed1pmTotal += JSON.parse(item.Count)));
        let wed1pmAvg = wed1pmTotal / wed1pm.length;

        let wed2pmTotal = 0;
        wed2pm.forEach((item) => (wed2pmTotal += JSON.parse(item.Count)));
        let wed2pmAvg = wed2pmTotal / wed2pm.length;

        let wed3pmTotal = 0;
        wed3pm.forEach((item) => (wed3pmTotal += JSON.parse(item.Count)));
        let wed3pmAvg = wed3pmTotal / wed3pm.length;

        let wed4pmTotal = 0;
        wed4pm.forEach((item) => (wed4pmTotal += JSON.parse(item.Count)));
        let wed4pmAvg = wed4pmTotal / wed4pm.length;

        let wed5pmTotal = 0;
        wed5pm.forEach((item) => (wed5pmTotal += JSON.parse(item.Count)));
        let wed5pmAvg = wed5pmTotal / wed5pm.length;

        let wed6pmTotal = 0;
        wed6pm.forEach((item) => (wed6pmTotal += JSON.parse(item.Count)));
        let wed6pmAvg = wed6pmTotal / wed6pm.length;

        let wed7pmTotal = 0;
        wed7pm.forEach((item) => (wed7pmTotal += JSON.parse(item.Count)));
        let wed7pmAvg = wed7pmTotal / wed7pm.length;

        let wed8pmTotal = 0;
        wed8pm.forEach((item) => (wed8pmTotal += JSON.parse(item.Count)));
        let wed8pmAvg = wed8pmTotal / wed8pm.length;

        let wed9pmTotal = 0;
        wed9pm.forEach((item) => (wed9pmTotal += JSON.parse(item.Count)));
        let wed9pmAvg = wed9pmTotal / wed9pm.length;

        let wed10pmTotal = 0;
        wed10pm.forEach((item) => (wed10pmTotal += JSON.parse(item.Count)));
        let wed10pmAvg = wed10pmTotal / wed10pm.length;

        let wed11pmTotal = 0;
        wed11pm.forEach((item) => (wed11pmTotal += JSON.parse(item.Count)));
        let wed11pmAvg = wed11pmTotal / wed11pm.length;

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

        let thu12amTotal = 0;
        thu12am.forEach((item) => (thu12amTotal += JSON.parse(item.Count)));
        let thu12amAvg = thu12amTotal / thu12am.length;

        let thu1amTotal = 0;
        thu1am.forEach((item) => (thu1amTotal += JSON.parse(item.Count)));
        let thu1amAvg = thu1amTotal / thu1am.length;

        let thu2amTotal = 0;
        thu2am.forEach((item) => (thu2amTotal += JSON.parse(item.Count)));
        let thu2amAvg = thu2amTotal / thu2am.length;

        let thu3amTotal = 0;
        thu3am.forEach((item) => (thu3amTotal += JSON.parse(item.Count)));
        let thu3amAvg = thu3amTotal / thu3am.length;

        let thu4amTotal = 0;
        thu4am.forEach((item) => (thu4amTotal += JSON.parse(item.Count)));
        let thu4amAvg = thu4amTotal / thu4am.length;

        let thu5amTotal = 0;
        thu5am.forEach((item) => (thu5amTotal += JSON.parse(item.Count)));
        let thu5amAvg = thu5amTotal / thu5am.length;

        let thu6amTotal = 0;
        thu6am.forEach((item) => (thu6amTotal += JSON.parse(item.Count)));
        let thu6amAvg = thu6amTotal / thu6am.length;

        let thu7amTotal = 0;
        thu7am.forEach((item) => (thu7amTotal += JSON.parse(item.Count)));
        let thu7amAvg = thu7amTotal / thu7am.length;

        let thu8amTotal = 0;
        thu8am.forEach((item) => (thu8amTotal += JSON.parse(item.Count)));
        let thu8amAvg = thu8amTotal / thu8am.length;

        let thu9amTotal = 0;
        thu9am.forEach((item) => (thu9amTotal += JSON.parse(item.Count)));
        let thu9amAvg = thu9amTotal / thu9am.length;

        let thu10amTotal = 0;
        thu10am.forEach((item) => (thu10amTotal += JSON.parse(item.Count)));
        let thu10amAvg = thu10amTotal / thu10am.length;

        let thu11amTotal = 0;
        thu11am.forEach((item) => (thu11amTotal += JSON.parse(item.Count)));
        let thu11amAvg = thu11amTotal / thu11am.length;

        let thu12pmTotal = 0;
        thu12pm.forEach((item) => (thu12pmTotal += JSON.parse(item.Count)));
        let thu12pmAvg = thu12pmTotal / thu12pm.length;

        let thu1pmTotal = 0;
        thu1pm.forEach((item) => (thu1pmTotal += JSON.parse(item.Count)));
        let thu1pmAvg = thu1pmTotal / thu1pm.length;

        let thu2pmTotal = 0;
        thu2pm.forEach((item) => (thu2pmTotal += JSON.parse(item.Count)));
        let thu2pmAvg = thu2pmTotal / thu2pm.length;

        let thu3pmTotal = 0;
        thu3pm.forEach((item) => (thu3pmTotal += JSON.parse(item.Count)));
        let thu3pmAvg = thu3pmTotal / thu3pm.length;

        let thu4pmTotal = 0;
        thu4pm.forEach((item) => (thu4pmTotal += JSON.parse(item.Count)));
        let thu4pmAvg = thu4pmTotal / thu4pm.length;

        let thu5pmTotal = 0;
        thu5pm.forEach((item) => (thu5pmTotal += JSON.parse(item.Count)));
        let thu5pmAvg = thu5pmTotal / thu5pm.length;

        let thu6pmTotal = 0;
        thu6pm.forEach((item) => (thu6pmTotal += JSON.parse(item.Count)));
        let thu6pmAvg = thu6pmTotal / thu6pm.length;

        let thu7pmTotal = 0;
        thu7pm.forEach((item) => (thu7pmTotal += JSON.parse(item.Count)));
        let thu7pmAvg = thu7pmTotal / thu7pm.length;

        let thu8pmTotal = 0;
        thu8pm.forEach((item) => (thu8pmTotal += JSON.parse(item.Count)));
        let thu8pmAvg = thu8pmTotal / thu8pm.length;

        let thu9pmTotal = 0;
        thu9pm.forEach((item) => (thu9pmTotal += JSON.parse(item.Count)));
        let thu9pmAvg = thu9pmTotal / thu9pm.length;

        let thu10pmTotal = 0;
        thu10pm.forEach((item) => (thu10pmTotal += JSON.parse(item.Count)));
        let thu10pmAvg = thu10pmTotal / thu10pm.length;

        let thu11pmTotal = 0;
        thu11pm.forEach((item) => (thu11pmTotal += JSON.parse(item.Count)));
        let thu11pmAvg = thu11pmTotal / thu11pm.length;

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

        let fri12amTotal = 0;
        fri12am.forEach((item) => (fri12amTotal += JSON.parse(item.Count)));
        let fri12amAvg = fri12amTotal / fri12am.length;

        let fri1amTotal = 0;
        fri1am.forEach((item) => (fri1amTotal += JSON.parse(item.Count)));
        let fri1amAvg = fri1amTotal / fri1am.length;

        let fri2amTotal = 0;
        fri2am.forEach((item) => (fri2amTotal += JSON.parse(item.Count)));
        let fri2amAvg = fri2amTotal / fri2am.length;

        let fri3amTotal = 0;
        fri3am.forEach((item) => (fri3amTotal += JSON.parse(item.Count)));
        let fri3amAvg = fri3amTotal / fri3am.length;

        let fri4amTotal = 0;
        fri4am.forEach((item) => (fri4amTotal += JSON.parse(item.Count)));
        let fri4amAvg = fri4amTotal / fri4am.length;

        let fri5amTotal = 0;
        fri5am.forEach((item) => (fri5amTotal += JSON.parse(item.Count)));
        let fri5amAvg = fri5amTotal / fri5am.length;

        let fri6amTotal = 0;
        fri6am.forEach((item) => (fri6amTotal += JSON.parse(item.Count)));
        let fri6amAvg = fri6amTotal / fri6am.length;

        let fri7amTotal = 0;
        fri7am.forEach((item) => (fri7amTotal += JSON.parse(item.Count)));
        let fri7amAvg = fri7amTotal / fri7am.length;

        let fri8amTotal = 0;
        fri8am.forEach((item) => (fri8amTotal += JSON.parse(item.Count)));
        let fri8amAvg = fri8amTotal / fri8am.length;

        let fri9amTotal = 0;
        fri9am.forEach((item) => (fri9amTotal += JSON.parse(item.Count)));
        let fri9amAvg = fri9amTotal / fri9am.length;

        let fri10amTotal = 0;
        fri10am.forEach((item) => (fri10amTotal += JSON.parse(item.Count)));
        let fri10amAvg = fri10amTotal / fri10am.length;

        let fri11amTotal = 0;
        fri11am.forEach((item) => (fri11amTotal += JSON.parse(item.Count)));
        let fri11amAvg = fri11amTotal / fri11am.length;

        let fri12pmTotal = 0;
        fri12pm.forEach((item) => (fri12pmTotal += JSON.parse(item.Count)));
        let fri12pmAvg = fri12pmTotal / fri12pm.length;

        let fri1pmTotal = 0;
        fri1pm.forEach((item) => (fri1pmTotal += JSON.parse(item.Count)));
        let fri1pmAvg = fri1pmTotal / fri1pm.length;

        let fri2pmTotal = 0;
        fri2pm.forEach((item) => (fri2pmTotal += JSON.parse(item.Count)));
        let fri2pmAvg = fri2pmTotal / fri2pm.length;

        let fri3pmTotal = 0;
        fri3pm.forEach((item) => (fri3pmTotal += JSON.parse(item.Count)));
        let fri3pmAvg = fri3pmTotal / fri3pm.length;

        let fri4pmTotal = 0;
        fri4pm.forEach((item) => (fri4pmTotal += JSON.parse(item.Count)));
        let fri4pmAvg = fri4pmTotal / fri4pm.length;

        let fri5pmTotal = 0;
        fri5pm.forEach((item) => (fri5pmTotal += JSON.parse(item.Count)));
        let fri5pmAvg = fri5pmTotal / fri5pm.length;

        let fri6pmTotal = 0;
        fri6pm.forEach((item) => (fri6pmTotal += JSON.parse(item.Count)));
        let fri6pmAvg = fri6pmTotal / fri6pm.length;

        let fri7pmTotal = 0;
        fri7pm.forEach((item) => (fri7pmTotal += JSON.parse(item.Count)));
        let fri7pmAvg = fri7pmTotal / fri7pm.length;

        let fri8pmTotal = 0;
        fri8pm.forEach((item) => (fri8pmTotal += JSON.parse(item.Count)));
        let fri8pmAvg = fri8pmTotal / fri8pm.length;

        let fri9pmTotal = 0;
        fri9pm.forEach((item) => (fri9pmTotal += JSON.parse(item.Count)));
        let fri9pmAvg = fri9pmTotal / fri9pm.length;

        let fri10pmTotal = 0;
        fri10pm.forEach((item) => (fri10pmTotal += JSON.parse(item.Count)));
        let fri10pmAvg = fri10pmTotal / fri10pm.length;

        let fri11pmTotal = 0;
        fri11pm.forEach((item) => (fri11pmTotal += JSON.parse(item.Count)));
        let fri11pmAvg = fri11pmTotal / fri11pm.length;

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

        let sat12amTotal = 0;
        sat12am.forEach((item) => (sat12amTotal += JSON.parse(item.Count)));
        let sat12amAvg = sat12amTotal / sat12am.length;

        let sat1amTotal = 0;
        sat1am.forEach((item) => (sat1amTotal += JSON.parse(item.Count)));
        let sat1amAvg = sat1amTotal / sat1am.length;

        let sat2amTotal = 0;
        sat2am.forEach((item) => (sat2amTotal += JSON.parse(item.Count)));
        let sat2amAvg = sat2amTotal / sat2am.length;

        let sat3amTotal = 0;
        sat3am.forEach((item) => (sat3amTotal += JSON.parse(item.Count)));
        let sat3amAvg = sat3amTotal / sat3am.length;

        let sat4amTotal = 0;
        sat4am.forEach((item) => (sat4amTotal += JSON.parse(item.Count)));
        let sat4amAvg = sat4amTotal / sat4am.length;

        let sat5amTotal = 0;
        sat5am.forEach((item) => (sat5amTotal += JSON.parse(item.Count)));
        let sat5amAvg = sat5amTotal / sat5am.length;

        let sat6amTotal = 0;
        sat6am.forEach((item) => (sat6amTotal += JSON.parse(item.Count)));
        let sat6amAvg = sat6amTotal / sat6am.length;

        let sat7amTotal = 0;
        sat7am.forEach((item) => (sat7amTotal += JSON.parse(item.Count)));
        let sat7amAvg = sat7amTotal / sat7am.length;

        let sat8amTotal = 0;
        sat8am.forEach((item) => (sat8amTotal += JSON.parse(item.Count)));
        let sat8amAvg = sat8amTotal / sat8am.length;

        let sat9amTotal = 0;
        sat9am.forEach((item) => (sat9amTotal += JSON.parse(item.Count)));
        let sat9amAvg = sat9amTotal / sat9am.length;

        let sat10amTotal = 0;
        sat10am.forEach((item) => (sat10amTotal += JSON.parse(item.Count)));
        let sat10amAvg = sat10amTotal / sat10am.length;

        let sat11amTotal = 0;
        sat11am.forEach((item) => (sat11amTotal += JSON.parse(item.Count)));
        let sat11amAvg = sat11amTotal / sat11am.length;

        let sat12pmTotal = 0;
        sat12pm.forEach((item) => (sat12pmTotal += JSON.parse(item.Count)));
        let sat12pmAvg = sat12pmTotal / sat12pm.length;

        let sat1pmTotal = 0;
        sat1pm.forEach((item) => (sat1pmTotal += JSON.parse(item.Count)));
        let sat1pmAvg = sat1pmTotal / sat1pm.length;

        let sat2pmTotal = 0;
        sat2pm.forEach((item) => (sat2pmTotal += JSON.parse(item.Count)));
        let sat2pmAvg = sat2pmTotal / sat2pm.length;

        let sat3pmTotal = 0;
        sat3pm.forEach((item) => (sat3pmTotal += JSON.parse(item.Count)));
        let sat3pmAvg = sat3pmTotal / sat3pm.length;

        let sat4pmTotal = 0;
        sat4pm.forEach((item) => (sat4pmTotal += JSON.parse(item.Count)));
        let sat4pmAvg = sat4pmTotal / sat4pm.length;

        let sat5pmTotal = 0;
        sat5pm.forEach((item) => (sat5pmTotal += JSON.parse(item.Count)));
        let sat5pmAvg = sat5pmTotal / sat5pm.length;

        let sat6pmTotal = 0;
        sat6pm.forEach((item) => (sat6pmTotal += JSON.parse(item.Count)));
        let sat6pmAvg = sat6pmTotal / sat6pm.length;

        let sat7pmTotal = 0;
        sat7pm.forEach((item) => (sat7pmTotal += JSON.parse(item.Count)));
        let sat7pmAvg = sat7pmTotal / sat7pm.length;

        let sat8pmTotal = 0;
        sat8pm.forEach((item) => (sat8pmTotal += JSON.parse(item.Count)));
        let sat8pmAvg = sat8pmTotal / sat8pm.length;

        let sat9pmTotal = 0;
        sat9pm.forEach((item) => (sat9pmTotal += JSON.parse(item.Count)));
        let sat9pmAvg = sat9pmTotal / sat9pm.length;

        let sat10pmTotal = 0;
        sat10pm.forEach((item) => (sat10pmTotal += JSON.parse(item.Count)));
        let sat10pmAvg = sat10pmTotal / sat10pm.length;

        let sat11pmTotal = 0;
        sat11pm.forEach((item) => (sat11pmTotal += JSON.parse(item.Count)));
        let sat11pmAvg = sat11pmTotal / sat11pm.length;

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
                colorscale: [
                    ['0.00', 'rgb(255,110,110)'],
                    ['0.05', 'rgb(248,105,105)'],
                    ['0.10', 'rgb(241,100,100)'],
                    ['0.15', 'rgb(234,95,95)'],
                    ['0.20', 'rgb(227,90,90)'],
                    ['0.25', 'rgb(220,85,85)'],
                    ['0.30', 'rgb(213,80,80)'],
                    ['0.35', 'rgb(206,75,75)'],
                    ['0.40', 'rgb(199,70,70)'],
                    ['0.45', 'rgb(192,65,65)'],
                    ['0.50', 'rgb(185,60,60)'],
                    ['0.55', 'rgb(178,55,55)'],
                    ['0.60', 'rgb(171,50,50)'],
                    ['0.65', 'rgb(164,45,45)'],
                    ['0.70', 'rgb(157,40,40)'],
                    ['0.75', 'rgb(150,35,35)'],
                    ['0.80', 'rgb(143,30,30)'],
                    ['0.85', 'rgb(136,25,25)'],
                    ['0.90', 'rgb(129,20,20)'],
                    ['0.95', 'rgb(122,15,15)'],
                    ['1.0', 'rgb(115,10,10)']
                ],
                type: 'heatmap',
                hovertemplate: '<b>%{y}:</b> %{x}<br>' + 'Average Count: %{z}<extra></extra>',
                hoverlabel: {
                    bgcolor: 'rgb(35, 35, 45)',
                },
            }
        ];

        var layout = {
            title: {
                text: 'SquashBusters 4th Floor Average Capacity',

            }
        };

        const config = {
            displayModeBar: false,
        };

        Plotly.newPlot('squashbusters-4th-floor', data, layout, config);
    });
