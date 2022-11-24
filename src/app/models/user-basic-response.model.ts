import {NameModel} from "./name.model";

export interface UserBasicResponseModel {
  readonly email: string;
  readonly name: NameModel;
}
