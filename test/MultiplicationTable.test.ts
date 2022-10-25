import {MultiplicationTable,IsInTheRange,IsStartNotGreaterThanEnd} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1');
  });

  it('is the start not larger than end (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const isStartNotGreaterThanEnd = IsStartNotGreaterThanEnd(start, end)

    //then
    expect(isStartNotGreaterThanEnd).toBeTruthy();
  });
})
