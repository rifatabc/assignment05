document.getElementById("CompletedBtn").addEventListener("click",
    function showAlerts(){
        alert("Board updated Successfully");
        document.getElementById("CompletedBtn").disabled =true;
          
         let assigned =parseInt(document.getElementById('assigned').innerText);
         let completed =parseInt(document.getElementById("completed").innerText);

             if( assigned > 0){
                assigned -= 1;
                completed += 1;
             }
             document.getElementById('assigned').innerText =assigned;
             document.getElementById('completed').innerText=completed;

             const today = new Date()
            const formattedDate =today.toLocaleDateString('en-BD',{
            year:'numeric', month:'long', day:'numeric'
            });
            const formattedTime = today.toLocaleTimeString('en-BD', {
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
             });
               document.getElementById("currentdate").innerText = formattedDate;
             
             activitylog.innerText=`You have completed the task: Fix mobile button issue at ${formattedDate} ${formattedTime}`
             
             } 
)

document.getElementById("CompletedBtn1").addEventListener("click",
    function showAlerts(){
        alert("Board updated Successfully")
        document.getElementById("CompletedBtn1").disabled =true;
        let assigned =parseInt(document.getElementById('assigned').innerText);
        let completed =parseInt(document.getElementById("completed").innerText);

            if( assigned > 0){
               assigned -= 1;
               completed += 1;
            }
            document.getElementById('assigned').innerText =assigned;
            document.getElementById('completed').innerText=completed;

            const today = new Date()
            const formattedDate =today.toLocaleDateString('en-BD',{
            year:'numeric', month:'long', day:'numeric'
            });
            const formattedTime = today.toLocaleTimeString('en-BD', {
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
             });
               document.getElementById("currentdate").innerText = formattedDate;
               
             activitylog.innerText=`You have completed the task: Add Dark Mode issue at  ${formattedDate} ${formattedTime}`
             
    }
)
document.getElementById("CompletedBtn2").addEventListener("click",
    function showAlerts(){
        alert("Board updated Successfully")
        document.getElementById("CompletedBtn2").disabled =true;
        let assigned =parseInt(document.getElementById('assigned').innerText);
        let completed =parseInt(document.getElementById("completed").innerText);

            if( assigned > 0){
               assigned -= 1;
               completed += 1;
            }
            document.getElementById('assigned').innerText =assigned;
            document.getElementById('completed').innerText=completed;
            const today = new Date()
            const formattedDate =today.toLocaleDateString('en-BD',{
            year:'numeric', month:'long', day:'numeric'
            });
            const formattedTime = today.toLocaleTimeString('en-BD', {
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
             });
               document.getElementById("currentdate").innerText = formattedDate;

             
             activitylog.innerText=`You have completed the task:Optimize  Home page  at${formattedDate} ${formattedTime}`
    }
)
document.getElementById("CompletedBtn3").addEventListener("click",
    function showAlerts(){
        alert("Board updated Successfully")
        document.getElementById("CompletedBtn3").disabled =true;
        let assigned =parseInt(document.getElementById('assigned').innerText);
        let completed =parseInt(document.getElementById("completed").innerText);

            if( assigned > 0){
               assigned -= 1;
               completed += 1;
            }
            document.getElementById('assigned').innerText =assigned;
            document.getElementById('completed').innerText=completed;

            const today = new Date()
            const formattedDate =today.toLocaleDateString('en-BD',{
            year:'numeric', month:'long', day:'numeric'
            });
            const formattedTime = today.toLocaleTimeString('en-BD', {
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
             });
               document.getElementById("currentdate").innerText = formattedDate;



           
             activitylog.innerText=`You have completed the task:Add new emoji 🤲  at${formattedDate} ${formattedTime}`
                
          
    }
)
document.getElementById("CompletedBtn4").addEventListener("click",
    function showAlerts(){
        alert("Board updated Successfully")
        document.getElementById("CompletedBtn4").disabled =true;
        let assigned =parseInt(document.getElementById('assigned').innerText);
        let completed =parseInt(document.getElementById("completed").innerText);

            if( assigned > 0){
               assigned -= 1;
               completed += 1;
            }
            document.getElementById('assigned').innerText =assigned;
            document.getElementById('completed').innerText=completed;

            const today = new Date()
            const formattedDate =today.toLocaleDateString('en-BD',{
            year:'numeric', month:'long', day:'numeric'
            });
            const formattedTime = today.toLocaleTimeString('en-BD', {
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
             });
               document.getElementById("currentdate").innerText = formattedDate;

           
             activitylog.innerText=`You have completed the task:Integrate OpenAI API  at${formattedDate} ${formattedTime}`
    }
)
document.getElementById("CompletedBtn5").addEventListener("click",
    function showAlerts(){
        alert("Board updated Successfully")
        alert("congrats!!! you have completed all the current task")
        document.getElementById("CompletedBtn5").disabled =true;
        let assigned =parseInt(document.getElementById('assigned').innerText);
        let completed =parseInt(document.getElementById("completed").innerText);

            if( assigned > 0){
               assigned -= 1;
               completed += 1;
            }
            document.getElementById('assigned').innerText =assigned;
            document.getElementById('completed').innerText=completed;

            const today = new Date()
            const formattedDate =today.toLocaleDateString('en-BD',{
            year:'numeric', month:'long', day:'numeric'
            });
            const formattedTime = today.toLocaleTimeString('en-BD', {
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
             });
               document.getElementById("currentdate").innerText = formattedDate;

            
             activitylog.innerText=`You have completed the task:Improve Job searchin  at${formattedDate} ${formattedTime}`
     
         
    }
)


//discover add 
            document.getElementById("Discover").addEventListener("click",
            function showAlerts(){
            window.location.href="discover.html";
    }
)

//current date 
            document.getElementById("date-box").addEventListener("click",
            function(){
            const today = new Date()
              const formattedDate =today.toLocaleDateString('en-BD',{
            year:'numeric', month:'long', day:'numeric'
        });
        document.getElementById("currentdate").innerText = formattedDate;
})


// backgroundColor
document.getElementById("color").addEventListener("click",
    function(){
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A1", "#A133FF"];
        const randomeColor =colors[Math.floor(Math.random()*colors.length)];

        document.body.style.backgroundColor =randomeColor;
    })


    // activity log history add

    document.getElementById("History").addEventListener("click", function() {
       
        document.getElementById("activitylog").innerHTML = "";
    
    });
    
   

  