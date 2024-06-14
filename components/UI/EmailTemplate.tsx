import Image from "next/image";
import { FC } from "react"

interface EmailTemplateProps {
    message: string,
    recipientName: string
}

const EmailTemplate: FC<Readonly<EmailTemplateProps>>= ({message, recipientName})=>{
    return (
        <div className="max-w-xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
        <div className="bg-purple-700 text-white text-center p-4 rounded-t-lg">
          <Image
            src="cid:logo"
            alt="FullCoding Logo"
            className="w-24 h-auto mx-auto"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Bonjour, {recipientName},</h2>
          <div className="bg-gray-200 border-l-4 border-purple-700 p-4 rounded-md mb-6">
            <p className="text-gray-700">{message}</p>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm mt-6">
          <p>&copy; 2024 FullCoding. All rights reserved.</p>
        </div>
      </div>
    )
}

export default EmailTemplate;