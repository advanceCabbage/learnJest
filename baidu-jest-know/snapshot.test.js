import { gennerateConfig, gennerateAnthorConfig } from "./snapshot";

//! toMatchSnapshot 适用于测试配置文件是否被修改场景
test("测试 gennerateConfig ", () => {
  expect(gennerateConfig()).toMatchSnapshot({
    time: expect.any(Date), //todo 表明这里的time无需相等，只需保证为Date类型
  });
});

test("测试 gennerateAnthorConfig ", () => {
  expect(gennerateAnthorConfig()).toMatchSnapshot();
});

test("测试 gennerateConfig ", () => {
  expect(gennerateConfig()).toMatchInlineSnapshot(
    //todo 行内快照 将快照生成到当前文件中
    {
      time: expect.any(Date),
    },
    `
    Object {
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
