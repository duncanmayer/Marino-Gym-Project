import plotly.express as px

#this kind of heat map but with rows being hours and cols being day of week, ex:
#                sun  mon   tues   weds   thurs   fri   sat
data=([[11, 13, 12, 10, 9, 7, 9],   #12am
                 [4, 3, 2, 5, 5, 4, 2],   #1am
                 [2, 3, 2, 4, 5, 2, 1],   #2am
                 [1, 1, 1, 3, 2, 1, 4],   #3am
                 [4, 7, 2, 10, 5, 7, 9],   #4am
                 [7, 13, 15, 12, 15, 17, 9],   #5am
                 [10, 21, 18, 12, 17, 16, 13],   #6am
                 [12, 25, 21, 17, 19, 21, 19],   #7am
                 [15, 32, 28, 23, 25, 27, 23],   #8am
                 [13, 38, 35, 30, 25, 20, 19],   #9am
                 [16, 44, 45, 43, 47, 36, 25],   #10am
                 [20, 55, 58, 52, 50, 42, 33],   #11am
                 [18, 67, 65, 67, 58, 56, 47],   #12pm
                 [25, 74, 78, 79, 67, 67, 60],   #1pm
                 [30, 76, 70, 86, 74, 79, 63],   #2pm
                 [44, 79, 79, 89, 65, 85, 55],   #3pm
                 [49, 88, 90, 79, 77, 96, 42],   #4pm
                 [58, 76, 87, 84, 82, 98, 30],   #5pm
                 [56, 79, 76, 96, 88, 79, 36],   #6pm
                 [48, 75, 68, 81, 73, 62, 34],   #7pm
                 [45, 64, 70, 73, 58, 54, 27],   #8pm
                 [47, 52, 55, 53, 46, 38, 22],   #9pm
                 [33, 36, 42, 36, 29, 21, 19],   #10pm
                 [21, 21, 20, 27, 18, 11, 7],]) #11pm

fig = px.imshow(data,
                labels=dict(x="Day of Week", y="Time of Day", color="Capacity"),
                x=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                y=['12 am', '1 am', '2 am', '3 am', '4 am', '5 am', '6 am',
                   '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm',
                   '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm',
                   '9 pm', '10 pm', '11 pm'],  text_auto=True, aspect="auto")
fig.update_xaxes(side="top")
fig.show()