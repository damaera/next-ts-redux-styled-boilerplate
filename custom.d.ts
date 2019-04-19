declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}
