/* SystemJS module definition */
declare var nodeModule: NodeModule;

interface NodeModule {
  id: string;
}
interface Window {
  process: any;
  require: any;
}


//HTTP response interfaces

interface userResponse {
  _id: string,
  img: string
  name: string,
  mail: string,
}

interface loginResponse {
  token: string;
  _id: string;
  name: string;
  mail: string;
  img: string;
  channels: string[];
  convers: string[];
}