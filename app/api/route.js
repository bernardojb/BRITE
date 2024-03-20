import { NextResponse, NextRequest } from 'next/server';

// require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SG_API);

export async function POST(req) {
    let response = {}
    const body = await req.json() 
    const message = `<div style="max-width: 500px">
            <div style="padding: 25px; background: #F6F6F6; text-align: center; ">
                <a style="text-decoration: none; color:#A1A2B3"><img src="https://i.imgur.com/6GvnyrO.png" style="height: 40px; width: auto;"/></a>
            </div>
            <div style="background: #26262E; padding: 50px 25px">
              <p style="text-align: start; color: white; font-weight:bold; font-size: 32px; margin-bottom:20px; ">
                Nova mensagem
              </p>
                <div style="color: #A1A2B3; text-decoration: none;">
                    <p style="color: #A1A2B3; text-decoration: none;">Nome <strong>${body.name}</strong></p>
                    <p style="color: #A1A2B3; text-decoration: none;">Site <strong>${body.site}</strong></p>
                    <p style="color: #A1A2B3; text-decoration: none;">Email <strong>${body.mail}</strong></p>
                    <p style="color: #A1A2B3; text-decoration: none;">Telefone <strong>${body.phone}</strong></p>
                    <p style="color: #A1A2B3; text-decoration: none;">Serviço <strong>${body.service}</strong></p>
                    <p style="color: #A1A2B3; text-decoration: none;">Computadores <strong>${body.computers}</strong></p>
                    <p style="color: #A1A2B3; text-decoration: none;">Mensagem <strong>${body.message}</strong></p>
                </div>
            </div>
        </div>`;

    const data = {
        to: 'contato@briteinformatica.com.br',
        // to: 'bernardojbraga@gmail.com',
        from: 'BRITE Mailer <mail@hokup.com.br>',
        subject: `BRITE - Contato de <${body.mail}>`,
        text: 'BRITE',
        html: message
    }

    // sgMail.send(data);
    await sgMail
        .send(data)
        .then(() => {
            response = {
                status: 'success',
                message: "Your message was sent. I'll be in contact shortly.",
            };
        })
        .catch((error) => {
            response = {
                status: 'error',
                message: `Message failed to send with error, ${error}`,
            };
        });

    return NextResponse.json(response)
}
