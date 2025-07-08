import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Welcome to <span className="text-blue-900">NoteCrafft</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your smart and simple solution to take, manage, and organize notes securely in the cloud.
        </p>

        {user ? (
          <>
            <div className="grid md:grid-cols-2 gap-6 text-left mt-10">
              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">📝 Create Note</h3>
                <p className="text-gray-700">
                  Easily add new notes with title, description, and tags.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">✏️ Update Note</h3>
                <p className="text-gray-700">
                  Edit your existing notes whenever you need to update them.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">🗑️ Delete Note</h3>
                <p className="text-gray-700">
                  Move notes to trash if you no longer need them. You can always recover or permanently delete later.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-lg p-5">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">♻️ Recently Deleted</h3>
                <p className="text-gray-700">
                  Access your recently deleted notes in the Trash section. Restore or permanently remove them.
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center gap-4 flex-wrap mt-6">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
