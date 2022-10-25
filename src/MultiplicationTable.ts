export class MultiplicationTable {

  public render(start: number, end: number, resultArr: string[]): string {
    if(this.isNumsValid(start, end)) {
      const oneLineResult: string = this.generateEachLineResult(start, end);
      resultArr.unshift(oneLineResult);
      this.render(start, end - 1, resultArr);
    }
    let resultString: string = "";
    resultArr.forEach(item => resultString += `${item}\n`);
    console.log("item ==> ", resultString);
    
    
    return resultString;
  }

  private isNumsValid(start: number, end: number): boolean {
    return start >= 1 && end <= 10 && start <= end;
  }

  private generateEachLineResult(start: number, end: number): string {
    let resultStr = "";
    for(let i = start; i <= end; i++) {
      resultStr += `${i}*${end}=${end * i}  `;
    }
    return resultStr;
  }
}
