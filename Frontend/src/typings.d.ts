/* SystemJS module definition */
declare var nodeModule: NodeModule;
interface NodeModule {
  id: string;
}
interface Window {
  process: any;
  require: any;
}
interface User {
  _id: number,
  img: string
  name: string,
  mail: string,
}
interface User_details {
  token:string,
  _id: string,
  img: string,
  name: string,
  mail: string,
  convers: string[],
  channels: string[],
}
interface Message {
  own: boolean,
  data: string
}