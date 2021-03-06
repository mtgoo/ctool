/**
 * 将promise结果包装为 [error,T]
 * @param func 目标方法
 * 
 * @description <br/> 
 * <br/> 
 * 参考：[how-to-write-async-await-without-try-catch](https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/)
 * 
 * @example
 * ```typescript
 * //包裹api请求
 * const [err, result] = await wrapPromise(() => fetch("baidu.com"));
 * 
 * ```
 */
export function wrapPromise<T>(func: () => Promise<T>): Promise<[any, T]> {
    return new Promise<[any, T]>((resolve, reject) => {
        func()
            .then((data) => {
                resolve([null, data]);
            })
            .catch(err => {
                resolve([err, null]);
            });
    });
}
