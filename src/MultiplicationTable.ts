export class MultiplicationTable {
  public render(start: number, end: number): string {
    const startNotGreaterThanEnd = isStartNotGreaterThanEnd(start,end)
    const inTheRange = isInTheRange(start,end)
    if (startNotGreaterThanEnd == true && inTheRange == true)
    {
      
      const generatedMultiplicationTable = generateMultiplicationTable(start,end)
      return generatedMultiplicationTable
    }
    else {
      return ''}
  }
}

export function isStartNotGreaterThanEnd(start:number,end:number):boolean{
  return start <= end
}

export function isInTheRange(start:number,end:number):boolean{
  return start >= 1 && end <= 10
}

export function generateMultiplicationTable(start:number,end:number):string {
  let generatedMultiplicationExpressions: string = ''
  let expressions: string = ''
  for(let i = start; i <= end; i ++){
    for(let j = start; j <= i; j ++){
      if (start == end || i == j){
        expressions = j + '*' + i + '=' + i * j
      }
      else{
        expressions = j + '*' + i + '=' + i * j + '  '
      }
      generatedMultiplicationExpressions = generatedMultiplicationExpressions + expressions   
    }
    if (start != end &&  i != end){
      generatedMultiplicationExpressions = generatedMultiplicationExpressions + '\n'
    }
  }
  return generatedMultiplicationExpressions
}

