export function render(start: number, end: number): string{
    const validResult = IsNumberValid(start, end)
    var ResultTable = ''
    if (validResult == true){
      for(let i = start; i <= end; i++){
        ResultTable += GenerateMultipleResult(start, i)
        if(i != end){
          ResultTable += '\n'
        }
      }
    }
  return ResultTable
}

export function IsNumberValid(start: number, end: number): boolean{
  return start <= end && start >= 1 && end <= 10
}

export function GenerateMultipleResult(start: number, end: number): string{
  var Result = ''
  for(let i = start; i <= end; i++){
      Result += `${i}*${end}=${i*end}`;
      if (i < end){
        Result += '  '
      }
  }
  return Result
}