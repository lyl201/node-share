
// hold.js
const fork = require('child_process').fork
//保存被子进程实例数组
let workers = []
//这里的被子进程理论上可以无限多
let appsPath = ['./start.js']

const createWorker = (appPath) => {

　　//保存fork返回的进程实例
　　let worker = fork(appPath)

　　//监听子进程exit事件
　　worker.on('exit', (code) => {

      console.log('code: ', code)

　　　 console.log('worker:' + worker.pid + 'exited')

　　　 delete workers[worker.pid]

　　　 createWorker(appPath)
　　 });

　　workers[worker.pid] = worker
　　console.log('Create worker:' + worker.pid)
};

//启动所有子进程
for (let i = appsPath.length - 1; i >= 0; i--) {
　　createWorker(appsPath[i])
}

//父进程退出时杀死所有子进程
process.on('exit',function(){
　　 for(var pid in workers){
　　　　workers[pid].kill()
　　}

});

