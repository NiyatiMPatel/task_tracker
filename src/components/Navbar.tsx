import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");
  return (
    <div className="flex items-center justify-between py-4 md:px-20 border-b border-slate-500">
      <Link
        to="/"
        className={
          todosData === null
            ? "text-2xl font-bold  text-green-500"
            : "text-2xl font-bold"
        }
      >
        All
      </Link>
      <Link
        to="/?todos=active"
        className={
          todosData === "active"
            ? "text-2xl font-bold  text-green-500"
            : "text-2xl font-bold"
        }
      >
        Active
      </Link>
      <Link
        to="/?todos=completed"
        className={
          todosData === "completed"
            ? "text-2xl font-bold  text-green-500"
            : "text-2xl font-bold"
        }
      >
        Completed
      </Link>
    </div>
  );
};

export default Navbar;
