import { signOut } from "@/auth";

export default function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({
          redirect: true,
          redirectTo: "/",
        });
      }}
    >
      <button className="btn btn-outline-danger">
        Or click here to logout.
      </button>
    </form>
  );
}
