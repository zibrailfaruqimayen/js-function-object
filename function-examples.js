/* 
function functionName (parameter){
    function body
    return
}

var returnedValue = functionName(parameter value) 
*/

function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 58;
const assignment2Marks = 58;
const assignment3Marks = 57;
var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average so far: ', myAverage);