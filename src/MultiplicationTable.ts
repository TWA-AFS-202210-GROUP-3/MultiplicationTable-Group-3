// export function render(start: number, end: number): string{
//     const validResult = IsNumberValid(start, end)
//     var ResultTable = ''
//     if (validResult == true){
//       for(let i = start; i <= end; i++){
//         ResultTable += GenerateMultipleResult(start, i)
//         if(i != end){
//           ResultTable += '\n'
//         }
//       }
//     }
//   return ResultTable
// }

export function render(start: number, end: number): string{
  const validResult = IsNumberValid(start, end)
  var ResultTable = ''
  if (validResult == true){
    ResultTable = GenerateMultipleResult(start, end)
  }
  return ResultTable
}


export function IsNumberValid(start: number, end: number): boolean{
  return start <= end && start >= 1 && end <= 10
}

export function GenerateMultipleResult(start: number, end: number): string{
  var Result = ''
  for(let i = start; i <= end; i++){
      for(let j = start; j <= i; j++){
          Result += `${j}*${i}=${i*j}`;
          if (i != j){
              Result += '  '
          }
          if (i == j && i != end){
              Result += '\n'
          }
      }
  }
  return Result
}

  // for(let i = start; i <= end; i++){
  //     Result += `${i}*${end}=${i*end}`;
  //     if (i < end){
  //       Result += '  '
  //     }
  // }
  // for(let i = 1; i <= end - start; i + 2 * i){
  //   Result.split('').splice(i, 0, '\n')
  // }
  //   return Result
  // }

// export function GenerateMultipleResult(start: number, end: number): string{
//   var Result = ''
//   for(let i = start; i <= end; i++){
//       Result += `${i}*${end}=${i*end}`;
//       if (i < end){
//         Result += '  '
//       }
//   }
//   return Result
// }