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
      return 'null'}
  }
}

export function isStartNotGreaterThanEnd(start:number,end:number):boolean{
  return start<=end
}

export function isInTheRange(start:number,end:number):boolean{
  return start>=1 && end<=10
}

export function generateMultiplicationTable(start:number,end:number):string {
  let generatedMultiplicationExpressions: string = ''
  let expressions: string = ''
  for(let i = start; i <= end; i ++ ){
    for(let j = start; j <= i; j ++){
      if (start == end){
        expressions = i + '*' + i + '=' + i * j
      }
      else{
        expressions = i + '*' + i + '=' + i * j + '  '
      }
      generatedMultiplicationExpressions = generatedMultiplicationExpressions + expressions   
    }
    if (start != end){
      generatedMultiplicationExpressions = generatedMultiplicationExpressions + '\n'
    }
  }
  return generatedMultiplicationExpressions
}

