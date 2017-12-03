"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
let TaskService = class TaskService {
    constructor(http) {
        this.http = http;
        console.log('Task service INjected ');
    }
    getTasks() {
        return this.http.get('http://localhost:3000/api/tasks')
            .map(res => res.json());
    }
    addTask(newTask) {
        var header = new http_1.Headers();
        header.append('content-type', 'application/json');
        return this.http.post('http://localhost:3000/api/task', JSON.stringify(newTask), { headers: header })
            .map(res => res.json());
    }
    deleteTask(id) {
        console.log(id);
        return this.http.delete('/api/task/' + id)
            .map(res => res.json());
    }
    updateStatus(task) {
        var header = new http_1.Headers();
        header.append('content-type', 'application/json');
        return this.http.put('http://localhost:3000/api/task/' + task._id, JSON.stringify(task), { headers: header })
            .map(res => res.json());
    }
};
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map