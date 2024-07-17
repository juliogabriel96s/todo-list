import { UseCAseErrors } from "../use-cases-error";

export class NotAllowedError extends Error implements UseCAseErrors{
    constructor(){
        super('Not allowed error.')
    }
}