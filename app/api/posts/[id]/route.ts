import { NextResponse } from 'next/server';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } } /* req, res */
) {
  const id = params.id;

  // logic delete post

  return NextResponse.json({ id });
}
