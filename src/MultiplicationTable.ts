export class MultiplicationTable {

  public render(start: number, end: number): string{
    
    if(!IsInputVaild(start, end))
    {
      return "";
    }
    else
    {
      return GenerateMultiplicationTable(start, end);
    }
  }  
}

function GenerateMultiplicationTable(start: number, end: number):string{
  const distanceBetweenStartandEnd = end - start
  var multiplicationTable = "";
  var length;
  for(var i=0; i<=distanceBetweenStartandEnd; i++)    ////loop for every line
  {
    var lineNum = start + i
    for(var j=0; j<i+1; j++) //////loop for every column of one line
    {
      multiplicationTable = multiplicationTable + GenerateCell(start+j,lineNum) + '  '
    }
    multiplicationTable = multiplicationTable.substring(0, multiplicationTable.length-2)
    multiplicationTable += '\n'
  }
  multiplicationTable = multiplicationTable.substring(0, multiplicationTable.length-1)
  return multiplicationTable
}

function GenerateCell(num1: number, num2: number):string{
  return num1+ '*' + num2 + '=' + num1*num2
}

function IsInputVaild(start: number, end: number):boolean{
  if(!IsStartNotGreaterThanEnd(start, end))
  {
    return false
  }
  if(!IsInputIntheRange(start, end))
  {
    return false
  }
  return true
}

function IsStartNotGreaterThanEnd(start: number, end: number):boolean{
  if(start>end)
  {
    return false
  }
  return true
}

function IsInputIntheRange(start: number, end: number):boolean{
  if(start<1 || start>10 || end<1 || end>10)
  {
    return false
  }
  return true
}