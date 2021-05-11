export function mapToEmptyProps() {
  return {};
}

export type PromiseResult<T> = Promise<[null, Error] | [T, null]>;
export function promiseWarpper<T>(p: Promise<T>): PromiseResult<T>{
  return new Promise((resolve) => {
    try {
      p.then((res) => {
        resolve([res as T, null]);
      }).catch((e) => {
        resolve([null, e]);
      });
    } catch(e) {
      resolve([null, e]);
    }
  });
}