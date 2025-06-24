import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });

  it('should assign A grade when the mark is greater than 89', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(93);
    expect(grade).toBe('A');
  });

  it('should assign B grade when the mark between 80 and 89', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(84);
    expect(grade).toBe('B');
  });

  it('should assign C grade when the mark between 70 and 79', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(74);
    expect(grade).toBe('C');
  });

  it('should assign D grade when the mark between 60 and 69', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(61);
    expect(grade).toBe('D');
  });

  it('should assign FAIL grade when the mark is below between 60', () => {
    const pipe = new GradePipe();
    let grade = pipe.transform(59);
    expect(grade).toBe('FAIL');
  });
});
