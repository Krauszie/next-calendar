import { GetServerSideProps } from "next";

type DashboardProps = {
  email: string;
};

const Dashboard = ({ email }: DashboardProps) => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>You are logged in as:</p>
      <p className="text-white">{email}</p>
      <div>
        <button
          onClick={async () => {
            await fetch("/api/auth/logout", { method: "POST" });
            window.location.href = "/login/LoginPage";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = context.req.cookies; // Get cookies from the request

  const token = cookies.token || null;
  const email = cookies.email || null;

  if (!token) {
    return {
      redirect: {
        destination: "/login/LoginPage",
        permanent: false,
      },
    };
  }

  return {
    props: {
      email,
    },
  };
};

export default Dashboard;
