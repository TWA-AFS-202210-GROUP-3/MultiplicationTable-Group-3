export function render(start: number, end: number): string{
    const validResult = IsNumberValid(start, end)
    var Result = ''
    if (validResult == true){
      for(let i = start; i <= end; i++){
        Result += GenerateMultipleResult(start, i)
        if(i != end){
          Result += '\n'
        }
      }
    }
  return Result
}

function IsNumberValid(start: number, end: number): boolean{
  return start <= end && start >= 1 && end <= 10
}

function GenerateMultipleResult(start: number, end: number): string{
  var Result = ''
  for(let i = start; i <= end; i++){
      Result += `${i}*${end}=${i*end}`;
      if (i < end){
        Result += '  '
      }
  }
  return Result
}