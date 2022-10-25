import {render, IsNumberValid} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    // const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  it('should render multiplication table of (2, 4)', () => {
    const start = 2
    const end = 4
    const rendered = render(start, end)

    expect(rendered).toBe('2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16')
  })

  it('should be true', () => {
    const start = 2
    const end = 4
    const validResult = IsNumberValid(start, end)

    expect(validResult).toBe(true)
  })

  it('should be true', () => {
    const start = 2
    const end = 11
    const validResult = IsNumberValid(start, end)

    expect(validResult).toBe(false)
  })

})
