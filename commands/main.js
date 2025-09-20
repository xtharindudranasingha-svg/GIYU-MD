const os = require('os')
const {runtime} = require("../untils/functions")
module.exports = [
    {
        name:"alive",
        description:"alive command",
        react:""
        ownerOnly: false,
        groupOnly: false,
        adminOnly: false,
        botAdmin: false,
        async execute(conn,mek,args,context){
            const {from,pushname,reply,quoted} = context;
            try{
                let desc = `
                Hey ${pushname} I am alive
                uptime:${runtime(process.uptime())}
                `
                await conn.sendMassage(from,
                    text:desc
                    {
                        image:{url:""},
                        caption: desc
                    },{
                        quoted:mek
                    }
                )

            }catch(e){
                console.log(e)
            }
        }
    }
]