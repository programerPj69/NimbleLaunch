import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const { data, error } = await supabase.auth.getSession();

  const requestUrl = new URL(request.url); // Define requestUrl using the incoming request

  return NextResponse.redirect(new URL('/', requestUrl.origin));
}
