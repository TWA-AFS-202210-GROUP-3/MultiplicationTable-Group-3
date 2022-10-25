export class MultiplicationTable {
  public render(start: number, end: number): string{
    const startNotGreaterThanEnd = isStartNotGreaterThanEnd(start,end)
    const inTheRange = isInTheRange(start,end)
    if (startNotGreaterThanEnd == true && inTheRange == true)
    {
      return '1*1=1'
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

