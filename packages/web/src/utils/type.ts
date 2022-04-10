export type GetPropsOfType<T> = T extends React.ComponentType<infer P> ? P : never;
