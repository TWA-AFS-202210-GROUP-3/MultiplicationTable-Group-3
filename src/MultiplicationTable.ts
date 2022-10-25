export class MultiplicationTable {
  public render(start: number, end: number): string{
    const isInTheRange = IsInTheRange(start,end);
    const isStartNotGreaterThanEnd = IsStartNotGreaterThanEnd(start,end);


    return '1*1=1'
  }
}

export function IsInTheRange(start:number,end:number):boolean{
  return start>=1 && end<=10;
}

export function IsStartNotGreaterThanEnd(start:number,end:number):boolean{
  return start<=end;
}

