
export function middleware(req) {
  console.log('Middleware triggered');
  return NextResponse.next();
}
