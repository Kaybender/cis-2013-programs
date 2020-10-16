var floatHwPts,floatMidPts, floatFinPts,intGradeOption,stringFinalGrade;

floatHwPts = parseFloat (prompt("Enter homework points (0-30)"));
floatMidPts = parseFloat(prompt("Enter midterm points (0-35)"));
floatFinPts = parseFloat(prompt("Enter final points (0-35)"));
floatTotalPts = parseFloat((floatHwPts + floatMidPts + floatFinPts));
intGradeOption = parseFloat(prompt("enter 1 for p/f, enter 2 for letter grade"));

if (intGradeOption === 1)
{
    if (floatTotalPts <= 80)
        {
            (stringFinalGrade = "Fail");
        }
    if (floatTotalPts >=80)
        {
            (stringFinalGrade = "Pass");
        }
}
else
{
    if (floatTotalPts <60)
        {
            (stringFinalGrade = "F");
        }
    else
    {
        if (floatTotalPts <70 && floatTotalPts >=60)
        {
            (stringFinalGrade = "D");
        }
    else
        {
            if (floatTotalPts <80 && floatTotalPts >=70)
        {
            (stringFinalGrade = "C");
        }
            else
            {
                if (floatTotalPts <90 && floatTotalPts >=80)
            {
                (stringFinalGrade = "B");
            }
                else
                {
                    (stringFinalGrade = "A");
                }
                
            }
        }
    }
}
     alert("Your final grade is: " + stringFinalGrade);        