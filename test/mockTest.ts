import { suite, test } from '@testdeck/jasmine';

class SUT {

  private flags: {};

  public setFlag(flag: string, value: boolean): void {

    this.flags[flag] = value;
  }

  public getFlag(flag: string): boolean {

    return this.flags[flag] || false;
  }
}

@suite
class MockTestSuite {

  private sut: SUT;

  before() {

    this.sut = new SUT();
  }

  @test "mock test"() {

    spyOn(this.sut, 'getFlag').and.returnValue(true);
    expect(this.sut.getFlag('foo')).toBe(true);
  }
}
