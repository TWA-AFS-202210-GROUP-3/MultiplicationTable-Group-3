import { rawListeners } from "process"

export class MultiplicationTable {
  public render(start: number, end: number): string{
    const bool_isStartNotGreaterThanEnd=this.isStartNotGreaterThanEnd(start,end)
    const bool_isStartandEndIntheRange=this.isStartandEndIntheRange(start,end)
    if (bool_isStartandEndIntheRange&&bool_isStartNotGreaterThanEnd){return this.CreateMultiplicationTable(start,end)}
    else{return ''}
  
  }
  isStartNotGreaterThanEnd(start: number, end: number):boolean{
      return(start<=end)
  }
  isStartandEndIntheRange(start: number, end: number):boolean{
    return start>=0&&start<=10&&end>=0&&end<=10
  }

  CreateMultiplicationTable(start: number, end: number):string{
    const layer=end-start+1
    let multiplicationTable=''
    for (let i = 0; i < layer; i++) {
       var Rowline=new Array(i+1)
       for (let j = 0; j <Rowline.length; j++) {
         Rowline[j]=start+j       
       }    
       multiplicationTable=multiplicationTable+this.CreateMultiplicationRow(Rowline)
    }
    multiplicationTable=multiplicationTable.substring(0,multiplicationTable.length-1)
    return multiplicationTable
  }
  CreateMultiplicationRow(Rowline:number[]):string{
     const maxnum=Math.max(...Rowline)
     let RowTable=''
     for (let i = 0; i < Rowline.length; i++) {      
        RowTable=RowTable+this.generateCell(Rowline[i],maxnum)+'  '
     }
    RowTable=RowTable.substring(0,RowTable.length-2)
    RowTable+='\n'
    return RowTable
  }

  generateCell(numberOne:number,numberTwo:number):string{
    return numberOne+'*'+numberTwo+'='+numberOne*numberTwo
  }
}

