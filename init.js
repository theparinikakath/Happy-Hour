const mongoose=require("mongoose");
const Chat=require('./models/chat.js');

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats=[
    {
        from:"neha",
        to:"preeti",
        msg:"send me the notes ASAP",
        created_at:new Date(),
    },
    {
        from:"sonia",
        to:"priya",
        msg:"teach me JS ",
        created_at:new Date(),
    },
    {
        from:"rohit",
        to:"shahid",
        msg:"hey howz life goin bro?",
        created_at:new Date(),
    },
    {
        from:"anita",
        to:"peter",
        msg:"bring me some fruits",
        created_at:new Date(),
    },
    {
        from:"ramesh",
        to:"tony",
        msg:"hey,what abt the app we were working on?",
        created_at:new Date(),
    },
]

Chat.insertMany(allChats);