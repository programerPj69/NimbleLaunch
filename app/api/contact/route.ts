import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Add the access key to the form data
    const formData = {
      ...data,
      access_key: "a933e5df-7a16-4fda-bad2-9a420fa46d85"
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}