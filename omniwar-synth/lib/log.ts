export const Logger = (namespace: string) => (msg: string, toLog?: any) => {
  const ns = `[${namespace}] `;
  const message = toLog ? `${ns} ${msg} ${toLog}` : `${ns} ${msg}`;
  console.log(message); // tslint:disable-line
};
