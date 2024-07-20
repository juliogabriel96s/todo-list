import { UseCAseErrors } from "../use-cases-error";

export class ResourceNotFoundError extends Error implements UseCAseErrors{
    constructor(){
        super('Not allowed error.')
    }
}