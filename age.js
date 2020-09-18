var floatAge,floatDay,intWeeks,intFortnights;
/* This program calculates age in different time measures  . . . .  . */
     floatAge = parseFloat (prompt("Enter Current Age"));
     floatDay = parseFloat(floatAge*365.25);
     floatMonth = parseFloat(floatAge*12);
     intWeeks = parseFloat(floatDay/7);
     intFortnights = parseFloat(floatDay/14);
     alert("Age in days = " + floatDay);
     alert("Age in months = " + floatMonth);
     alert("Age in weeks = " +  intWeeks);
     alert("Age in fortnights =" + intFortnights);