import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4
    const resultArr: string[] = []

    //when
    const rendered = table.render(start, end, resultArr)

    const result = `2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16`

    //then
    expect(rendered).toBe(result)
  })

  it('should render "" (0, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 4
    const resultArr: string[] = []

    //when
    const rendered = table.render(start, end, resultArr)

    //then
    expect(rendered).toBe("")
  })
  it('should render "" of (4, 3)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 4
    const end = 3
    const resultArr: string[] = []

    //when
    const rendered = table.render(start, end, resultArr)

    //then
    expect(rendered).toBe("")
  })
})
