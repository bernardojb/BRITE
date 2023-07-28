import React from 'react'
import { Textarea } from '@nextui-org/react';
import Link from 'next/link'
import ContactForm from '@/components/contato/ContactForm';

export default function page() {
    return (
        <section className='bg-cream py-10 '>
            <ContactForm />
        </section>
    )
}
