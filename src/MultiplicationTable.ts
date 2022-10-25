export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (!this.isInputValid(start, end)) {
      return ''
    }

    return this.renderMultiplicationTableString(this.generateMultiplicationArray(start, end))
  }

  private generateMultiplicationArray(start: number, end: number): number[][][]{
    let resultArray: number[][][] = [];
    
    for (let lineIndex = 0;  lineIndex < end - start + 1; lineIndex++) {
      resultArray.push([])
      for (let lineElementIndex = 0; lineElementIndex < lineIndex + 1; lineElementIndex++) {        
        let firstNumber: number = start + lineElementIndex
        let secondNumber: number = start + lineIndex
        resultArray[lineIndex].push([firstNumber, secondNumber, firstNumber*secondNumber])
        
      }      
    }
    //console.log(resultArray)
    return resultArray
  }

  private renderMultiplicationTableString(inputArray: number[][][]): string{
    let resultString: string = ''
    for (let lineIndex = 0; lineIndex < inputArray.length; lineIndex++) {
      for (let lineElementIndex = 0; lineElementIndex < inputArray[lineIndex].length; lineElementIndex++) {
        resultString += this.generateSingleEquationString(inputArray[lineIndex][lineElementIndex]) + '  '   
      }
      resultString = resultString.substring(0,resultString.length - 2)
      resultString += '\n'
    }
    resultString = resultString.substring(0,resultString.length - 1)
    //console.log(resultString)

    return resultString
  }

  private generateSingleEquationString(inputArray: number[]): string{   
    return inputArray[0] + '*' + inputArray[1] + '=' + inputArray[2]
  }

  private isInputValid(start: number, end: number): boolean{

    return this.isAllInRange(start, end) && !this.isStartGreaterThanEnd(start,end)
  }
  private isAllInRange(start: number, end: number): boolean{

    if (this.isInRange(start) && this.isInRange(end)) {
      return true
    }

    return false
  }

  private isInRange(number: number): boolean{

    if (number >= 1 && number <= 10) {
      return true
    }

    return false
  }

  private isStartGreaterThanEnd(start: number, end: number): boolean{

    if (start > end) {
      return true
    }

    return false
  }

}
