interface formData 
{
    userName :string,
    subject: string,
    email: string,
    message:string
}

interface validatedForm
{
    userName: boolean | null | undefined,
    email: boolean | null | undefined,
}