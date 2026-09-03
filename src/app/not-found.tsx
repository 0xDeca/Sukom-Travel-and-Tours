import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory-50">
      <div className="text-center px-6">
        <div className="text-8xl font-display text-sukom-400 mb-4">404</div>
        <h1 className="text-3xl text-charcoal-900 mb-3">Page not found</h1>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary text-sm">
            Back to Home
          </Link>
          <Link href="/visa-services" className="btn-secondary text-sm">
            Visa Services
          </Link>
        </div>
      </div>
    </div>
  );
}
