function search() {
    var test = document.getElementById("title").value;
    var title = test.toUpperCase();
    var directory = [
        {
            "Name": "DOMINOS",
            "Delivery": "Deliver?: Yes",
            "Address": "Address: 155 W Main St, Rexburg, ID 83440",
            "Phone": "Phone Number: (208) 356-9555",
            "Hours": "Hours: Sunday-Friday 10:30AM-12AM | Saturday 10:30AM-1AM",
            "Website": "Website: dominos.com"
    },
        {
            "Name": "LITTLE CAESARS",
            "Delivery": "Deliver?: No",
            "Address": "Address: 26 W 1st S, Rexburg, ID 83440",
            "Phone": "Phone Number: (208) 359-0071",
            "Hours": "Hours: Monday-Thursday 11AM-10PM | Friday-Saturday 11AM-11PM | Sunday CLOSED",
            "Website": "Website: littlecaesars.com"
    },
        {
            "Name": "PAPA JOHNS",
            "Delivery": "Deliver?: Yes",
            "Address": "Address: 76 W 2nd S, Rexburg, ID 83440",
            "Phone": "Phone Number: (208) 356-7070",
            "Hours": "Hours: Monday-Saturday 9:30AM-1:30AM | Sunday 7AM-12AM",
            "Website": "Website: papajohns.com"
    },
        {
            "Name": "PAPA MURPHY'S",
            "Delivery": "Deliver?: No",
            "Address": "Address: 64 N 2nd E, Rexburg, ID 83440",
            "Phone": "Phone Number: (208) 356-8900",
            "Hours": "Hours: Monday-Thursday 11AM-8PM | Friday-Saturday 11AM-9PM | Sunday CLOSED",
            "Website": "Website: papamurphys.com"
    },
        {
            "Name": "PIZZA HUT",
            "Delivery": "Deliver?: Yes",
            "Address": " Address: 163 W Main St, Rexburg, ID 83440",
            "Phone": "Phone Number: (208) 356-7811",
            "Hours": "Hours: Monday-Thursday 10AM-12AM | Friday-Saturday 10AM-1AM | Sunday 12PM-12AM",
            "Website": "Website: pizzahut.com"
    },
        {
            "Name": "PIZZA PIE CAFE",
            "Delivery": "Deliver?: No",
            "Address": "Address: 240 N 2nd E, Rexburg, ID 83440",
            "Phone": "Phone Number:(208) 359-1123",
            "Hours": "Hours: Monday-Thursday 11AM-10PM | Friday-Saturday 11AM-11PM | Sunday CLOSED",
            "Website": "Website: pizzapiecafe.co"
    }
]
    var check = false;
    for (var i = 0; i < 6; i++) {
        if (directory[i].Name == title) {
            document.getElementById('name').innerHTML = directory[i].Name;
            document.getElementById('delivery').innerHTML = directory[i].Delivery;
            document.getElementById('address').innerHTML = directory[i].Address;
            document.getElementById('phone').innerHTML = directory[i].Phone;
            document.getElementById('hours').innerHTML = directory[i].Hours;
            document.getElementById('website').innerHTML = directory[i].Website;
            check = true;
        }

    }
    if(check == false){
    document.getElementById('name').innerHTML = "Sorry, there is no listing available. Suggest to the business to sign up at Pizza Deal!";
    }
    console.log(directory);
}