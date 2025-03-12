import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { name, mail, msg } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtpro.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.USER,
                pass: process.env.APP_PASSWORD,
            }
        })
        // , mothertravelspuducherry@gmail.com
        const mailOption = {
            from: process.env.USER,
            to: 'aruncodr@gmail.com',
            subject: "MOTHER MOTORS MSG",
            text: "MOTHER MOTORS MSG",
            html: `
                <h3>MOTHER MOTORS MESSAGES</h3>
      <ul className="">
        <li>Name   :  ${name}  </li>        
        <li>Gmail    :  ${mail}  </li>       
        <li>Message :  ${msg}  </li>              
      </ul>
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Message success" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Message Failed" }, { status: 500 })
    }
}