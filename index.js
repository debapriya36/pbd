const express = require('express');
const app = express();

const port = process.env.PORT || 1999;


app.use('*',(req,res)=>{
    return res.json({
        lovePercentage : '💯 +ve',
        cheatPercentage : '0️⃣ffCourse !!',
        birthDayMsg : 'Even though we are far apart, Im sending you all my love and best wishes on your special day. Happy Brithday Cutie 🤍🙈'
        
    })
});


app.listen(port,()=> console.log('my heart goes on',port));