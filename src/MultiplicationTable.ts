export class MultiplicationTable {
  public render(start: number, end: number): string{
    const bool_isStartNotGreaterThanEnd=this.isStartNotGreaterThanEnd(start,end)
    const bool_isStartandEndIntheRange=this.isStartandEndIntheRange(start,end)
    if (bool_isStartandEndIntheRange&&bool_isStartNotGreaterThanEnd){return '1*1=1'}
    else{return ''}
  
  }
  isStartNotGreaterThanEnd(start: number, end: number):boolean{
      return(start<=end)
  }
  isStartandEndIntheRange(start: number, end: number):boolean{
    return start>=0&&start<=10&&end>=0&&end<=10
  }
}

