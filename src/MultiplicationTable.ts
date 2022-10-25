export class MultiplicationTable {
  public render(start: number, end: number): string{
    return '1*1=1'
  }
}

function IsNumberValid(start: number, end: number): boolean{
  return start <= end && start >= 1 && end <= 10
}

function GenerateMultipleResult(start: number, end: number): string{
  var Result = ''
  for(let i = start; i <= end; i++){
    for(let z = start; z <= end; z++){
      Result += `${i} * ${z} = ${i*z}`;
    }
  }
  return Result
}

function GenerateMultipleTable(result: string): string{


}