import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
    constructor(private http:Http){

        console.log('Task service INjected ');
    }
    getTasks(){
        return this.http.get('http://localhost:3000/api/tasks')
                        .map(res=>res.json());
    }
    addTask(newTask){
        var header=new Headers();
        header.append('content-type','application/json');
         return this.http.post('http://localhost:3000/api/task',JSON.stringify(newTask),{headers:header})
                        .map(res=>res.json());   

    }
    deleteTask(id){
        console.log(id);
        return this.http.delete('/api/task/'+id)
                    .map(res=>res.json());
    }
    updateStatus(task){
        var header=new Headers();
        header.append('content-type','application/json');
         return this.http.put('http://localhost:3000/api/task/'+task._id,JSON.stringify(task),{headers:header})
                        .map(res=>res.json()); 
    }
}