import React from 'react'
import { Textarea } from '@nextui-org/react';
import Link from 'next/link'
import ContactForm from '@/components/contato/ContactForm';
import Animation from '@/components/structure/Animation';

export default function page() {
    return (
        <Animation>
            <section className='bg-cream py-10 '>
                <ContactForm />
            </section>
        </Animation>
    )
}
