import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 pt-4">
      <p className="text-base font-medium text-slate-900 dark:text-slate-50">
        © 2024 Tamim Al Hridoy All Rights Reserved
      </p>
      <div className="flex flex-wrap gap-x-2">
        <Link className="text-base dark:text-slate-50 hover:underline" to="/">
          Privacy Policy
        </Link>
        <Link className="text-base dark:text-slate-50 hover:underline" to="/">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};
