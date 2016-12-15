var title = "Dominos"
var studentList = [
    {
        "Name": "Dominos",
        "Delivery": "Yes",
        "Address": "155 W Main St, Rexburg, ID 83440",
        "Phone Number": "(208) 356-9555",
        "Hours": "Sunday-Friday 10:30AM-12AM | Saturday 10:30AM-1AM",
        "Website": "dominos.com"
    },
    {
        "Name": "Little Caesars",
        "Delivery": "No",
        "Address": "26 W 1st S, Rexburg, ID 83440",
        "Phone Number": "(208) 359-0071",
        "Hours": "Monday-Thursday 11AM-10PM | Friday-Saturday 11AM-11PM | Sunday CLOSED",
        "Website": "littlecaesars.com"
    },
    {
        "Name": "Papa Johns",
        "Delivery": "Yes",
        "Address": "76 W 2nd S, Rexburg, ID 83440",
        "Phone Number": "(208) 356-7070",
        "Hours": "Monday-Saturday 9:30AM-1:30AM | Sunday 7AM-12AM",
        "Website": "papajohns.com"
    },
    {
        "Name": "Papa Murphy's",
        "Delivery": "No",
        "Address": "64 N 2nd E, Rexburg, ID 83440",
        "Phone Number": "(208) 356-8900",
        "Hours": "Monday-Thursday 11AM-8PM | Friday-Saturday 11AM-9PM | Sunday CLOSED",
        "Website": "papamurphys.com"
    },
    {
        "Name": "Pizza Hut",
        "Delivery": "Yes",
        "Address": "163 W Main St, Rexburg, ID 83440",
        "Phone Number": "(208) 356-7811",
        "Hours": "Monday-Thursday 10AM-12AM | Friday-Saturday 10AM-1AM | Sunday 12PM-12AM",
        "Website": "pizzahut.com"
    },
    {
        "Name": "Pizza Pie Cafe",
        "Delivery": "No",
        "Address": "240 N 2nd E, Rexburg, ID 83440",
        "Phone Number": "(208) 359-1123",
        "Hours": "Monday-Thursday 11AM-10PM | Friday-Saturday 11AM-11PM | Sunday CLOSED",
        "Website": "pizzapiecafe.co"
    }
]

//$("div").text(JSON.stringify(studentList));

var resultAarray = jQuery.grep(studentList, function (n, i) {
    return (n.Name==title);
},false);

$("#results").text(JSON.stringify(resultAarray[0].Name));
