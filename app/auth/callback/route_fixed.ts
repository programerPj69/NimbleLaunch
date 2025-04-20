import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const requestUrl = new URL(request.url); // ✅ MUST be declared before using it
    const { searchParams } = requestUrl;
    const error = searchParams.get('error');
  
    if (error) {
      return NextResponse.redirect(new URL('/error', requestUrl.origin));
    }
  
    return NextResponse.redirect(new URL('/', requestUrl.origin));
  
}
