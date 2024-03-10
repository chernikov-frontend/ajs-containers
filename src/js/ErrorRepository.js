export default class ErrorRepository{
    constructor(){
        this.errors = new Map([[404, 'Not Found'], [500, 'Internal Server Error'], [503, 'Service Unavailable']]);
    }
    translate(code){
        if(this.errors.has(code)){
            return this.errors.get(code);
        } else{
            return 'Unknown Error';
        }
    }
}