import {MultiplicationTable,isInTheRange,isStartNotGreaterThanEnd} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16')
  })

  it('is the start not larger than end (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const startNotGreaterThanEnd = isStartNotGreaterThanEnd(start, end)
    //then
    expect(startNotGreaterThanEnd).toBeTruthy()
  })

  it('is the start and end in the range (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const startAndEndInTheRange = isInTheRange(start, end)
    //then
    expect(startAndEndInTheRange).toBeTruthy()
  })

  it('has invaild numbers (3,2)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 3
    const end = 2

    //when
    const rendered = table.render(start, end)
    //then
    expect(rendered).toBe('null')
  })

})
