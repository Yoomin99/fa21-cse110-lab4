function update(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
}

setInterval( update ,1000)

/*Output 
1:39:27 PM
1:39:28 PM
1:39:29 PM
1:39:30 PM
1:39:31 PM
1:39:32 PM
1:39:33 PM
1:39:34 PM
1:39:35 PM
1:39:36 PM
1:39:37 PM
1:39:38 PM
1:39:39 PM
1:39:40 PM
1:39:41 PM
1:39:42 PM
1:39:43 PM
1:39:44 PM
1:39:45 PM
1:39:46 PM
1:39:47 PM
1:39:48 PM


*/
