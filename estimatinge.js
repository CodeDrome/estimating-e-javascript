window.onload = function()
{
    firstExpansion();

    secondExpansion();

    NewtonSeries();

    BrothersFormula();
}


function printAsText(e)
{
    let e_correct = "2.718281828459045";
    const e_string = e.toString().substring(0, 17);

    writeToConsole("Definitive: " + e_correct + "<br />", "console");

    writeToConsole("Estimated:&nbsp; ", "console");

    for(let i = 0, l = e_string.length; i < l; i++)
    {
        if(e_string[i] == e_correct[i])
        {
            writeToConsole("<span class='green'>" + e_string[i] + "</span>", "console")
        }
        else
        {
            writeToConsole("<span class='red'>" + e_string[i] + "</span>", "console")
        }
    }

    writeToConsole("<br /><br />", "console");
}


function factorial(n)
{
    return (n < 2) ? 1 : factorial(n - 1) * n;
}


function firstExpansion()
{
    writeToConsole("First expansion: n = 100000<br />---------------------------<br />", "console");

    const n = 100000;
    let e = (1 + 1/n)**n;

    printAsText(e);
}


function secondExpansion()
{
    writeToConsole("Second expansion: n = 0.000000001<br />---------------------------------<br />", "console");

    const n = 0.000000001;
    let e = (1 + n)**(1/n);

    printAsText(e);
}


function NewtonSeries()
{
    writeToConsole("Newton's Series: n = 0 to 12<br />---------------------------<br />", "console");

    let e = 0;

    for(let n = 0; n <= 12; n++)
    {
        e += (1 / factorial(n));
    }

    printAsText(e);
}


function BrothersFormula()
{
    writeToConsole("Brothers Formula: n = 0 to 8<br />---------------------------<br />", "console");

    let e = 0;

    for(let n = 0; n <= 8; n++)
    {
        e += (2*n + 2) / (factorial(2 * n + 1));
    }

    printAsText(e);
}
