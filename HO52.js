var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts,floatMidPts,floatFinPts, intGradeOption, floatTotalPts, stringFinalGrade;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat($("mid_pts").value);
    floatFinPts = parseFloat($("fin_pts").value);
    floatTotalPts = parseFloat((floatMidPts + floatFinPts + floatHwPts));
    intGradeOption = parseFloat ($("grade_option").value);
if (intGradeOption===1)
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

$("final_grade").value = stringFinalGrade;

};

window.onload = function () 
{
    $("final_grade").value = ""; 
    $("calculate").onclick = calculate_click;  
    $("hw_pts").focus(); 
};