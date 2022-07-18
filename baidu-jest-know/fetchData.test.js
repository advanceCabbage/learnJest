import { fetchData, fetchDataPromise } from "./fetchData";

//! 测试异步函数 需要调用done函数，当done函数被调用才能证明异步函数被正常执行了
//todo 回调形式的异步函数测试用例
test("fetchData 返回结果为 {success:true}", (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true,
    });
    done();
  });
});

//! 需要注意将整个 fetchDataPromise使用return返回
//todo 直接返回一个promise的形式的异步函数测试用例
test("fetchData 返回结果为 {success:true}", () => {
  return fetchDataPromise().then((response) => {
    expect(response.data).toEqual({
      success: true,
    });
  });
});

// test("fetchData 返回结果为 404", () => {
//   expect.assertions(1);
//   return fetchDataPromise().catch((e) => {
//     expect(e.toString().indexOf("404") > -1).toBe(true);
//   });
// });

// todo 测试返回promise的异步函数的第二种测试写法
test("fetchData 返回结果为 {success:true}", () => {
  return expect(fetchDataPromise()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});

//todo async/await 代替return的方式 写promise异步函数的测试用例
test("fetchData 返回结果为 {success:true}", async () => {
  await expect(fetchDataPromise()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});

//todo 又一种写法
test("fetchData 返回结果为 {success:true}", async () => {
  const response = await fetchDataPromise();
  expect(response.data).toEqual({
    success: true,
  });
});

//todo 测试异步返回404测试用例第二种写法
// test("fetchData 返回结果为 404", () => {
//   return expect(fetchDataPromise()).rejects.toThrow();
// });

// test("fetchData 返回结果为 404", async () => {
//   await expect(fetchDataPromise()).rejects.toThrow();
// });
