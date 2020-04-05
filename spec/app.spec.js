import app from '../src/js/app';

describe('club const', function () {
  it('contains spec with an expectation', function () {
    expect(app.club).toBe('Chelsea');
  });
});
