import {CryptoModel} from "./crypto.model";
import {NameModel} from "./name.model";
import {AddressModel} from "./address.model";

export interface UserModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: NameModel;
  readonly address: AddressModel;
  readonly phone: string;
}
