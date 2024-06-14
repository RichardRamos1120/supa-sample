import supabase from '@/app/lib/supabaseClient';
import { NextResponse } from 'next/server';

type Data = { message: string } | { error: string };

export async function POST(request: Request) {
    try {
        const { email, password,firstname,lastname } = await request.json();
        const { user, error } = await supabase.auth.signUp({
            email,
            password,
        });
        
        if (error) {
            const data: Data = { error: error.message };
            return NextResponse.json({ data });
        }

        

        const data: Data = { message: 'User created successfully' };
        return NextResponse.json({ data });
    } catch (error) {
        console.error('Error during user registration:', error);
        const data: Data = { error: 'Internal server error' };
        return NextResponse.json({ data });
    }
}