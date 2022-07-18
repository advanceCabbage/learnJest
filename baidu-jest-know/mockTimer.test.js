import timer from "./mockTimer";
//! 这节目的是对JS中使用到的setTimeout做测试，且无需等待setTimeout实际需要等待的时间长度

jest.useFakeTimers(); // 步骤一
test("timer 测试", () => {
  const fn = jest.fn();
  timer(fn);
  // jest.runAllTimers(); // 步骤二 会运行所有的setTimeout
  // jest.runOnlyPendingTimers(); //步骤二 只会运行处于队列中的setTimeout
  jest.advanceTimersByTime(3000); //todo 步骤二 让调用的时间快进时间
  expect(fn).toHaveBeenCalledTimes(1);
});
