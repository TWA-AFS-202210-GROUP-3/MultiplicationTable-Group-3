import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('shoudl render return null string when start larger than end (2, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

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

  it('should render return null string when start not in range', () => {
    // given
    const table = new MultiplicationTable()
    const start = -1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })
  it('should render multiplication table of (3, 3)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 3
    const end = 3

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('3*3=9')
  })
})
