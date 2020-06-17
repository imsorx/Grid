/* SystemJS module definition */
declare var nodeModule: NodeModule;
interface NodeModule {
  id: string;
}
interface Window {
  process: any;
  require: any;
}
interface User{
  id:number,
  name:string,
  lstMsg:string,
  img:string
}

interface Message{
  own:boolean,
  data:string
}