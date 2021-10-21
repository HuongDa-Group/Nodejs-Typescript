export interface requestInterface {
  query?: any | any[];
  header?: any | any[];
  body?: any | any[];
}

export interface validateRequestInterface {
  request: requestInterface,
  header: any,
  body: any,
  quey: any
}
