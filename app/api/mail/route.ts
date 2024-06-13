import { NextRequest, NextResponse } from "next/server";
import { createTransport,SendMailOptions } from "nodemailer";
import fs from "fs"
import { writeFile } from "fs/promises";
import path from "path";
export async function POST(request:NextRequest) {
    const data = await request.formData();
    const file = data.get("file") as File;
    const name = data.get("userName") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const transport = createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    try {
        const bytes =  await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await writeFile(path.join(process.cwd(), "public/upload/", file.name), buffer);
        const emailTemplatePath = path.join(process.cwd(),"utils","emailTemplate.html");
        const emailTemplate = fs.readFileSync(emailTemplatePath,"utf-8");
        const replaceEmailTemplate = emailTemplate.replace("[recipientName]","Equipe Fullcoding").replace("[message]",message)
        const mail:SendMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            sender: name,
            subject:"Demande de devis",
            replyTo:email,
            html: replaceEmailTemplate,
            attachments: [
               {
                filename: file.name,
                content: fs.readFileSync(path.join(process.cwd(), "public/upload/", file.name))
               }
            ]
        }
        await transport.sendMail(mail);
        return NextResponse.json({message:"Demande envoyer avec succes"},{status:200});
    }catch(error){
        console.log(error)
        return NextResponse.json({message:"error"},{status:200});
    }
              
}