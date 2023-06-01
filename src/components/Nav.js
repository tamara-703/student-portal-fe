import { Link } from "react-router-dom";

export default function Nav() {
  //navigation links
  return (
    <nav className="flex sm:justify-center space-x-4">
      {[
        ["Main page", "/"],
        ["Register new student", "/student/register"],
      ].map(([title, url]) => (
        <Link
          to={url}
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 font-mono"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
