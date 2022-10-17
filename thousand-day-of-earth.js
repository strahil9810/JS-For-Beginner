function oneThousandDays([dateAsBirthday]) {
    let dateParts = dateAsBirthday.split("-")
    let year = Number(dateParts[2])
    let month = Number(dateParts[1])
    let day = Number(dateParts[0])
    
    let date = new Date(year, month, day+1000) 
    let dd = date.getDate()
    let mm = date.getMonth()
    let yyyy = date.getFullYear()
    if(dd<10){
        dd = "0"+dd
    }
    if (mm<10){
        mm = "0"+mm
    }
    console.log(dd + "-" + mm + "-" + yyyy)
    //console.log(date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear())
       
    }

oneThousandDays(['25-02-1995'])
oneThousandDays(['07-11-2003'])
oneThousandDays(['30-12-2002'])
oneThousandDays(['01-01-2012'])
oneThousandDays(['14-06-1980'])

//вход	изход
//25-02-1995	20-11-1997
//07-11-2003	02-08-2006
//30-12-2002	24-09-2005
//01-01-2012	26-09-2014
//14-06-1980	10-03-1983
//