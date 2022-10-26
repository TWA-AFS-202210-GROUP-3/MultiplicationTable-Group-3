export class MultiplicationTable {

  public render(start: number, end: number): string{
    if(!this.isInputVaild(start, end))
    {
      return ''
    }
    else
    {
      return this.generateMultiplicationTable(start, end)
    }
  }

  private generateMultiplicationTable(start: number, end: number):string{
    const distanceBetweenStartandEnd = end - start
    let multiplicationTable = ''
    for(let i=0; i<=distanceBetweenStartandEnd; i++)    ////loop for every line
    {
      multiplicationTable += this.generateLine(start,i)
    }
    multiplicationTable = multiplicationTable.substring(0, multiplicationTable.length-1)
    return multiplicationTable
  }

  private generateLine(start:number, index:number):string{
    let lineResult = ''
    for(let j=0; j<index+1; j++) //////loop for every column of one line
    {
      lineResult = lineResult + this.generateCell(start+j,start + index) + '  '
    }
    lineResult = lineResult.substring(0, lineResult.length-2)
    lineResult += '\n'
    return lineResult
  }

  private generateCell(num1: number, num2: number):string{
    return num1+ '*' + num2 + '=' + num1*num2
  }

  private isInputVaild(start: number, end: number):boolean{
    if(!this.isStartNotGreaterThanEnd(start, end))
    {
      return false
    }
    if(!this.isInputIntheRange(start, end))
    {
      return false
    }
    return true
  }

  private isStartNotGreaterThanEnd(start: number, end: number):boolean{
    if(start>end)
    {
      return false
    }
    return true
  }

  private isInputIntheRange(start: number, end: number):boolean{
    if(start<1 || start>10 || end<1 || end>10)
    {
      return false
    }
    return true
  }
}
