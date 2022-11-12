// type QueryClient<T extends Promise<unknown> = Promise<unknown>> = Map<number, T>

export type QueryKey =
  | string
  | number
  | [string, string | number | Record<string | number, unknown>]

export type QueryFn<Result extends unknown> = () => Promise<Result>

export type QueryClient<
  K extends QueryKey = QueryKey,
  V extends unknown = unknown
> = (key: K, fn: QueryFn<V>) => Promise<V>

export function makeQueryClient<
  K extends QueryKey = QueryKey,
  V extends unknown = unknown
>(): QueryClient<K, V> {
  const fetchMap = new Map<K, Promise<V>>()

  return function queryClient(key: K, query: QueryFn<V>): Promise<V> {
    if (!fetchMap.has(key)) {
      const fn = query()
      fetchMap.set(key, fn)
      return fn
    }
    return fetchMap.get(key)!
  }
}
