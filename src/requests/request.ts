import {requestInterface} from "@interfaces/request.interface";
import {ValidationResult} from "joi";

export abstract class Request {
  protected abstract request: requestInterface;

  public abstract header(): any;

  public abstract query(): any;

  public abstract body(): any;
}
