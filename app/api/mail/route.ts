import { NextRequest, NextResponse } from "next/server";
import fs from "fs"
import mailgun from "mailgun-js"
import { writeFile } from "fs/promises";
import path from "path";
export async function POST(request:NextRequest) {
    const data = await request.formData();
    const file = data.get("file") as File;
    const name = data.get("userName") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const service = data.get("service") as string;
    const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY as string, domain: process.env.MAILGUN_DOMAIN as string });
    try {
        const bytes =  await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await writeFile(path.join(process.cwd(), "public/upload/", file.name), buffer);
        const emailTemplatePath = path.join(process.cwd(),"utils","emailTemplate.html");
        const emailTemplate = fs.readFileSync(emailTemplatePath,"utf-8");
        const replacedEmailTemplate = emailTemplate.replace("[recipientName]","Equipe Fullcoding").replace("[message]",message)
        const data = {
            from: `FullCoding <no-reply@${process.env.MAILGUN_DOMAIN}>`,
            to: email,
            subject: `Demande de devis pour ${service}`,
            html: replacedEmailTemplate,
            attachment: [
              new mg.Attachment({ data: path.join(process.cwd(), 'public', 'images', 'logo.png'), filename: 'logo.png' }),
              new mg.Attachment({ data: path.join(process.cwd(), 'public', 'upload', file.name), filename: file.name })
            ]
          };

          await mg.messages().send(data);
        return NextResponse.json({message:"Demande envoyer avec succes"},{status:200});
    }catch(error){
        console.log(error)
        return NextResponse.json({message:"error"},{status:200});
    }
              
}