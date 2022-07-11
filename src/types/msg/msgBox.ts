export interface Msg{
    type:MsgType,
    content:string,
}
export interface MsgBox {
    transitionName:string,
    msgArr:Msg[]
}
export enum MsgType {
    SUCCESS,
    ERROR,
}