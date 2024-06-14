import { NextRequest, NextResponse } from "next/server";
import fs from "fs"
import { writeFile } from "fs/promises";
import path from "path";
import { createTransport } from "nodemailer";
export async function POST(request:NextRequest) {
    const data = await request.formData();
    const file = data.get("file") as File;
    const name = data.get("userName") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const service = data.get("service") as string;
    try {
        const bytes =  await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await writeFile(path.join(process.cwd(), "public/upload/", file.name), buffer);
        const emailTemplatePath = path.join(process.cwd(),"utils","emailTemplate.html");
        const emailTemplate = fs.readFileSync(emailTemplatePath,"utf-8");
        const replacedEmailTemplate = emailTemplate.replace("[recipientName]","Equipe Fullcoding").replace("[message]",message)
        const transporter = createTransport({
          service: 'hotmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });
      
        const mailOptions = {
          from: `FullCoding <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          subject: service,
          html: replacedEmailTemplate,
          replyTo:email,
          attachments: [
            {
              filename: 'fullCoding.png',
              path: path.join(process.cwd(), 'public', 'fullCoding.png'),
              cid: 'logo',
            },
            {
              filename: file.name,
              path: path.join(process.cwd(), 'public', 'upload', file.name),
            },
          ],
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({message:"Demande envoyer avec succes"},{status:200});
    }catch(error){
        console.log(error)
        return NextResponse.json({message:"error"},{status:200});
    }
              
}