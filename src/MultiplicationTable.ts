export class MultiplicationTable {

  public render(start: number, end: number): string{
    if(!isInputVaild(start, end))
    {
      return ''
    }
    else
    {
      return generateMultiplicationTable(start, end)
    }
  }
}

function generateMultiplicationTable(start: number, end: number):string{
  const distanceBetweenStartandEnd = end - start
  let multiplicationTable = ''
  for(let i=0; i<=distanceBetweenStartandEnd; i++)    ////loop for every line
  {
    const lineNum = start + i
    for(let j=0; j<i+1; j++) //////loop for every column of one line
    {
      multiplicationTable = multiplicationTable + generateCell(start+j,lineNum) + '  '
    }
    multiplicationTable = multiplicationTable.substring(0, multiplicationTable.length-2)
    multiplicationTable += '\n'
  }
  multiplicationTable = multiplicationTable.substring(0, multiplicationTable.length-1)
  return multiplicationTable
}

function generateCell(num1: number, num2: number):string{
  return num1+ '*' + num2 + '=' + num1*num2
}

function isInputVaild(start: number, end: number):boolean{
  if(!isStartNotGreaterThanEnd(start, end))
  {
    return false
  }
  if(!isInputIntheRange(start, end))
  {
    return false
  }
  return true
}

function isStartNotGreaterThanEnd(start: number, end: number):boolean{
  if(start>end)
  {
    return false
  }
  return true
}

function isInputIntheRange(start: number, end: number):boolean{
  if(start<1 || start>10 || end<1 || end>10)
  {
    return false
  }
  return true
}
