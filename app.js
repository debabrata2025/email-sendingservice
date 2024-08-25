const http = require("http");
const nodemailer = require("nodemailer");

console.log("hgierhfterktjl;rtkk4rt;lykjr")

const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
        user: "ds2357196@gmail.com",
        pass: "nzsghecxjsmzpssn"
    }
});
const receiver = {
    from: "ds2357196@gmail.com",
    to: "ru33653@gmail.com",
    subject: "Node.Js Mail Testing",
    text: `This is you OTP ${Math.floor(Math.random()*10000)}`
}
auth.sendMail(receiver,(error,emalResponce)=>{
    if(error){
        throw error;
    }
    console.log("Success!");
    responce.end();
})